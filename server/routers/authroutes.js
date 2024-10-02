const express = require("express")
const authrouter = express.Router()
const {login,register} = require("../controllers/authcontroller");
const {logoutfunction} = require("../utils/logout")
authrouter.post("/login",login)
authrouter.post('/register',register)
authrouter.post("/logout",logoutfunction)

module.exports = {authrouter};