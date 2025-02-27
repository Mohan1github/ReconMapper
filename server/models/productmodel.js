const mongoose = require("mongoose")
const Schema = mongoose.Schema
const productschema = new Schema({
    name:{
        type:String,
        required:[true,"provide the name of the product"],
        unique:true
    },
    image:{
        type:String,
    },
    product_amount:{
        type:Number,
        required:true,
    },
    product_item_owner:{
        type:String,
        required:true
    },
    product_category:{
        type:String,
        required:true
    },
    comments:[{
        type:String
    }],
    owner_id:{
        type:String,
    }
},{timestamps:true})
const Product = mongoose.model("product",productschema)
module.exports = {Product} ;