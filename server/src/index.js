const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authApi = require('./api/auth')
const userInterestApi = require('./api/user')
const projectApi = require('./api/projects')
const app = express()
const PORT = process.env.PORT || 3001
mongoose.connect(process.env.MONGODB_PATH)

app.use(express.json())

app.use(cors())

app.use('/api/auth',authApi)
app.use('/api/user',userInterestApi)
app.use('/api/project/',projectApi)
app.listen(PORT,()=>{
    console.log("server is running on port "+PORT)
})
