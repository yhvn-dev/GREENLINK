import * as userController from '../../controllers/user.controller.js'
import { loginValidation } from "../../middlewares/loginValidation.js";
import express from "express";



    const router = express.Router()
    router.post("/login", loginValidation, userController.loginUser); // public



export default router


