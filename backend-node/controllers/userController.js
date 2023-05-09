const User = require("../models/User");

// Get All buyers
exports.getAllUsers = async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
};

// Get single buyer
exports.getUserById = async (req, res) => {
  const singleUser = User.findOne({ _id: req.params.id }).exec();
  if (!singleUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(singleUser);
};
