const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyUser")

const {homeFindData, homeAddData, homeFindEdit, homeEditData, homeDeleteData} = require("../controller/homeController");

router.get("/home",verifyToken,homeFindData,)
router.post("/home",verifyToken, homeAddData)
router.get("/edit/:id", verifyToken, homeFindEdit)
router.post("/edit", verifyToken, homeEditData)
router.get("/delete/:id",verifyToken, homeDeleteData)

module.exports = router