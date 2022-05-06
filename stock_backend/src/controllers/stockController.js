// this is main listed stocks
const Stock = require("../models/stock_Model");

exports.getStock = async (req, res) => {
  try {
    const stocks = await Stock.find({}).exec();

    res.status(200).json({
      status: "success",
      data: stocks,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

exports.createStock = async (req, res) => {
  try {
    const stocks = await Stock.create(req.body);

    res.status(200).json({
      status: "success",
      data: stocks,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

exports.addStock = async (req, res) => {
  try {
    const id = req.parmas;

    //  console.log(req.body);

    const stock = await Stock.updateMany(
      id,

      { $push: req.body }
    );

    res.status(201).json({
      status: "success",
      data: stock,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

exports.findStock = async (req, res) => {
  try {
    const { id } = req.params;

    const stock = await Stock.findById(id);

    // console.log(stock);
    res.status(201).json({
      status: "success",
      data: stock,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error,
    });
  }
};

exports.findDuplicates = async (req, res) => {
  try {
    const stock = await Stock.aggregate([
      { $match: { _id: { $ne: null }, count: { $gt: 1 } } },
      { $group: { _id: "$name", count: { $sum: 1 } } },
      { $project: { stocks: "$_id", _id: 0 } },
    ]);
  res.status(200).json({
      status: "success",
      data: stock,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};



// exports.getDuplicates = async(req,res)=>{
//    try{
//     const duplicates = await  Stock.aggregate([
//       { $group: { _id: "$stocks", count: { $sum: 1 } } },
//       ...{ $match: { _id: { $ne: null }, count: { $gt: 1 } } },
//       ...{ $project: { StudentFirstName: "$_id", _id: 0 } },
//     ]);
//   res.status(200).json({
//       status: "success",
//       data : duplicates
//   })
//    }
//    catch(error){
//         res.status(404).json({
//             status :"fail",
//             message : error
//         })  
//    }
// }


exports.findOverlap = async(req,res)=>{


  try {

   

  const {first_name,second_name} = req.body

    const res1  = await Stock.find({ name : first_name})
    const res2  = await Stock.find({ name : second_name})

    
    let a=  res1[0].stocks
    let b=  res2[0].stocks
     
    var common = a.filter((value) => b.includes(value));

    let overlap =     Math.ceil(2*common.length/(a.length + b.length)  * 100)
   

    res.status(200).json({
      status:"success",
      overlap : overlap,
      common : common
    })



  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }




}