const express = require("express")
const authrouter = express.Router()
const {login,register, getallusers,changepassword} = require("../controllers/authcontroller");
const {logoutfunction} = require("../utils/logout")
authrouter.post("/login",login)
authrouter.post("/register",register)
authrouter.post("/logout",logoutfunction)
authrouter.get("/allusers",getallusers)
authrouter.put("/fogotpassword",changepassword)
module.exports = {authrouter};