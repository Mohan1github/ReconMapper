const {user} = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {checkforuser} = require("../utils/finduser")
const register = async(req,res)=>{
    const email = req.body.email;
    try{
        console.log(email);
        const finduser = await user.findOne({email:email})
        if(finduser){
            res.status(400).json({success:false,msg:"user already exist"})
        }
        else{
            const hashedpassword = await bcrypt.hash(req.body.password,15)
            const newuser = new user({
                name:req.body.name,
                email:req.body.email,
                password:hashedpassword,
                number:req.body.number
            })

            const saving = await newuser.save()
            if(saving){
                res.status(200).json({success:true,msg:"user creates successfully"})
            }
            else{
            res.status(400).json({success:false,msg:"something went wrong"})
            }
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}
const login = async(req,res )=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email,password)
    try{
        const finduser = await user.findOne({email:email})
        if(finduser){
            const match = await bcrypt.compare(password,finduser.password)
            if(match){
                const token = jwt.sign({id:finduser._id,email:email},process.env.JWT_SECRET,{expiresIn:"7d"})
                if(token){
                    console.log("token created!!")
                    console.log("log in successfull!")
                    res.status(200).json({success:true,token:token,data:{email:email,id:finduser._id}})
                }
                else{
                    console.log("Token not created!")
                    res.status(400).json({success:false,msg:"Token not created!"})
                }
            }
            else{
                console.log("password didn't match!!")
                res.status(400).json({success:false,msg:"passwrod didn't match"})
            }
        }
        else{
            console.log("User not found");
            res.status(404).json({success:false,msg:"User not found"})
        }
            
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}

const getuserdata = async(req,res )=>{
    try{
        const finduser = await user.findById({_id:req.user})
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



const changepassword = async(req,res)=>{
    const email = req.body.email;
    try{
        const have = checkforuser(email);
        if(have){
        const password = req.body.password
        const hasedpassword = bcrypt.hash(password,15)
        const updatepassword = await user.findByIdAndUpdate({id:user._id},{$set:{password:hasedpassword}},{new:true})
        if(updatepassword){
            res.status(200).json({success:true,msg:"Password updated successfully"})
        }
        else{
            res.status(400).json({success:false,msg:"Something went wrong"
            })
        }
    }
    else{
        res.status(404).json({success:false,msg:"User not found!!"})
    }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}

const deleteuser = async(req,res)=>{
    try{
        const deleteuser = await user.findByIdAndDelete({id:req.params.id})
        if(deleteuser){
            res.status(200).json({success:true,msg:"User deleted successfully"})
        }
        else{
            res.status(400).json({success:true,msg:"Something went wrong"})
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}

const getallusers = async(req,res) =>{
    try{
        const userdata = await user.find()
        if(userdata){
            res.status(200).json({success:true,data:userdata})
        }else{
            res.status(400).json({success:false,msg:"Something went wrong"})
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}

const uploadfile = async(req,res)=>{
    const user_id = req.body.userId
    const file = req.body
    try{
            const finduser = await user.findByIdAndUpdate({_id:user_id},{$set:{profile_pic:file}},{new:true});
            if(finduser){
                res.status(200).json({success:true,msg:"Profile uploaded successfully"})
            }
            else{
                res.status(400).json({success:false,msg:"Something went wrong!"})
            }
            
        }
        
    catch(err){
            res.status(500).json({success:false,msg:"Internal server error!"})
    }
}
module.exports = {
    register,
    login,
    getuserdata,
    updateuserdata,
    changepassword,
    deleteuser,
    getallusers,
    uploadfile
}