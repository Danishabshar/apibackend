const mongoose = require("mongoose")
const custSchema = new mongoose.Schema({
    customer_id:String,
    customer_name:String,
    
    Email:String,



})

const customerModal=mongoose.model("cust",custSchema)
module.exports = customerModal;