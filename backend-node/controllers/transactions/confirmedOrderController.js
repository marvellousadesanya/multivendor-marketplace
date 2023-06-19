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
    "fullName walletBalance pendingBalance productsSold"
  );

  // const foundTheTransactionTransaction = await Transaction.findOne(
  //   transactionID
  // ).populate(products);

  // Save seller info in variable
  const seller = product.seller;

  // Check if buyer or seller
  if (user.roles.Buyer && transactionID && productID) {
    try {
      // Confirm that the order has been received
      product.confirmedOrder = true;
      await product.save();

      // Save the ordered product to purchased product array
      user.purchasedProducts.push(productID);
      await user.save();

      /* Deduct the product price from pending balance of seller and add to main
       walletBalance balance. Deduct the necessary percentage
       before that. Then add productID to sold products array of seller
      */
      const byteMarketPercentage = 0.075;
      const byteMarketShare = product.price * byteMarketPercentage;

      seller.pendingBalance -= product.price - byteMarketShare;
      seller.productsSold.push(productID);
      seller.walletBalance += product.price;
      await product.save();
      await seller.save();
      console.log(seller);

      // Mark the transaction as fulfilled
      const foundTransaction = await Transaction.findOne({ transactionID });

      if (foundTransaction) {
        const confirmedTransaction = await Transaction.updateOne(
          { transactionID },
          { fulfilled: true }
        );
        // Send success response
        res.send({ message: `Order confirmed. Amount credited to seller` });
        console.log(confirmedTransaction);
      } else {
        res.status(400).send({ message: "Transaction not found" });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: "An error occured. Please try again later." });
    }
  } else {
    res.status(500).send({
      message:
        "An error occured. Kindly confirm if you are logged in as a buyer",
    });
  }
};
