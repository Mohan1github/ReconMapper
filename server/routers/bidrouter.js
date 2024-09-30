const express = require("express")
const bidrouter = express.Router()
const {addnewbid,getbids} = require("../controllers/bidcontroller")
bidrouter.post("/create-bid",addnewbid)
bidrouter.get("/getall/bids",getbids)
module.exports = {addnewbid,getbids}
