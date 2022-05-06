const express = require("express");

const router = express.Router();

const stockController = require("../controllers/stockController");
const addUserStockController = require("../controllers/addUserStock");

router
  .route("/")
  .post(stockController.createStock)
  .get(stockController.getStock);

  router.route("/findUserStock/:user").get(addUserStockController.findUserStock)
  router.route("/findUseroverlap/:user").get(addUserStockController.findUserOverlap)
  router.route("/addStock").post(addUserStockController.addUserStock);
router.route("/overlap").get(stockController.findOverlap)  
router.route("/duplicates").get(stockController.findDuplicates);
router.route("/:id").get(stockController.findStock)








router.route("/addstock/:id").post(stockController.addStock);

module.exports = router;
