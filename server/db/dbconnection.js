const mongoose = require("mongoose")
const connectdb = ()=>{
    try{
        mongoose.connect(process.env.MONGO_URL).then(()=>{
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
// QY045EqeMPIDrVeC
// jmohankumar62