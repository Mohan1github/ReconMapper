const express = require('express')
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(bodyParser())
app.use(express.json())
app.use(cors())
app.listen(5000,()=>{
    console.log("Server is running at port 5000....")
})