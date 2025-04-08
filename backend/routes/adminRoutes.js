import express from "express";
import { getUsers } from "../controllers/admin/getUsers.js";
import { deleteUser } from "../controllers/admin/deleteUser.js";
import { adminAccess } from "../middleware/roleAccessMiddleware.js";
import { protect } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.get("/", protect, adminAccess, getUsers);
router.delete("/:id", protect, adminAccess, deleteUser);

export default router;