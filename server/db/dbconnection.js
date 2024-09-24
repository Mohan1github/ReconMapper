const mongoose = require("mogoose")
const connectdb = ()=>{
    try{
        mongoose.connect().then(()=>{
            console.log("Connected to mongodb......")
        }).catch((err)=>{
            console.log("Error connecting to the database:",err);
        })
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal database server error"})
    }
}
module.exports = {connectdb};
