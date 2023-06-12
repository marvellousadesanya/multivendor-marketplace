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
  const { name, description } = req.body;

  try {
    const postedProduct = await Product.create({
      name,
      description,
      image: req.file.path,
      seller: User._id,
    });
    res.send({ message: "New product added!" });
    console.log(postedProduct);
  } catch (error) {
    res.send({ message: "An error occured. Please try again later" });
    console.log(error);
  }
};

module.exports = { getAllProducts, addProduct };
