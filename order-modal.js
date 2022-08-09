const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema({
    customer_id:String,
    customer_name:String,
    item_name:String,
    Quantity:Number
    



})

const OrderModal=mongoose.model("order",orderSchema)
module.exports = OrderModal;