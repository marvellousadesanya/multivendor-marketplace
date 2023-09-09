const Product = require("../models/Product");
const User = require("../models/User");
const path = require("path");
const slugify = require("slugify");

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

  /* Normalize the image path using path module. Without this, Windows will make use of
  backward slashes which is not readable by web systems and other OSs */
  const normalizedImagePath = imagePath.split(path.sep).join("/");

  const user = await User.findById(userId);

  if (user.roles.Seller) {
    // Generate a slug from the product name
    const slug = slugify(name, { lower: true });
    // Check if the generated slug already exists in the database for another product
    const isSlugTaken = await Product.exists({ slug, _id: { $ne: productId } });

    // If the slug is taken, add a unique identifier
    if (isSlugTaken) {
      const uniqueIdentifier = Date.now();
      existingProduct.slug = `${slug}-${uniqueIdentifier}`;
    } else {
      existingProduct.slug = slug;
    }
    try {
      const postedProduct = await Product.create({
        name,
        description,
        category,
        image: normalizedImagePath,
        stock,
        price,
        seller: user,
        slug,
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

const updateProduct = async (req, res) => {
  // Get the unique userID from header
  const userId = req.userId;

  const { productId } = req.body;

  const user = await User.findById(userId);

  if (user.roles.Seller) {
    try {
      // Check if the product with the given productId exists in the database
      const existingProduct = await Product.findById(productId);

      if (!existingProduct) {
        return res.status(404).send({ message: "Product not found" });
      }

      // Generate a slug from the updated name if it doesn't exist
      const slug =
        existingProduct.slug || slugify(existingProduct.name, { lower: true });

      // Check if the generated slug already exists in the database for another product
      const isSlugTaken = await Product.exists({
        slug,
        _id: { $ne: productId },
      });

      // If the slug is taken, add a unique identifier
      if (isSlugTaken) {
        const uniqueIdentifier = Date.now();
        existingProduct.slug = `${slug}-${uniqueIdentifier}`;
      } else {
        existingProduct.slug = slug;
      }

      // Update the product with the new values
      // existingProduct.name = name;
      // existingProduct.description = description;
      // existingProduct.category = category;
      // existingProduct.stock = stock;
      // existingProduct.price = price;
      existingProduct.seller = user;

      await existingProduct.save();
      res.status(200).send({ message: "Product updated!" });
    } catch (error) {
      res.send({ message: "An error occured. Please try again later" });
      console.log(error);
    }
  } else {
    res.status(400).send({
      message:
        "Unable to update. Please make sure you are logged in as a seller.",
    });
  }
};

const getProductBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const product = await Product.findOne({ slug });

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.send({ message: "An error occurred. Please try again later" });
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  getProductBySlug,
};
