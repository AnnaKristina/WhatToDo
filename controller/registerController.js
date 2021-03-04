const User = require("../model/user");
//const bcrypt = require("bcrypt");

const registerRender = (req, res)=> {
    res.render("register.ejs")
}

module.exports = {registerRender}