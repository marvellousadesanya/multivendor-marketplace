const Product = require("../models/Product");
const User = require("../models/User");
const path = require("path");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    console.log(allProducts);
    res.json(allProducts);
  } catch (error) {
    res.send({ message: "An error occured." });
    console.log(error);
  }
};

const addProduct = async (req, res) => {
  // Get the unique userID from header
  const userId = req.userId;

  const { name, price, description, category, stock } = req.body;

  const imagePath = req.file?.path;

  // Normalize the image path using path module
  const normalizedImagePath = imagePath.split(path.sep).join("/");

  const user = await User.findById(userId);

  if (user.roles.Seller) {
    try {
      const postedProduct = await Product.create({
        name,
        description,
        category,
        image: normalizedImagePath,
        stock,
        price,
        seller: user,
      });

      user.productsOwned.push(postedProduct._id);
      await user.save();
      res.send({ message: "New product added!" });
      console.log(postedProduct);
    } catch (error) {
      res.send({ message: "An error occured. Please try again later" });
      console.log(error);
    }
  } else {
    res.status(400).send({
      message:
        "Unable to post. Please make sure you are logged in as a seller.",
    });
  }
};

module.exports = { getAllProducts, addProduct };
