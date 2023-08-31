const Product = require("../../models/Product");
const User = require("../../models/User");

const addToCart = async (req, res) => {
  userId = req.userId;
  const { productID } = req.body;

  const buyer = await User.findUserById(userId);

  //   const product = await Product.findUserById(productID);

  buyer.cartItems.push(productID);
  await buyer.save();
};
