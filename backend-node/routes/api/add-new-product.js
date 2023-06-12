const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");
const ROLES_LIST = require("../../config/roles_list");
const verifyRoles = require("../../middleware/verifyRoles");
const upload = require("../../middleware/multer");

router
  .route("/")
  .post(
    verifyRoles(ROLES_LIST.Seller, ROLES_LIST.Admin),
    upload.single("image"),
    productController.addProduct
  );

module.exports = router;
