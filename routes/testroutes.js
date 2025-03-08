import express from "express"
import { testPostController } from "../controller/testcontroller.js"

const Router = express.Router()

Router.post('/test-post', testPostController)

export default Router