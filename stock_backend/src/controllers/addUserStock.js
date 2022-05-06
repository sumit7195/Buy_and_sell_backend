const addStock = require("../models/add_stock_model");
const Stock = require("../models/stock_Model");

exports.addUserStock = async (req, res) => {
  try {
    const stock = await addStock.create(req.body);

    res.status(201).json({
      status: "success",
      data: stock,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
exports.findUserStock = async (req, res) => {
  try {
    const stock = await addStock.find(req.params).select({ user: 0 });

    res.status(201).json({
      status: "success",
      results: stock.length,
      data: stock,
    });
  } catch (error) {
    // console.log(error);
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.findUserOverlap = async (req, res) => {
  try {
    //    console.log(req.query)

    const stock = await addStock
      .find(req.params)
      .select({ user: 0, name_of_fund: 0, __id: 0 });

    const listedStock = await Stock.find(req.query).select({
      name: 0,
      __id: 0,
    });

    // console.log(listedStock[0].stocks)

    let b = listedStock[0].stocks;

    let overlap = stock.filter((value) => b.includes(value.name_of_stock));

    // console.log(overlap)
    //  var common = a.filter((value) => b.includes(value));
    let common = Math.ceil(
      ((2 * overlap.length) / (listedStock.length + stock.length)) * 100
    );

    res.status(201).json({
      status: "success",

      overlap: `${common} %`,
    });
  } catch (error) {
    // console.log(error);
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
