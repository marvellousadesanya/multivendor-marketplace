const express = require("express");
const router = express.Router();
const fundWalletController = require("../../controllers/transactions/fundWalletController");

/**
 * @swagger
 * /fund-wallet:
 *   post:
 *     summary: Fund wallet
 *     description: Fund your wallet balance.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amountToAdd:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Wallet funded.
 *       400:
 *         description: Invalid request payload or missing required fields.
 */

router.post("/", fundWalletController.fundWallet);

module.exports = router;
