const {user} = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const register = async(req,res)=>{
    const data = req.body;
    try{
        const finduser = await user.find({email:data.email})
        if(finduser){
            res.status(400).json({success:false,msg:"user already exist"})
            console.log("user already exsits");
        }
        else{
            const newuser = new user({
                name:data.name,
                email:data.email,
                password:data.password
            })
            await newuser.save();
            res.status(200).json({success:true,msg:"New user created!!"})
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}
const login =async(req,res )=>{
    const email = req.body.email;
    const password = req.body.password;
    try{
        const finduser = await user.find({email:email})
        if(finduser){
            const ispass = await bcrypt.compare(password,finduser.password)
            if(ispass){
                const token = jwt.sign({id:finduser._id},{email:finduser.email},process.env.JWT_SECRET,{expiresIn:"1d"})
                res.send({"token":token})
            }
            else{
                res.status(400).json({success:false,msg:"Something went wrong!"})
            }
        }
        else{
            res.status(404).json({sucess:false,msg:"No user found"})
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Login failed"})
    }
}

const getuserdata = async(req,res )=>{
    try{
        const finduser = await user.findById({_id:req.user_id})
        if(finduser){
            console.log(finduser)
            res.send({userdtat:finduser})
        }
        else{
            res.status(402).json({success:false,msg:"You must login to see the profile"})
            console.log("login to see the user data")
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}
const updateuserdata = async(req,res ) =>{
    const data = req.body;
    try{
        const updatinguser = await user.findByIdAndUpdate({_id:req.user_id},{data},{new:true})
        await updatinguser.save();
        if(updatinguser){
            res.status(200).json({success:true,msg:"Profile updated successfully!"})
        }
        else{
            res.status(400).json({success:false,masg:"Something went wrong"})
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}
module.exports = {
    register,
    login,
    getuserdata,
    updateuserdata
}