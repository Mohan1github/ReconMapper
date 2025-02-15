const {user} = require("../models/usermodel")

const checkforuser = async(email) =>{
    try{
        const ifuser = await user.findOne({email:email})
        if(ifuser){
            return true;
        }
        else{
            return false;
        }
    }
    catch(err){
        console.log("Error:",err);
        return false;
    }
}

module.exports = {checkforuser}