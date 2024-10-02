const logoutfunction = (req,res)=>{
    try{
        req.cookies("token","")
    }
    catch(err){
        res.status(500).json({success:false,msg:"Can't able to log out "})
    }
}
module.exports = {
    logoutfunction
}