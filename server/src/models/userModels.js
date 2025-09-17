import {query} from "../config/db.js"
import * as utils from "../utils/hashPass.js"

export const descUser = async () => {
    try{

        const table = await query(`SELECT column_name, data_type, is_nullable
            FROM information_schema.columns
            WHERE table_name = users`)
        return table[0]
        
    }catch(err){
        console.log(`MODELS: Error Describing Tables`)
        throw err
    }
}

export const findUser = async(loginInput) =>{

    try{
        const { rows } = await query("SELECT * FROM users WHERE username = $1 OR email = $1",[loginInput]) 
        return rows[0]
        
    }catch(err){
        console.log(`MODELS: Error Getting Username and Email ${err}`, )
        throw err
    }
}

                

export const getUsers = async() =>{
    try{
        const { rows } = await query("SELECT * FROM users");
        return rows
    }catch(err){
        console.log(`MODELS: Error Getting Users ${err}`)
        throw err
    }
}


export const selectUser = async(id) => {
    try{
        const { rows } = await query("SELECT * FROM users WHERE id = $1",[id])
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
        console.log("Password Value",password)

        const { rows } = await query(`INSERT INTO users 
                (username,fullname,email,phone_number,password_hash,role,status) 
                VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,[username,fullname,email,phone_number,hashedPassword,role,status])
                
        return rows[0]

    }catch(err){
        console.log(`MODELS: Error Inserting Users ${err}`)
        throw err
    }
    
}

export const updateUser = async(id,userData) => {
    try{

      const {username,fullname,email,phone_number,password,role,status} = userData
      const hashedPassword = await utils.hashedPass(password)

      const { rows } = await query(`UPDATE users SET 
                       username = $1,fullname = $2, email = $3,phone_number = $4,
                       password_hash = $5,role = $6, status = $7 WHERE id = $8 
                       RETURNING *`,
                       [username,fullname,email,phone_number,hashedPassword,role,status,id])

                    // if another user has $3 (the email) - no update
                    // if the same user same id - update works
                    // AND NOT EXISTS (SELECT 1 FROM users WHERE email = $3 and id <> $8)

      return rows[0]

    }catch(err){
        console.log(`MODELS: Error Updating Users ${err}`)
        throw err
    }
}



export const deleteUser = async (id) =>{
    
    try{
        const { rows } = await query("DELETE FROM users WHERE id = $1 RETURNING *",[id])
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




