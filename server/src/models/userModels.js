import {query} from "../config/db.js"
import * as utils from "../utils/hashPass.js"


export const findUser = async (loginInput) =>{

    try{
        const { rows } = await query("SELECT * FROM users WHERE username = $1 OR email = $1",[loginInput]) 
        return rows[0]
        
    }catch(err){
        console.log(`MODELS: Error Getting Username and Email ${err}`, )
        throw err
    }
}


export const countAllUsers = async() =>{
    try {
        
        const { rows } = await query("SELECT COUNT(*) AS total_users FROM users");
        return rows[0];

    } catch (err) {
        console.log(`MODELS: Error Counting Users ${err}`)
    }
}

export const countUserByRole = async () => {
  try {
    const { rows } = await query(`
      SELECT role, COUNT(*) AS total_users FROM users GROUP BY role ORDER BY role;`);
    return rows; // will return an array, not just one row
  } catch (err) {
    console.log(`MODELS: Error Counting Users By Roles ${err}`);
  }
};
                

export const getUsers = async() =>{
    try{
        const { rows } = await query("SELECT * FROM users");
        return rows
    }catch(err){
        console.log(`MODELS: Error Getting Users ${err}`)
        throw err
    }
}


export const selectUser = async(user_id) => {
    try{
        const { rows } = await query("SELECT * FROM users WHERE user_id = $1",[user_id])
        return rows[0] 
    }catch(err){
        console.log(`MODELS: Error Selecting User ${err}`)
        throw err
    }   
}

export const insertUsers = async(userData) => {    
    try{

        const {username,fullname,email,phone_number,password,role,status} = userData
        const hashedPassword = await utils.hashedPass(password)

        const { rows } = await query(`INSERT INTO users 
                (username,fullname,email,phone_number,password_hash,role,status) 
                VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,[username,fullname,email,phone_number,hashedPassword,role,status])
                
        return rows[0]

    }catch(err){
        console.log(`MODELS: Error Inserting Users ${err}`)
        throw err
    }
    
}

export const updateUser = async(user_id,userData) => {
    try{

      const {username,fullname,email,phone_number,password,role,status} = userData

      if(password && password.trim() !== ""){
        const hashedPassword = await utils.hashedPass(password)

          const { rows } = await query(`UPDATE users SET 
                       username = $1,fullname = $2, email = $3,phone_number = $4,
                       password_hash = $5,role = $6, status = $7 WHERE user_id = $8 
                       RETURNING *`,
                       [username,fullname,email,phone_number,hashedPassword,role,status,user_id])

        return rows[0]

      }else{

        const { rows } = await query(
        `UPDATE users  SET username = $1,
         fullname = $2, email = $3, phone_number = $4, role = $5, status = $6 
         WHERE user_id = $7 RETURNING *`,
        [username, fullname, email, phone_number, role, status, user_id]);

         return rows[0];
      }
      
    }catch(err){
        console.log(`MODELS: Error Updating Users ${err}`)
        throw err
    }

}



export const deleteUser = async (user_id) =>{
    
    try{
        const { rows } = await query("DELETE FROM users WHERE user_id = $1 RETURNING *",[user_id])
        return rows[0]
    }catch(err){
        console.log(`MODELS: Error Deleting Users ${err}`)
        throw err
    }

}



export const searchUser = async (term) => {
  try {
    const { rows } = await query(
      `SELECT * FROM users 
       WHERE username ILIKE $1 
       OR fullname ILIKE $1 
       OR email ILIKE $1 
       OR phone_number ILIKE $1 
       OR role ILIKE $1 
       OR status ILIKE $1`,
      [`%${term}%`]
    );
    return rows; 
  } catch (err) {
    console.log(`MODELS: Error SEARCHING Users`, [`%${term}%`]);
    throw err;
  }
};




