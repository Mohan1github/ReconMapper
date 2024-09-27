const express = require("express")
const authrouter = express.Router()
const {login,register} = require("../controllers/authcontroller");

authrouter.post("/login",login)
authrouter.post('/register',register)