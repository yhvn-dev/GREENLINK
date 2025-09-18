import * as userModels from "../models/userModels.js";
import bcrypt from "bcrypt";


export const fetchUserTable = async (req,res) =>{
    
    try{

        const table = await userModels.descUser();
        res.status(200).json(table)
        console.log(table)
        
    }catch(err){
        console.log("CONTROLLER:",err)
        res.status(500).json({message:"CONTROLLER: Error Describing Table"})
    }
    
}

export const getUsers = async (req,res) => {
    try {
        const users = await userModels.getUsers();
        res.status(200).json(users);
        console.log(users);
    } catch (err) {
        console.error(`CONTROLLER:`,err);
        res.status(500).json({ message: "CONTROLLER: Error Getting Users" });
    }
};


export const loginUser = async (req,res) =>{
    
    try{

        const { loginInput,password } = req.body;        
        const user = await userModels.findUser(loginInput);

        // credentials
        if (!user){
            return res.status(404).json({message:"User Not Found"})
        }

        // password
        const isMatch = await bcrypt.compare(password,user.password_hash)
        if(!isMatch){
            return res.status(401).json({message: "Invalid Credentials"})
        }
        
        res.status(200).json({
            message:"Login Sucessfull",
            user:{
                id:user.id,
                username: user.username,
                email:user.email,
                phone_number:user.phone_number,
                role:user.role,
                status:user.status
            },    
        })
        console.log(user)

    
    }catch(err){
        console.error("CONTROLLER:",err)
        return res.status(500).json({message: "CONTOLLER Error Getting Credentials"})
    }
    
}


export const selectUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await userModels.selectUser(userId);
        
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
        console.log(user);
    } catch (err) {
        console.error(`CONTROLLER:`,err);
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
        res.status(500).json({ message: "Error inserting user", error: err.message });
    }
}

export const updateUser = async (req,res) => {

    try{
        const userId = req.params.id
        const userData = req.body;
        const user = await userModels.updateUser(userId,userData)
        res.status(200).json(user)
        console.log(user);

    }catch(err){
        console.error(`CONTROLLER:`,err);
        res.status(500).json({message:`CONTROLLER:  Error Updating User`,err})
    }

}

export const deleteUser = async (req,res) =>{
    
    try{
        const userId = req.params.id
        const user = await userModels.deleteUser(userId)
        res.status(200).json(user)
        console.log("CONTROLLER; User Deleted Sucessfully")
        
    }catch(err){
        console.error(`CONTROLLER:`,err);
        res.status(500).json({message:`CONTROLLER:  Error Deleting User`,err})
    }

}



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
