// package imports 
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
//file imports 
import connectDB from "./config/db.js";
import testRoutes from "./routes/testroutes.js"

const app = express();

//Data base connection 
connectDB();

dotenv.config();

const PORT = process.env.PORT || 3080

// app.get('/',(req,res)=>{
//     res.send("<h1>Job portal project starts here</h1>")
// })

// routes 
app.use('/api/v1/test',testRoutes)

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.listen(PORT,()=>{
    try {
        console.log("Server has been started")
    } catch (error) {
        console.log(error)
    }
})

