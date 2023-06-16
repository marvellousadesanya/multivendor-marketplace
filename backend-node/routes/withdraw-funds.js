const express = require("express");
const router = express.Router();
const {
  withdrawFunds,
} = require("../controllers/transactions/withdrawController");

router.post("/", withdrawFunds);

module.exports = router;
