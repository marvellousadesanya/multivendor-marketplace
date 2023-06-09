const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");
// const ROLES_LIST = require("../../middleware/verifyRoles");
// const verifyRoles = require("../../middleware/verifyRoles");

router.get("/", productController.getAllProducts);

module.exports = router;
