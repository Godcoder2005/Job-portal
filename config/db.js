import mongoose from "mongoose";
import dotenv from "dotenv"

const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect("mongodb+srv://6305091489nani:9prUE5teFmupGVk@cluster1.ajvjo.mongodb.net/jobportal")
        console.log("Connected successfully")
    } catch (error) {
        console.log(`Error is ${error}`)
    }
}

export default connectDB;