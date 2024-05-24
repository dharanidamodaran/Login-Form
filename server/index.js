import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"
import cors from "cors"
import dotenv from 'dotenv'
import axios from "axios"
import Userroute from "./routes/userroute.js";
import { MongoClient } from "mongodb"
dotenv.config()


const app = express()
app.use(express.json())
//app.use(cors({origin:["http://localhost:3001/Register"]}))
app.use(cors({
    origin: 'http://localhost:3000', // Allow only this origin
    methods: 'GET,POST', // Allow only GET and POST methods
    allowedHeaders: 'Content-Type', // Allow only specific headers
  }));
  
mongoose
    .connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));



app.use("/Register",Userroute)

const port = 3210
app.listen(port, () => {
    console.log(`Be started at port ${port}`)
})