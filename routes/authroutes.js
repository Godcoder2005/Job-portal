import express from "express";
import {Authentication} from '../controller/authController.js'

const Router = express.Router();

Router.post('/register' , Authentication)

export default Router