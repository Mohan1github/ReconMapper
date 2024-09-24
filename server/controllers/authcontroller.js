const {user} = require("../models/usermodel")
const register = async(req,res)=>{
    const data = req.body;
    try{
        const finduser = await user.find({email:data.email})
        if(finduser){
            res.status(400).json({success:false,msg:"user already exist"})
            console.log("user already exsits");
        }
        else{
            
        }
    }
    catch(err){

    }
}