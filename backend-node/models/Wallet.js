const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const walletSchema = new Schema({
  balance: {
    type: Number,
    default: 10000,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Wallet", walletSchema);
