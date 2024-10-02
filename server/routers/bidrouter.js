const express = require("express")
const bidrouter = express.Router()
const {addnewbid,getbids,getbidbyid} = require("../controllers/bidcontroller")
bidrouter.post("/create-bid",addnewbid)
bidrouter.get("/getall/bids",getbids)
bidrouter.get("getbids/:id",getbidbyid)
module.exports = {bidrouter};
