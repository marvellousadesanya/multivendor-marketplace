const User = require("../../models/User");
const Transaction = require("../../models/Transaction");
const { nanoid } = require("nanoid");

const fundWallet = async (req, res) => {
  const { amountToAdd, description } = req.body;
  const userId = req.userId;
  console.log(userId);

  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  try {
    user.walletBalance += amountToAdd;
    await user.save();

    await Transaction.create({
      amount: amountToAdd,
      description,
      transactionID: nanoid(6),
      funded: true,
    });
    console.log(`${amountToAdd} has been added to your wallet!`);
    res
      .status(201)
      .send({ message: `${amountToAdd} has been added to your wallet!` });
  } catch (error) {
    res.send({ message: "An error occured. Try again later" });
    console.log(error);
  }
};

module.exports = { fundWallet };
