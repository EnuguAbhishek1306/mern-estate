import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type :String,
        required:true,
        unique:true,
    },
    email:{
        type :String,
        required:true,
        unique:true,
    },
    username:{
        type :String,
        required:true,
    },
},{timestamps:true})
const User = mongoose.model('user',userSchema)
export default User;