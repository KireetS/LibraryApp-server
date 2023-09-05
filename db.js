const mongoose = require("mongoose")

const connectToMongo = async()=>{
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/libraryapp" , { 
      useNewUrlParser: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Connected to Local MongoDB")
  }catch(err){
    console.error("error connecting to MongoDB " ,err)
  }
}
module.exports = connectToMongo;