const express = require('express')
const { Bid } = require("../models/bidmodel");
const { user } = require('../models/usermodel');
const bcrypt = require('bcryptjs/dist/bcrypt');
const addnewbid = async(req,res) =>{
    const biddata = req.body;
    try{
        const check = await Bid.find({bid_item_name:data.bidname})
        if(check){
            res.status(401).json({success:false,msg:"Bid item have already exist!"})
        }
        else{
            const newbiditem = new Bid({
                bid_item_name:biddata.bidname,
                image:biddata.filename,
                bid_amount:biddata.bidamount,
                bid_starting_date:biddata.startingdate,
                bid_item_owner:biddata.bid_owner,
                bid_category:biddata.category,
                bid_item_count:biddata.item_count,
                owner_id:req.user_id,
            })
            await newbiditem.save();
            if(newbiditem){
                console.log("Bid created successfully")
                res.status(201).json({success:true,msg:"New bid created"})
            }
            else{
                console.log("Something went wrong!")
                res.status(400).json({success:false,msg:"Something went wrong"})
            }
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}
const getbids = async(res)=>{
    try{
        const biddata = await Bid.find()
        if(biddata){
            res.status(200).json({success:true,data:biddata})
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
        const findbid = await Bid.findById({_id:req.params.bidid});
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
        const deletebid = await Bid.findByIdAndDelete({id:req.params.id})
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
    try{
        const findbid = await Bid.findByIdAndUpdate({id:req.params.id},{$set:req.body},{new:true})
        if(findbid){
            res.status(200).json({success:true,msg:"Bid updated successfully"})
        }
        else{
            res.status(400).json({success:false,msg:"Something went wrong"})
        }
    }
    catch(err){
        res.status(500).json({success:false,msg:"Internal server error"})
    }
}

module.exports ={addnewbid,getbids,getbidbyid,updatebid}