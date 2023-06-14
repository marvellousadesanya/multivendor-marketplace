const express = require("express");
const router = express.Router();
const purchaseProductController = require("../../controllers/transactions/purchaseProductController");

router.post("/", purchaseProductController.purchaseProduct);

module.exports = router;
