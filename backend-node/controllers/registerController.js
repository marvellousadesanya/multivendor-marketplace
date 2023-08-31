const User = require("../models/User");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");

const ROLES_LIST = require("../config/roles_list");

exports.registerUser = async (req, res) => {
  const { fullName, email, role, password } = req.body;
  if (!email && !password)
    return res.status(400).json({ message: "Please fill all entries" });

  // Check if user with given email already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(409).json({ message: "Email already registered" });
  }

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser = await User.create({
      fullName,
      email,
      uniqueID: nanoid(6),
      roles: { [role]: ROLES_LIST[role] },
      password: hashedPwd,
    });
    console.log(newUser);

    res.status(201).json({ success: `New user created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
