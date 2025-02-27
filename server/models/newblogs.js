const mongoose = require("mongoose")
const express = require("express")
const Schema  = mongoose.Schema
const newsSchema = new Schema({
    news_headings:{
        type:String,
        trim:true
    },
    news_content:{
        type:String,
        min:10,
    },
    news_cat:{
        type:String,
    },
    new_author:{
        type:String,
    },
    news_images:{
        type:String,
    },
    likes:[
        {type:String}
    ],
    dislikes:[
        {type:String}
    ],
})
const News = mongoose.model("News",newsSchema)
module.exports = {News};