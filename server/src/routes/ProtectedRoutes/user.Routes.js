import * as userController from '../../controllers/user.controller.js'
import { verifyAccessToken, verifyRefreshToken } from '../../middlewares/authMiddleware.js';
import * as authController  from "../../controllers/auth.Controller.js" 
import express from "express"



const router = express.Router()

router.get("/users/search", verifyAccessToken, userController.searchUser);
router.get("/users", verifyAccessToken, userController.getUsers);
router.get("/users/:user_id", verifyAccessToken, userController.selectUser);




router.post("/users", verifyAccessToken, userController.insertUsers);
router.put("/users/:user_id", verifyAccessToken, userController.updateUser);
router.delete("/users/logout-all",verifyRefreshToken, authController.logoutAllDevices)
router.delete("/users/:user_id", verifyAccessToken, userController.deleteUser);



export default router



 