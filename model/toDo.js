const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema ({
    name: {type:String, require:true},
   })

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo; 