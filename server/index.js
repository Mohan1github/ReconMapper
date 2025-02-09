const express = require("express")
const app  = express()
const cors = require("cors")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const {authrouter} = require("../server/routers/authroutes")
const {bidrouter} = require("../server/routers/bidrouter")
const bodyParser = require("body-parser")

app.use(cors())
app.use(express.json())
require("dotenv").config()

app.use("/api/v1/auth",authrouter)
app.use("/api/v1/bids",bidrouter)
require("dotenv").config()
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Mongodb connected successfully")
}).catch(err=>{
    console.log("Error connecting to mongodb:",err)
})
app.listen(3000,()=>{
    console.log("server is running at 3000...")
})