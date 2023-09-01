const express = require("express");
const router = express.Router();
const purchaseProductController = require("../../controllers/transactions/purchaseProductController");

/**
 * @swagger
 * /purchase-item:
 *   post:
 *     summary: Purchase a new product
 *     description: Purchase a new product.
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productID:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product purchased successfully. Amount debited from your wallet balance!
 *       400:
 *         description: Invalid request payload or missing required fields.
 */

router.post("/", purchaseProductController.purchaseProduct);

module.exports = router;
