const Product = require("../../models/Product");
const Transaction = require("../../models/Transaction");
const User = require("../../models/User");

exports.confirmedOrder = async (req, res) => {
  const { productID } = req.body;
  const userId = req.userId;

  const user = await User.findById(userId);
  const product = await Product.findById(productID);

  if (user.roles.Buyer) {
    try {
      product.confirmedOrder = true;
      await product.save();
      buyer.purchasedProducts.push(productID);
      await buyer.save();

      await Transaction.create({
        amount: product.price,
        description: `Bought an item: ${product.name}`,
        transactionID: nanoid(9),
        funded: false,
      });

      res.send({ message: `Order confirmed. Amount deducted from wallet` });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "An error occured. Please try again later." });
    }
  } else {
    res
      .status(400)
      .send({ message: "You are currently registered as a seller" });
  }
};
