const {News} = require("../models/newblogs")

const getnews = async(req,res) =>{
    try{
        const new_data = await News.find();
        if(new_data){
            res.status(200).json({success:true,Data:new_data})
        }else{
            res.status(404).json({success:false,msg:"no data found"})
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}

const newsfilter = async(req,res) =>{
    const {fil_option} = req.body;
    try{
        let fil_data;
        if(fil_option === "higher buys"){
            fil_data = await News.filter((data) =>{
                data.news_cat === "higher buys"
            })
            if(fil_data.lenght > 0){
                res.status(200).json({success:true,data:fil_data})
            }else{
                res.status(404).json({success:false,msg:"No new found!"})
            }
        }
        else if(fil_option === ""){
            fil_data = await News.filter((data) =>{
                data.news_cat === "higher buys"
            })
            if(fil_data.lenght > 0){
                res.status(200).json({success:true,data:fil_data})
            }else{
                res.status(404).json({success:false,msg:"No new found!"})
            }
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error!!"})
    }
} 

const likenews =  async(req,res)=>{
    const userid = req.user
    const blogid = req.body.id;
    try{
        const findnews = await News.findOneAndUpdate({_id:blogid})
        if(findnews){
            const addinglike = findnews.likes.push(userid);
            if(addinglike){
                res.status(200).json({success:true,msg:
                    "like added successfully",
                    totallikes:findnews.length
                })
            }
            else{
                res.status(400).json({success:false,msg:"Something went wrong"})
            }
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}

module.exports = {getnews,newsfilter,likenews}
