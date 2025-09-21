import dotenv from "dotenv";
import * as authModels from "../models/authModels.js"
import { generateAccessToken } from "../utils/tokens.js";
import jwt from "jsonwebtoken"

dotenv.config()


export const refreshAccessToken = async(req,res) => {

    const { refreshToken } = req.body;
    const tokenRecord = await authModels.findRefreshToken(refreshToken)
    
    if(!tokenRecord) return res.status(401).json({message:"Refresh Token Not Found"})

    try{
    
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



