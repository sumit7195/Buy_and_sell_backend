const app = require("./app")

const mongoose = require("mongoose")



app.listen(3001, async()=>{

mongoose
  .connect(
    "mongodb+srv://sumit624:Sumit123@cluster0.xvvmp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(console.log("db is connected successfully"))
  .catch((error) => {
    console.log(error);
  });


console.log("server is listening on port 3001")


})