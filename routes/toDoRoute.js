const express = require("express");
const Todo = require("../model/toDo");
const router = express.Router();

router.get("/", async (req, res)=>{
    const data = await Todo.find()      
     res.render("index.ejs", {data:data}) 
  })
 
 router.post("/", async (req, res) =>{
   await new Todo ({
     name: req.body.name
   }).save();
   res.redirect("/")
 })
 
 router.get("/edit/:id", async (req, res) => {
  const todo = await Todo.findOne({_id:req.params.id})
   res.render("edit.ejs", {todo:todo})
 })
 
 router.post("/edit", async (req, res) => {
   await Todo.updateOne({_id:req.body.id}, {
     name: req.body.name
   })
   res.redirect("/")
 })
 
 router.get("/delete/:id", async (req, res) => {
   await Todo.deleteOne({_id:req.params.id})
   res.redirect("/")
 })

 module.exports = router;