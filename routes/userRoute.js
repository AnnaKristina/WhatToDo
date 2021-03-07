const express = require("express");
const router = express.Router();

const {registerRender, registerSubmit} = require("../controller/registerController");
const {logInRender, logInSubmit} = require("../controller/logInController")


router.get("/register", registerRender);
router.post("/register", registerSubmit);
router.get("/login",logInRender);
router.post("/login", logInSubmit);


module.exports = router;    