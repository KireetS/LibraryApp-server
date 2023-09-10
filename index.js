require('dotenv').config();
const express = require("express");
const connectToMongo = require("./db")
const cors = require("cors")

const port = process.env.PORT || 5000;
const app = express();
connectToMongo()
app.use(express.json())
app.use(cors())
app.use("/api/auth" , require("./routes/auth"))
app.use("/api/books" , require("./routes/books"))
app.get("/",(req,res)=>{
  res.json({"msg" : "listening here correctly"})
})
app.listen(port, ()=>{
  console.log("sever listening at port 3000")
})