import * as userController from '../controllers/user.Controller.js'
import express from "express"




const router = express.Router()

router.get("/users",userController.getUsers)
router.get("/users/:id",userController.selectUser)


export default router