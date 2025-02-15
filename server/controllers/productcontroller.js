const express = require('express')
const { Product } = require("../models/productmodel");
const { user } = require('../models/usermodel');
const bcrypt = require('bcryptjs/dist/bcrypt');



const addnewbid = async (req,res) =>{
    try{
        const findprod = await Product.findOne({name:req.body.name})
        if(findprod){
            res.status(400).json({success:false,msg:"Already product exist!!"})
        }
        else{
            const newprod = new Product({
                name:req.body.name,
                image:req.body.image,
                product_amount:req.body.product_amount,
                product_item_owner:req.body.product_item_owner,
                product_category:req.body.product_category,
                owner_id:req.body.owner
            })

            const saving = await newprod.save()
            if(saving){
                res.status(201).json({success:true,msg:"Product created successfully!!"})
            }
            else{
                res.status(400).json({success:false,msg:"Soemthing went wrong"})
            }
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}




const getbids = async(req,res)=>{
    try{
        const biddata = await Product.find()
        if(biddata){
            res.status(201).json({success:true,data:biddata})
        }
        else{
            res.status(400).json({success:false,msg:"no bid data found"})
        }
    }
    catch(err){
       res.status(500).json({success:false,msg:"Internal server error"})
    }
}



const getbidbyid = async(req,res)=>{
    try{
        const findbid = await Product.findById({_id:req.params.id});
        if(findbid){
            res.status(200).json({success:true,data:findbid})
        }
        else{
            res.status(404).json({success:false,msg:"No data found"})
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}



const deletebid = async(req,res)=>{
    try{
        const deletebid = await Product.findByIdAndDelete({_id:req.params.id})
        if(deletebid){
            res.status(200).json({success:true,msg:"Bid deleted successfully"})
        }
        else{
            res.status(400).json({success:false,msg:"Something went wrong"})
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}



const updatebid = async(req,res)=>{
   const data = req.body
   console.log(data)
   console.log(req.params.id)


//    const update = {
   
//         name:req.body.name,
//         image:req.body.image,
//         product_amount:req.body.product_amount,
//         product_item_owner:req.body.product_item_owner,
//         product_category:req.body.product_category,
//         owner_id:req.body.owner
//     }
  

   try{
   const update = await Product.findByIdAndUpdate({_id:req.params.id},{$set:{
    name:req.body.name,
    image:req.body.image,
    product_amount:req.body.product_amount,
    product_item_owner:req.body.product_item_owner,
    product_category:req.body.product_category,
    owner_id:req.body.owner
   }},{new:true})
    if(update){
        res.status(200).json({success:true,msg:"Updated successfully"})
    }
    else{
        res.status(400).json({success:false,msg:"something went wrong!!"})
    }
   } 
   catch(err){
    res.status(500).json({success:false,msg:"Internal server error"})
   }
}


const sendexample = async(req,res)=>{
    try{
        let array = []      
        for(let i = 0;i<10;i++){
            array.push("kabins")
            console.log("Kabins");
        }
        res.status(200).json({success:true,data:array})
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}
module.exports ={addnewbid,getbids,getbidbyid,updatebid,sendexample,deletebid}