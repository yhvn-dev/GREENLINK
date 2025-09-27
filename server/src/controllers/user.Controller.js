import * as userModels from "../models/userModels.js";
import * as authModels from "../models/authModels.js";
import { getDeviceInfo } from "../utils/getDeviceInfo.js";
import { generateAccessToken, generateRefreshToken } from "../utils/tokens.js"
import bcrypt from "bcrypt";





export const getUsers = async (req, res) => {
  try {
    const users = await userModels.getUsers();
    res.status(200).json(users);
    console.log(users);
  } catch (err) {
    console.error(`CONTROLLER:`, err);
    res.status(500).json({ message: "CONTROLLER: Error Getting Users" });
  }
};




export const loginUser = async (req, res) => {

  try {
    const { loginInput, password } = req.body;
    const user = await userModels.findUser(loginInput);

    // credentials
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // password
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const userId = user.user_id;
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    const deviceInfo = getDeviceInfo(req);
    
    const token = await authModels.insertRefreshToken(userId,{refresh_token: refreshToken, 
                                                              device: deviceInfo });
      
      res.cookie("refreshToken",refreshToken,{
        httpOnly: true,
        secure: true,     
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, 
      })              
      
      res.cookie("device_id",token.device_id,{
        httpOnly: true, 
        secure: true,
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      
      res.status(200).json({
        message: "Login Successful",
        accessToken,
        device_id:token.device_id,
        user: {
          user_id: user.user_id,
          username: user.username,
          email: user.email,
          phone_number: user.phone_number,
          role: user.role,
          status: user.status, 
          created_at:user.created_at,
          profile_picture: user.profile_picture
        },
      });
      
  console.log("TOKEN DATA FROM CONTROLLER ----------------------------------- ---------------",token)
  console.log("DATA FROM LOGIN CONTROLLER ----------------------------------- ---------------",user,accessToken)

  } catch (err) { 
    console.error("CONTROLLER:", err);
    return res
      .status(500)
      .json({ message: "CONTROLLER Error Getting Credentials" });
  }
  
};


export const getLoggedUser = async(req,res) =>{

  try{ 

   if(!req.user) return res.status(404).json({message:"User not found"})

   res.json({
      user_id: req.user.user_id,
      username: req.user.username,
      fullname: req.user.fullname,
      email: req.user.email,
      phone_number: req.user.phone_number,
      role: req.user.role,
      status: req.user.status,
      profile_picture: req.user.profile_picture || null,
    });

  }catch(err){
    console.error("CONTROLLER: Error Fetching Logged User",err)
    return res.status(500).json({message:"Server Error Fetching Users"})
  }

}


export const selectUser = async (req, res) => {

  const userId = req.params.user_id; 
  try {
    const user = await userModels.selectUser(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
    console.log(user);
  } catch (err) {
    console.error(`CONTROLLER:`, err);
    res.status(500).json({ message: `CONTROLLER: Error Selecting User` });
  }

};

export const insertUsers = async (req, res) => {

  try {
    
    const userData = req.body;
    const user = await userModels.insertUsers(userData);

    res.status(201).json(user);
    console.log("User inserted:", user);
  } catch (err) {
    console.error("CONTROLLER: Error Inserting Users", err);
    res
      .status(500)
      .json({ message: "Error inserting user", error: err.message });
  }

};

export const updateUser = async (req, res) => {
  try {
    
    const userId = req.params.user_id; 
    const userData = req.body;
    const user = await userModels.updateUser(userId, userData);

    res.status(200).json(user);
    console.log(user);
    
  } catch (err) {
    console.error(`CONTROLLER:`, err);
    res.status(500).json({ message: `CONTROLLER: Error Updating User`, err });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.user_id; 
    const user = await userModels.deleteUser(userId);

    console.log("User to delete:", userId);
    res.status(200).json({message: `CONTROLLER: User Deleted Succesfully`,user});
    console.log("CONTROLLER: User Deleted Successfully");
  } catch (err) {
    console.error(`CONTROLLER:`, err);
    res.status(500).json({ message: `CONTROLLER: Error Deleting User`, err });
  }
};



export const searchUser = async (req, res) => {
  try {
    const term = req.query.q;
    const users = await userModels.searchUser(term);
    res.status(200).json(users);
    console.log(`CONTROLLER:`, users);
  } catch (err) {
    console.error(`CONTROLLER:`, err);
    res.status(500).json({ message: `CONTROLLER: Error Searching User`, err });
  }
};
