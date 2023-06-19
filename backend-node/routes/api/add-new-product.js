const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");
const ROLES_LIST = require("../../config/roles_list");
const verifyRoles = require("../../middleware/verifyRoles");
const upload = require("../../middleware/multer");

/**
 * @swagger
 * /add-new-product:
 *   post:
 *     summary: Add a new product
 *     description: Add a new product as a Seller.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Product added successfully.
 *       400:
 *         description: Invalid request payload or missing required fields.
 */

router
  .route("/")
  .post(
    verifyRoles(ROLES_LIST.Seller, ROLES_LIST.Admin),
    upload.single("image"),
    productController.addProduct
  );

module.exports = router;
