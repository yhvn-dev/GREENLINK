import userRoutes from './routes/user.Routes.js'
import express from "express";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())


app.use('/',userRoutes)

app.get("/hello",(req,res)=>{
    res.send("<p>Hello World</p>")
})

app.get("/",(req,res) =>{
    res.send("Serving is Running")
})


const port = process.env.PORT || 5000
app.listen(port,()=>{console.log(`Listening to Port, ${port}`)})

