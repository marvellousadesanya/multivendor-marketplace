const express = require("express");
const router = express.Router();
const {
  confirmedOrder,
} = require("../../controllers/transactions/confirmedOrderController");

/**
 * @swagger
 * /confirm-order:
 *   post:
 *     summary: Confirm order
 *     description: Confirm the order has been received and then the balance gets debited from wallet balance.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               transactionID:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order confirmed!.
 *       400:
 *         description: Invalid request payload or missing required fields.
 */

router.post("/", confirmedOrder);

module.exports = router;
