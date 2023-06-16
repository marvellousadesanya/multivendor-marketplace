const Product = require("../../models/Product");
const Transaction = require("../../models/Transaction");
const User = require("../../models/User");

exports.confirmedOrder = async (req, res) => {
  const { productID, transactionID } = req.body;

  // Get user ID
  const userId = req.userId;

  const user = await User.findById(userId);

  const product = await Product.findById(productID).populate(
    "seller",
    "fullName walletBalance productsSold"
  );

  const seller = product.seller;

  if (user.roles.Buyer) {
    try {
      // Confirm that the order has been received
      product.confirmedOrder = true;
      await product.save();

      // Save the ordered product to purchased product array
      user.purchasedProducts.push(productID);
      await buyer.save();

      /* Deduct the product price from pending balance
      of seller and add to main
       walletBalance balance. Deduct the necessary percentage
       before that. Then add productID to
       sold products array of seller
      */
      const byteMarketPercentage = 0.075;
      const byteMarketShare = product.price * byteMarketPercentage;

      seller.pendingBalance -= product.price - byteMarketShare;
      seller.productsSold.push(productID);
      seller.walletBalance += product.price;
      await product.save();
      await seller.save();

      // Mark the transaction as fulfilled
      const confirmedTransaction = await Transaction.updateOne(
        { transactionID },
        { fulfilled: true }
      );

      // Send success response
      res.send({ message: `Order confirmed. Amount deducted from wallet` });
      console.log(confirmedTransaction);
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
