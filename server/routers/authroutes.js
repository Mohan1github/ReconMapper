const express = require("express")
const authrouter = express.Router()
const {login,register, getallusers,changepassword,uploadfile} = require("../controllers/authcontroller");
const {logoutfunction} = require("../utils/logout")
const upload = require("../utils/multerconfig")
authrouter.post("/login",login)
authrouter.post("/register",register)
authrouter.post("/logout",logoutfunction)
authrouter.get("/allusers",getallusers)
authrouter.put("/fogotpassword",changepassword)
authrouter.put("/upload/profilepicture/:id",upload.single("file"),uploadfile)
module.exports = {authrouter}; 