const Todo = require("../model/toDo");


const homeFindData = async (req, res)=>{
    const data = await Todo.find()      
     res.render("toDo.ejs", {data:data}) 
  }

const homeAddData = async (req, res) =>{
    await new Todo ({
      name: req.body.name
    }).save();
    res.redirect("/home")
  }

const homeFindEdit = async (req, res) => {
    const todo = await Todo.findOne({_id:req.params.id})
     res.render("edit.ejs", {todo:todo})
   }  

const homeEditData = async (req, res) => {
    await Todo.updateOne({_id:req.body.id}, {
      name: req.body.name
    })
    res.redirect("/home")
  }

  const homeDeleteData = async (req, res) => {
    await Todo.deleteOne({_id:req.params.id})
    res.redirect("/home")
  }

module.exports = {
    homeFindData,
    homeAddData,
    homeFindEdit,
    homeEditData,
    homeDeleteData
}