import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();


const app = express();



mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to MongoDB!')
}).catch((err) =>{
    console.log(err);
})

app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

app.listen(port, () =>{
    console.log(`Server is running port: ${port}`)
})