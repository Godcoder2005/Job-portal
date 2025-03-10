// package imports 
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
//file imports 
import connectDB from "./config/db.js";
//routes
import testRoutes from "./routes/testroutes.js";
import authroutes from "./routes/authroutes.js";
import errormiddleware from "./middleware/errormiddleware.js";

const app = express();

// middlewares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

//Data base connection 
connectDB();

//Dot env config
dotenv.config();

const PORT = process.env.PORT || 3080

// app.get('/',(req,res)=>{
//     res.send("<h1>Job portal project starts here</h1>")
// })

// routes 
app.use('/api/v1/test',testRoutes)
app.use('/api/v1/auth',authroutes)

//validation middlewares
app.use(errormiddleware)

//listening port
app.listen(PORT,()=>{
    try {
        console.log("Server has been started")
    } catch (error) {
        console.log(error)
    }
})

