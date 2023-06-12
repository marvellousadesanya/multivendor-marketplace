const express = require("express");
const router = express.Router();
const fundWalletController = require("../../controllers/transactions/fundWalletController");

router.post("/", fundWalletController.fundWallet);

module.exports = router;
