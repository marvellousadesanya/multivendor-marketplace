const express = require("express");
const router = express.Router();
const {
  withdrawFunds,
} = require("../../controllers/transactions/withdrawController");

/**
 * @swagger
 * /withdraw:
 *   post:
 *     summary: Withdraw
 *     description: Withdraw funds from wallet.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amountToWithdraw:
 *                 type: number
 *     responses:
 *       200:
 *         description: Amount successfully withdrawn.
 *       400:
 *         description: Invalid request payload or missing required fields.
 */

router.post("/", withdrawFunds);

module.exports = router;
