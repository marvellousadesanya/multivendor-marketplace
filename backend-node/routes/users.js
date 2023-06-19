const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  addUser,
  getUserById,
  suspendUser,
  deleteUserById,
} = require("../controllers/userController");
const verifyRoles = require("../middleware/verifyRoles");
const ROLES_LIST = require("../config/roles_list");

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: OK
 *   post:
 *     summary: Add a new user
 *     security:
 *       - bearerAuth: []
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
 *         description: OK
 *       403:
 *         description: Forbidden
 */

router.route("/").get(getAllUsers).post(verifyRoles(ROLES_LIST.Admin), addUser);

/**
 * @swagger
 * /users/{id}:
 *   security:
 *     - bearerAuth: []
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: User ID
 *       schema:
 *         type: string
 */
router.get("/:id", getUserById);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       403:
 *         description: Forbidden
 */
router.delete("/:id", deleteUserById);

/**
 * @swagger
 * /users/{id}:
 *   update:
 *     summary: Suspend a user by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       403:
 *         description: Forbidden
 */

router.put("/:id", suspendUser);

module.exports = router;
