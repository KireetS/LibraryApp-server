require('dotenv').config();
const express = require("express");
const connectToMongo = require("./db")


const app = express();
connectToMongo()
app.use(express.json())
app.use("/api/auth" , require("./routes/auth"))
app.use("/api/books" , require("./routes/books"))
app.get("/",(req,res)=>{
  res.json({"msg" : "listening here correctly"})
})
app.listen(3000, ()=>{
  console.log("sever listening at port 3000")
})