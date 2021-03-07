const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/indexRoute")
const userRouter = require("./routes/userRoute");
const homeRouter = require("./routes/homeRoute");
require("dotenv").config();


const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cookieParser());
app.use(indexRouter);
app.use(userRouter);
app.use(homeRouter);



const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    }
    
    mongoose.connect(process.env.DATABASE_URL, 
    options, 
    (err)=>{
     
    console.log(err)
    
    if (err) return ;
    
    console.log("db is connected")

    app.listen(8000, ()=>{
     console.log("application is running too")
    })
    
    
    })