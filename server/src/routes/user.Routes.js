import * as userController from '../controllers/user.controller.js'
import { loginValidation } from "../middlewares/loginValidation.js";
import express from "express"

const router = express.Router()

router.get("/users/search", userController.searchUser);

router.get("/users",userController.getUsers)
router.get("/users/:id",userController.selectUser)
router.post("/login",loginValidation,userController.loginUser)
router.post("/users",userController.insertUsers)
router.put("/users/:id",userController.updateUser)
router.delete("/users/:id",userController.deleteUser)

export default router