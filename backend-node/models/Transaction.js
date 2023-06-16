const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  amount: {
    type: Number,
    default: 10000,
  },
  transactionID: {
    type: String,
    // default: nanoid(),
  },
  description: {
    type: String,
  },
  funded: {
    type: Boolean,
    default: false,
  },
  fulfilled: {
    type: Boolean,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
