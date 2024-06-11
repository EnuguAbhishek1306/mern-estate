import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';// Explicit extension for ES modules
import authRouter from './routes/auth.route.js'; // Explicit extension for ES modules

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error(err));

const app = express();
app.use(express.json())
app.use("/api/user", userRouter); 
app.use("/api/auth",authRouter)

app.listen(8000, () => console.log('Server is running on port 8000'));