import dotenv from "dotenv";
import * as authModels from "../models/authModels.js"
import { generateAccessToken } from "../utils/tokens.js";
import jwt from "jsonwebtoken"

dotenv.config()

export const refreshAccessToken = async(req,res) => {

    try{

        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.status(401).json({message:"Refresh Token Not Found"})      

    
        const tokenRecord = await authModels.findRefreshToken(refreshToken)
        if(!tokenRecord) return res.status(401).json({message:"Invalid Refresh Token"})     


        const payload = jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);
        const accessToken = generateAccessToken({
            user_id: payload.user_id,
            username: payload.username,
            email: payload.email,
            role: payload.role
        });

        res.json({accessToken})

    }catch(err){
        return res.status(403).json({message: "AUTH CONTROLLER: Refresh Token Expired and Invalid!"})
    }        

}




export const logoutAllDevices = async (req, res) => {
  try {
    const user_id = Number(req.user.user_id); 
    const result = await authModels.deleteAllRefreshToken(user_id);

    // Always clear the cookie, kahit walang token sa DB
    res.clearCookie("refreshToken", { httpOnly: true, sameSite: "Strict", secure: true });

    // Idagdag friendly message
    return res.status(200).json({ message: "Logged out from all devices" });

  } catch (err) {
    return res.status(500).json({ message: "Logout all devices failed", error: err.message });
  }
};


