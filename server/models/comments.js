const mongoose  = require("mongoose")
const Schema = mongoose.Schema
const commentsSchema = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    comment:{
        type:String,
        trim:true
    },
    likes:{
        type:Array
    },
    unlike:{
        type:Array
    }
})

const comments = mongoose.model("Comments",commentsSchema)
module.exports = {comments}

