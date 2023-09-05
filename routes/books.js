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
    const {name , author} = req.body;
    const book = new Book({name , author , user : req.user.id})
    const savedBook = await book.save()
    res.json(savedBook)
  }catch(err){
    console.error("error while adding books " , err)
  }
})
module.exports = router