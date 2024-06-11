import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{console.log('connected to MongoDb!')}).catch((err)=>{
    console.log(err)
})
const app=express()
app.listen(8000,()=>{
    console.log('Server is running the port 8000')
})
