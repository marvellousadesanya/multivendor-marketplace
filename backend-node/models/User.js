const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  uniqueID: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  roles: {
    Buyer: {
      type: Number,
    },
    Seller: Number,
    Admin: Number,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: String,
  walletBalance: {
    type: Number,
    default: 100000,
  },
  productsOwned: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  productsSold: [
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
  purchasedProducts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
