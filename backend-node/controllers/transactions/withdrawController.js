const User = require("../../models/User");

exports.withdrawFunds = async (req, res) => {
  const userId = req.userId;
  const { amountToWithdraw } = req.body;

  const user = await User.findById(userId);
  console.log(user);

  if (user) {
    if (user.walletBalance >= amountToWithdraw) {
      try {
        const withdrawnAmount = user.walletBalance - amountToWithdraw;
        res.send({
          message: `Sucess! ${withdrawnAmount} has been withdrawn from your wallet balance!`,
        });
      } catch (error) {
        res.send({ message: "An error ocurred. Please try again later." });
        console.log(error);
      }
    } else {
      res.status(400).send({ message: "Insufficient balance" });
    }
  } else {
    res
      .status(409)
      .send({ message: "You must be logged in to perform this action" });
  }
};
