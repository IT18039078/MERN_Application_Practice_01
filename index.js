//import all the packages as moduls
import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from 'cors';

//set up the other initial configuration
const app = express()
dotenv.config();
app.use(express.json({extended: true})) // ? have to search about this in analysis time
app.use(express.urlencoded({extended: true})) // ? have to search about this in analysis time
app.use(cors());

const mongodb = "mongodb+srv://WC1:wc123@cluster0.tvbu1.mongodb.net/MERN_01?retryWrites=true&w=majority"

app.get('/',(req, res)=>{
    res.send('Welcome to servers')
})

// configuration for port number 
const PORT = process.env.PORT || 5000; // ? why we use this dotenv configuration
mongoose.connect(mongodb).then(()=>{
    console.log(`server rinning on ${PORT}`)
    app.listen(PORT) 
}).catch(err=>console.log(err))