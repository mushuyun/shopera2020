const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true },
    qty: { 
        type: Number, 
        required: true }
});

const Cart = mongoose.model("Cart", cartSchema);

export {Cart};