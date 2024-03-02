const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.send("This thing is working")
})

app.listen(PORT,()=>{
    console.log("server is running  on port "+PORT)
})
