
//  this is all the stock and fund data 

const mongoose = require("mongoose");

const stock_schema = new mongoose.Schema({
  name: { type: String, required: true },
  stocks: { type: Array, required: true },
});

const stock = mongoose.model("stock", stock_schema);

module.exports = stock;
