const express = require("express");
const app = express();

const stockRouter = require("./router/stockRoutes");
const userRouter= require("./router/userRoutes");

// const addStockRouter=  require("./router/addStockRoutes")

// global middlewares
app.use(express.json());


// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/stocks", stockRouter);
// app.use("/api/v1/add", addStockRouter);


module.exports = app;
