const mongoose = require("mongoose")
const {Schema} = mongoose
const BookSchema = new Schema({
  name:{
    type:String,
    required : true
  },
  author:{
    type:String,
    required : true
  },
  user:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  }
})

module.exports = mongoose.model("book" , BookSchema)