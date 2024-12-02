import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const app = express();


mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to MongoDB!')
}).catch((err) =>{
    console.log(err);
})

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Server is running port: ${port}`)
})