import * as userModels from "../models/userModels.js";

export const getUsers = async (req, res) => {
    try {
        const users = await userModels.getUsers();
        res.status(200).json(users);
        console.log(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error Getting Users" });
    }
};


export const selectUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModels.selectUser(userId);
        
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
        console.log(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: `Error Selecting User` });
    }
};

export const insertUsers = async (req,res) =>{
    try{

        const users = await userModels.insertUsers()
        res.status(200).json(users)
        
    }catch(err){
        console.error(err);
        res.status(500).json({message:`Error Inserting Users`,err})
    }
}
