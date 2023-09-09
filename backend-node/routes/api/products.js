const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductBySlug,
} = require("../../controllers/productController");

router.get("/", getAllProducts);

router.get("/:slug", getProductBySlug);

/**
 * @swagger
 * /all-products:
 *   get:
 *     summary: Get all products
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: A list of products
 */

module.exports = router;
