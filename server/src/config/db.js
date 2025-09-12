import pg from "pg"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import dotenv from "dotenv"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config({ path: join(__dirname, "../../.env") })


// console.log("Loaded ENV:", {
//     host: process.env.PG_HOST,
//     user: process.env.PG_USER, 
//     database: process.env.PG_DATABASE,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT,
//     });


const db = new pg.Client({
    user: process.env.PG_USER,    
    host: process.env.PG_HOST,  
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    port: parseInt(process.env.PG_PORT, 10)
})

;(async () => {  
    try {
        await db.connect()
        console.log("✅ Connected to PostgreSQL")
    } catch (err) {
        console.error("❌ Connection error", err)
        process.exit(-1)
    }
})()

db.on("error", (err) => {
    console.error("Connection Error", err)
    process.exit(-1)
})

export const query = async (text, params) => {
    return db.query(text, params)
}
