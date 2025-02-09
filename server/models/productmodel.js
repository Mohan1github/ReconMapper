const mongoose = require("mongoose")
const productschema = mongoose.Schema({
    product_item_name:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
    },
    product_amount:{
        type:Number,
        required:true,
    },
    product_starting_date:{
        type:String,
        required:true
    },
    product_item_owner:{
        type:String,
        required:true
    },
    product_category:{
        type:String,
        required:true
    },
    product_item_count:{
        type:Number,
        default:1
    },
    owner_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{timestamps:true})
const Product = mongoose.model("product",productschema)
module.exports={ Product };