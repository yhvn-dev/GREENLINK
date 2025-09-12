import {query} from "../config/db.js"

export const getUsers = async() =>{
    const { rows } = await query("SELECT * FROM users");
    return rows
}


export const selectUser = async(id) =>{

    try{
        const { rows } = await query("SELECT * FROM users WHERE id = $1",[id])
        return rows[0] 
    }catch(err){
        console.log(`Error Selecting User ${err} On Models`)
        throw err
    }   
}

export const insertUsers = async(username,fullname,email,phone_number,password_hash,role,status)=>{
    
    try{
        const userData = {username,fullname,email,phone_number,password_hash,role,status}
        const { rows } = await query(`INSERT INTO users 
                (username,fullname,email,phone_number,password_hash,role,status) 
                VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,[userData])
                
        return rows[0]

    }catch(err){
        console.log(`Error Inserting Users ${err} On Models`)
    }
    
}




