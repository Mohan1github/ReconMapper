const express = require("express")
const app  = express()
const cors = require("cors")
const bodyparser = require("body-parser")
const {authrouter} = require("../server/routers/authroutes")
const {bidrouter} = require("../server/routers/bidrouter")
const {connectdb} = require("../server/db/dbconnection")
app.use(cors())
app.use(express.json())
app.use(bodyparser())
app.use("/api/v1/auth",authrouter)
app.use("/api/v1/bids",bidrouter)
require("dotenv").config()
connectdb();
app.listen(3000,()=>{
    console.log("server is running at 3000...")
})