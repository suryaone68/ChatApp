import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import  {Server}  from "socket.io"
import http from "http"


const app = express()
const server  = http.createServer(app)
const io = new Server(server) // handle sockets io  
dotenv.config()
const Port = process.env.Port

io.on("connection", (socket)=>{
     // console.log("first", socket.id)
      socket.on("User-Message",(message)=>{
        console.log("a new user", message )
        io.emit("message", message) // sbhi ko bhj dia server p  agr frontend se msg aata hai 
     })
     
})


app.use(express.static("../public"))

app.get("/", (req, res)=>{
return res.sendFile("/public/index.js")
})

server.listen(Port, ()=>{
    console.log(`server is running at port http://localhost:${Port}`)
})