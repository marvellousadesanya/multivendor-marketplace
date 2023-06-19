const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");

/**
 * @swagger
 * /add-new-products:
 *   post:
 *     summary: Add a new product
 *     description: Add a new product.
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: User registered successfully.
 *       400:
 *         description: Invalid request payload or missing required fields.
 */

router.get("/", productController.getAllProducts);

module.exports = router;
