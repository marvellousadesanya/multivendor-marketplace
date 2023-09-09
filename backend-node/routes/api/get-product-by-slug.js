const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");

/**
 * @swagger
 * /get-product-by-slug:
 *   post:
 *     summary: Add a new product
 *     description: Add a new product as a Seller.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Product added successfully.
 *       400:
 *         description: Invalid request payload or missing required fields.
 */

router.get("/products/:slug", productController.getProductBySlug);

module.exports = router;
