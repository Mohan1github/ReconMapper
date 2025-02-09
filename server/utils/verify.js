
const jwt = require("jsonwebtoken")
const verifyauth = async (req,res) =>{
    try{
        const token = req.header?.auth_token;
        if(token){
            await jwt.verify(token,process.env.JWT_SECRET,(decode,err)=>{
                if(err){
                    res.status(401).json({success:false,msg:"No token available"})
                }
                else{
                    req.user = decode.id
                }
            }).then((res) =>{
                console.log("Successful");
                res.status(200).json({success:true,data:res})
            }).catch((err) =>{
                res.status(401).json({success:false,err:err})
                console.log(err)
            })
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}
module.exports = {verifyauth}