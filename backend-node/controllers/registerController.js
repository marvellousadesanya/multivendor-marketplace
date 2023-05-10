const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  const { firstname, lastname, email, role, password } = req.body;
  if (!email && !password && !firstname)
    return res.status(400).json({ message: "Please fill all entries" });

  // Check if user with given email already exists
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    return res.status(409).json({ message: "Email already registered" });
  }

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPwd,
    });

    res.status(201).json({ success: `New user ${firstname} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
