const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a user
 *     description: Register a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully.
 *       400:
 *         description: Invalid request payload or missing required fields.
 */

router.post("/", registerController.registerUser);

module.exports = router;
