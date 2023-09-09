const express = require("express")
const fetchUser = require("./../middleware/fetchUser")
const Book = require("./../models/Book")
const router = express.Router()

//get user books
router.get("/mybooks" , fetchUser , async (req , res) =>{
  try{
    const books = await Book.find({user : req.user.id})
    res.json(books)
  }catch(err){
    console.error("could not fetch your books due to server error ", err)
  }
})

router.post("/add" , fetchUser , async (req , res)=>{
  try{
    const {name , author , thumbnail} = req.body;
    const book = new Book({name , author ,thumbnail, user : req.user.id})
    let existingbook= await Book.find({name , author , thumbnail , user:req.user.id})
    if(existingbook.length > 0){
      return res.status(401).json({msg:"book already exists in database"})
    }
    const savedBook = await book.save()
    res.json(savedBook)
  }catch(err){
    console.error("error while adding books " , err)
  }
})

router.delete("/delete/:id" , fetchUser , async (req,res)=>{
  try{
    let id = req.params.id
    let book = await Book.findById(id)
    if(req.user.id !== book.user.toString()){
      return res.status(401).json({msg : "not found"})
    }
    await Book.findByIdAndDelete(id)
    res.json({msg :"deleted"})
  }catch(err){
    console.error("error while deleting your book ",err)
  }
})

module.exports = router