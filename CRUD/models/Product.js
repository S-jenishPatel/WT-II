const mongoose = require("mongoose");

const schema = mongoose.Schema({
  ProductName: String,
  ProductPrice: Number,
  ProductImage: String,
});

module.exports = mongoose.model("Product", schema);
