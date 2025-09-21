import * as userController from '../controllers/user.controller.js'
import { loginValidation } from "../middlewares/loginValidation.js";
import { verifyAccessToken } from '../middlewares/authMiddleware.js';
import express from "express"

const router = express.Router()

router.get("/users/search", verifyAccessToken, userController.searchUser);
router.get("/users", verifyAccessToken, userController.getUsers);
router.get("/users/:user_id", verifyAccessToken, userController.selectUser);
router.get("/users/table", verifyAccessToken, userController.fetchUserTable);

router.post("/login", loginValidation, userController.loginUser); // public

router.post("/users", verifyAccessToken, userController.insertUsers);
router.put("/users/:user_id", verifyAccessToken, userController.updateUser);
router.delete("/users/:user_id", verifyAccessToken, userController.deleteUser);


export default router



 