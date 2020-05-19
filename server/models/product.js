const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: { type: String, required: true },
  Category: { type: String, required: true },
  image: Image,
  price: { type: String, required: true },
  brand: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;