
//  This is add to stock model
//  all the data of stock which contain user remain in this folder and we are only referencing user 

const mongoose = require("mongoose");

const addStockSchema = new mongoose.Schema({
  name_of_fund: {
     type: String,
    required: [true, "enter valid name"],
  },

  name_of_stock : {
    type:String, required:[true, "enter stock name"]
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: [true, "enter user id"],
  },
});

const addStock = mongoose.model("addstock", addStockSchema);

module.exports = addStock;
