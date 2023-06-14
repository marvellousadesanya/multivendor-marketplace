const User = require("../../models/User");
const Transaction = require("../../models/Transaction");
const Product = require("../../models/Product");
const { nanoid } = require("nanoid");

const purchaseProduct = async (req, res) => {
  const { productID } = req.body;
  const userId = req.userId;

  const product = await Product.findById(productID).populate(
    "seller",
    "fullName walletBalance productsSold"
  );

  const seller = product.seller;

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  } else {
    console.log(`${user.fullName} authenticated`);
  }

  if (user.roles.Buyer) {
    console.log(user.walletBalance, product.price);
    if (user.walletBalance > product.price) {
      try {
        console.log("Check 2");
        user.walletBalance -= product.price;
        await user.save();

        seller.walletBalance += product.price;
        seller.productsSold.push(productID);
        await product.save();
        await seller.save();

        console.log(seller.walletBalance);

        await Transaction.create({
          amount: product.price,
          description: `Bought an item: ${product.name}`,
          transactionID: nanoid(9),
          funded: false,
        });
        console.log(`${product.price} has been deducted to your wallet!`);
        res.status(200).send({
          message: `${product.price} has been deducted to your wallet!`,
        });
        console.log(seller);
      } catch (error) {
        res.send({ message: "An error occured. Try again later" });
        console.log(error);
      }
    } else {
      res.status(400).send({ message: "Insufficent funds" });
    }
  } else {
    console.log("Not possible. Something wrong");
    res.json({
      message:
        "You are currently logged in as a seller. Please use Buyer account to purchase items",
    });
  }
};

module.exports = { purchaseProduct };
