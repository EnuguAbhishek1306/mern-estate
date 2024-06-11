import User from "../models/user_models.js"
import bcrypt from 'bcryptjs'

export const signup = async(req,res,next)=>{
    const {username,email,password}=req.body
    const hashedpassword=bcrypt.hashSync(password, 10)
    const newUser= new User({username,email,password:hashedpassword})
    try {
        await newUser.save()
    res.status(201).json("User created sucessfully")
    } catch (error) {
        next(error)
    }
    
}