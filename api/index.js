import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'; // Explicit extension for ES modules

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error(err));

const app = express();

app.use("/api/user", userRouter); // Mount the user router at the "/api/user" path

app.listen(8000, () => console.log('Server is running on port 8000'));