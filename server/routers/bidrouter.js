const express = require("express")
const bidrouter = express.Router()
const {addnewbid,getbids,getbidbyid,sendexample} = require("../controllers/productcontroller")
bidrouter.post("/create-bid",addnewbid)
bidrouter.get("/getall/bids",getbids)
bidrouter.get("getbids/:id",getbidbyid)
bidrouter.get("/getlooped",sendexample)
module.exports = {bidrouter};
