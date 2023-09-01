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

exports.suspendUser = async () => {
  try {
    const userToSuspend = await User.findOne({ _id: req.params.id }).exec();
    userToSuspend.suspended = true;
    userToSuspend.save();
  } catch (error) {
    res.status(500).send({ "An error occured": error });
  }
};

exports.deleteUserById = async (req, res) => {
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

exports.addUser = async (req, res) => {
  const { fullName, email, password, role } = req.body;

  const generateRandomPassword = (length) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    return password;
  };
  try {
    const newUser = await User.create({
      fullName,
      email,
      password: password || generateRandomPassword(),
      role,
    }).exec();
    console.log(newUser);

    res.json({ message: "User created successfully!" });
  } catch (error) {
    // Handle error
    res.status(500).json({ message: "Internal server error" });
  }
};
