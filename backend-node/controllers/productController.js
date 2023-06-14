const Product = require("../models/Product");
const User = require("../models/User");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    console.log(allProducts);
  } catch (error) {
    res.send({ message: "An error occured." });
  }
};

const addProduct = async (req, res) => {
  const { name, price, description } = req.body;

  const userId = req.userId;

  const user = await User.findById(userId);

  if (user.roles.Seller) {
    try {
      const postedProduct = await Product.create({
        name,
        description,
        image: req.file?.path,
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
      message: "Unable to post. You are currently logged in as a buyer.",
    });
  }
};

module.exports = { getAllProducts, addProduct };
