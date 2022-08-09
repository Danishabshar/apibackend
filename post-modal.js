const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    
    inventory_id:String,
    inventory_Type:String,
    item_name:String,

    
    customer_id:String,
    customer_name:String,
    
    Email:String,
    Quantity:Number
})

const  postModal = mongoose.model("post",postSchema)

module.exports = postModal;