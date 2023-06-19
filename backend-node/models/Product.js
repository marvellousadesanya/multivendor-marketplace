const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  productCount: {
    type: Number,
  },
  transactionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  confirmed: { Boolean },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Product", ProductSchema);
