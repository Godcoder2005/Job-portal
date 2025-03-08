import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";

const app = express();

//Data base connection 
connectDB();

dotenv.config();

const PORT = process.env.PORT || 3080

app.listen(PORT,()=>{
    try {
        console.log("Server has been started")
    } catch (error) {
        console.log(error)
    }
})

app.get('/',(req,res)=>{
    res.send("<h1>Job portal project starts here</h1>")
})

