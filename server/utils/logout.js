
const logoutfunction = (req,res)=>{
    try{
        const logout = res.clearcookies("token","")
        if(logout){
            res.status(200).json({success:true,mag:"Logout successfully"})
        }
        else{
            res.status(400).json({success:false,msg:"Not loggedout!"})
        }

    }
    catch(err){
        res.status(500).json({success:false,msg:"Can't able to log out "})
    }
}
module.exports = {
    logoutfunction
}