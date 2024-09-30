const mongoose = require("mongoose")
const bidschema = mongoose.Schema({
    bid_item_name:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
    },
    bid_amount:{
        type:Number,
        required:true,
    },
    bid_starting_date:{
        type:String,
        required:true
    },
    bid_item_owner:{
        type:String,
        required:true
    },
    bid_category:{
        type:String,
        required:true
    },
    bid_item_count:{
        type:Number,
        default:1
    },
    owner_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{timestamps:true})
const Bid = mongoose.model("bid",bidschema)
module.exports={Bid};