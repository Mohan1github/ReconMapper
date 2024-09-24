const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const usermodel = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true,
    },
    secondary_email:{
        type:String,
    }
},{timestamps:true})
const user = mongoose.model("Users",usermodel)
module.exports={user}
