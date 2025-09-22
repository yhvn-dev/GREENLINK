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

export const deleteRefreshToken = async(req,res) =>{

    try{

         const refreshToken = req.cookies.refreshToken;
         const result = await authModels.deleteRefreshToken(refreshToken)
         res.clearCookie("refreshToken", { httpOnly: true, sameSite: "Strict", secure: true });

        if(!result)  return res.status(401).json({message:"Error Deleting Refresh Token"})

        res.json({result})

    }catch(err){
        return res.status(403).json({message: "AUTH CONTROLLER: Referesh Token Deletion Unsuccessfull!"})
    }

}



