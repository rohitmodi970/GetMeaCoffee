import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payments from "@/models/Payments";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import User from "@/models/User";


export const POST = async (req)=>{
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body);

    
    
    
    //check if razorpay Orderid is present on the server
    let p = await  Payments.findOne({oid: body.razorpay_order_id})
    if(!p){
        return NextResponse.json({success: false , message:"Order Id not found"})
    }

    //fetch the secret of the user who is getting the payments
    let user = await User.findOne({username: p.to_user})
    const secret = user.razorpaysecret

    //Verify the payment
    let xx =  validatePaymentVerification({"order_id":body.razorpay_order_id,"payment_id": body.razorpay_payment_id},body.razorpay_signature,secret)

    if(xx){
        //update the status payment
        const updatePayment = await Payments.findOneAndUpdate({oid: body.razorpay_order_id},{done: true},{new: true})
        // console.log(updatePayment)
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.json({success: false , message:"Payment Verification Failed"})
    }
}

