const User = require("../../models/User");
const Transaction = require("../../models/Transaction");
const Product = require("../../models/Product");
const { nanoid } = require("nanoid");

const purchaseProduct = async (req, res) => {
  const { productID } = req.body;
  const userId = req.userId;

  // Get product info
  const product = await Product.findById(productID).populate(
    "seller",
    "fullName walletBalance pendingBalance productsSold"
  );

  // Save seller in its own variable
  const seller = product.seller;

  // Check if user is authenticated
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  } else {
    console.log(`${user.fullName} authenticated`);
  }

  // Check if user is a buyer or seller
  if (user.roles.Buyer) {
    console.log(user.pendingBalance, typeof user.pendingBalance);
    if (user.walletBalance > product.price) {
      try {
        // Deduct product price from wallet balance of buyer
        user.walletBalance -= product.price;
        user.pendingBalance += product.price;
        await user.save();

        //
        seller.pendingBalance += product.price;
        console.log(seller.pendingBalance);

        await product.save();
        await seller.save();

        console.log(seller.walletBalance);

        const transaction = await Transaction.create({
          amount: product.price,
          description: `Bought an item: ${product.name}`,
          transactionID: nanoid(9),
          fulfilled: false,
          funded: false,
        });
        transaction.products.push(productID);
        await transaction.save();

        console.log(`${product.price} has been deducted from your wallet!`);
        res.status(200).send({
          message: `${product.price} has been deducted from your main wallet balance. Order now pending! Do not confirm order if you have not received item!`,
        });
        console.log(seller);
        console.log(transaction);
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
        "You are currently not logged in as a buyer. Please use Buyer account to purchase items",
    });
  }
};

module.exports = { purchaseProduct };
