const User = require("../models/User");

// Get All buyers
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
};

// Get single buyer
exports.getUserById = async (req, res) => {
  const singleUser = await User.findOne({ uniqueID: req.params.id }).exec();
  console.log(singleUser);
  if (!singleUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(singleUser);
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    // Handle error
    res.status(500).json({ message: "Internal server error" });
  }
};
