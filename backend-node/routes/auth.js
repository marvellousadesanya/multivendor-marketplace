const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: User login
 *     description: Authenticate user credentials and generate an access token.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     example:
 *        email: example@example.com
 *        password: password123
 *     responses:
 *       200:
 *         description: User logged in successfully.
 *       401:
 *         description: Unauthorized access. Invalid credentials.
 */

router.post("/", authController.handleLogin);

module.exports = router;
