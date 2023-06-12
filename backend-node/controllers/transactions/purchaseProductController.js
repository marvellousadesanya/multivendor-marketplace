const User = require("../../models/User");
const Transaction = require("../../models/Transaction");
const Product = require("../../models/Product");

const purchaseProduct = async (req, res) => {
  const { productID } = req.body;
  const userId = req.userId;

  const product = await Product.findById({ _id: productID });

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  if (user.roles == "Buyer") {
    try {
      user.walletBalance -= product.price;
      await user.save();

      await Transaction.create({
        amount: product.price,
        description: "Bought an item",
        transactionID: nanoid(6),
        funded: false,
      });
      console.log(`${product.price} has been deducted to your wallet!`);
      res
        .status(201)
        .send({ message: `${product.price} has been added to your wallet!` });
    } catch (error) {
      res.send({ message: "An error occured. Try again later" });
      console.log(error);
    }
  }
};

module.exports = { purchaseProduct };
