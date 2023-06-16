const mongoose=require("mongoose");
const app=require("./app");
const MONGODB_URI = process.env['MongoDB_URI']

// MONGODB_URIconst app = require("")
mongoose.connect(MONGODB_URI).then(()=>{
  console.log("Connected to the database")
  app.listen(5000, () => {
    console.log("Listening at Port 5000")
  })
});




