const express = require("express");
const router = express.Router();

const {registerRender} = require("../controller/registerController");

router.get("/register", registerRender);


module.exports = router;    