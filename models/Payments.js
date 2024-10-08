import mongoose from "mongoose";
const {Schema ,model} = mongoose;

const PaymentSchema = new Schema({
    name: {type: String , require: true},
    to_user: {type: String , require: true},
    oid: {type: String , require: true},
    message: {type: String },
    amount: {type: Number , require: true},
    createdAt: {type: Date , default: Date.now},//time stamp
    updatedAt: {type: Date , default: Date.now},//time stamp
    
    done: {type: Boolean , default: false},//kya hogaya hai ya nahi
})

export default mongoose.models.Payment || model("Payment",PaymentSchema) ;