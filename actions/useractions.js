"use server"
import Razorpay from "razorpay"
import Payments from "@/models/Payments"
import connectDB from "@/db/connectDb"
import User from "@/models/User"
import Username from "@/app/[username]/page"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDB();
    //fetch the secret of the user who is getting the payments
    let user = await User.findOne({ username: to_username })
    const secret = user.razorpaysecret
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })


    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(options)
    //craete a payment object which shows a pending payment in the database
    await Payments.create({
        oid: x.id,
        amount: Number.parseInt(amount) / 100,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message


    })
    return x
}
//this will return the user too display the payment received message in PaymentPage 
// export const fetchUser = async (username) => {
//     await connectDB()
//     let u = await User.findOne({ username: username })
//     let user = u.toObject({ flattenObjectIds: true })
//     return user
// }

export const fetchUser = async (username) => {
  await connectDB(); // Ensure the DB connection is established
  let u = await User.findOne({ username: username });
  
  // Handle the case where the user is not found
  if (!u) {
    throw new Error('User not found');
  }
  
  let user = u.toObject({ flattenObjectIds: true });
  return user;
};

export const searchUser = async (query) => {
    await connectDB();
    // Use regex for partial matching (case-insensitive)
    const regex = new RegExp(query, 'i');
    const users = await User.find({ 
        $or: [
            { name: { $regex: regex } },
            { username: { $regex: regex } },
            { email: { $regex: regex } }
        ]
    }).lean();
    
    return users;
};
//return the received payments in sorted 
export const fetchPayment = async (username) => {
    await connectDB()
    let p = await Payments.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()

    return p
}

//update user its update the user data like profie img , username change
export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)//convert the data to object

    //if the username is being updated , check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already  exists" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        //Now update all the  username in the Payments (if you say u changed your username)
        await Payments.updateMany({ to_username: oldusername }, { to_username: ndata.username })
    }
    else {

        await User.updateOne({ email: ndata.email }, ndata)//we not allowing to change email
    }



}