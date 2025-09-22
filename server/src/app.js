import userRoutes from "./routes/ProtectedRoutes/user.Routes.js";
import pageRoutes from "./routes/ProtectedRoutes/page.Routes.js"
import publicRoutes from "./routes/UnprotectedRoutes/public.Routes.js"
import express from "express";
import cors from "cors";
import dotenv from "dotenv"



// import { randomBytes } from "crypto"
// const secret = randomBytes(64).toString("hex");



dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())




app.use('/',userRoutes)
app.use('/',publicRoutes)
app.use('/',pageRoutes)



app.get("/hello",(req,res)=>{
    res.send("<p>Hello World</p>")
})

app.get("/",(req,res) =>{
    res.send("Serving is Running")
})


const port = process.env.PORT || 5000
app.listen(port,()=>{console.log(`Listening to Port, ${port}`)})

