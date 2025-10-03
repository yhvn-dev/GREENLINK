import * as userController from '../../controllers/user.controller.js'
import { verifyAccessToken, verifyRefreshToken } from '../../middlewares/authMiddleware.js';
import * as authController  from "../../controllers/auth.Controller.js" 
import * as userValidation from "../../middlewares/userValidation.js"


import express from "express"



const router = express.Router()

router.get("/users/search", verifyAccessToken, userController.searchUser);
router.get("/users", verifyAccessToken, userController.getUsers);
router.get("/users/count",verifyAccessToken, userController.getUsersCount)
router.get("/users/roles",verifyAccessToken, userController.getUserCountByRole)
router.get("/users/me",verifyAccessToken,userController.getLoggedUser)
router.get("/users/:user_id", verifyAccessToken, userController.selectUser);



router.post("/users", verifyAccessToken,userValidation.insertUserValidation, userController.insertUsers);
router.put("/users/:user_id", verifyAccessToken,userValidation.updateUserValidation, userController.updateUser);
router.delete("/users/logout-all",verifyRefreshToken, authController.logoutAllDevices)
router.delete("/users/logout",verifyRefreshToken,authController.logoutFromThisDevice)
router.delete("/users/:user_id", verifyAccessToken, userController.deleteUser);


export default router



 