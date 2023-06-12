const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuyerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  orderedItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  cartItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  walletBalance: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Buyer", BuyerSchema);
