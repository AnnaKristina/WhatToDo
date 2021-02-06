const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-Parser");
const router = require("./routes/toDoRoute")

const app = express();

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "ejs")
app.use("/", router)



const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
    
    mongoose.connect("mongodb+srv://AnnaKristina:4DbrhL8R@cluster0.awfia.mongodb.net/WhatToDo2?retryWrites=true&w=majority", 
    options, 
    (err)=>{
     
    console.log(err)
    
    if (err) return ;
    
    console.log("db is connected")

    app.listen(8000, ()=>{
     console.log("application is running too")
    })
    
    
    })