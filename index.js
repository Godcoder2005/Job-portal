import express from "express"
import mongoose from "mongoose"

const app = express();
const PORT = 3080

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