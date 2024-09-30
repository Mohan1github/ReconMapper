const express = require('express')
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser");
const authrouter = require("./routers/authroutes")
const bidrouter = require("./routers/bidrouter")
require("dotenv").config();
// app.use(corsOption)
app.use("api/v1/auth/user-auth",authrouter)
app.use("api/v1/bids",bidrouter)
app.use(bodyParser())
app.use(express.json())
app.use(cors())
app.listen(5000,()=>{
    console.log("Server is running at port 5000....")
})