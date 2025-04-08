const express = require('express');
const { getUsers } = require('../controllers/admin/getUsers.js');
const { deleteUser } = require('../controllers/admin/deleteUser.js');
const { adminAccess } = require('../middleware/roleAccessMiddleware.js');
const { protect } = require('../middleware/authMiddleWare.js');

const router = express.Router();

router.get("/", protect, adminAccess, getUsers);
router.delete("/:id", protect, adminAccess, deleteUser);

module.exports = router;
