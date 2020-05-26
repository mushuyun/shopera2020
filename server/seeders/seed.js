const mongoose = require("mongoose");
const db = require("../models");
const products = require("./data.json");
// This file empties the Products collection and inserts the products
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shopera");
db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(products))
  .then(data => {
    console.log(data.result.n + " products inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });