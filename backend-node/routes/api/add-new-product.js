const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");
const ROLES_LIST = require("../../config/roles_list");
const verifyRoles = require("../../middleware/verifyRoles");

router
  .route("/")
  .post(
    verifyRoles(ROLES_LIST.Seller, ROLES_LIST.Admin),
    productController.addProduct
  );

module.exports = router;
