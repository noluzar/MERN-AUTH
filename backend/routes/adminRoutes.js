import express from "express";
import { getUsers } from "../controllers/admin/getUsers.js";
import { deleteUser } from "../controllers/admin/deleteUser.js";
import { adminAccess } from "../middleware/roleAccessMiddleware.js";
import { protect } from "../middleware/authMiddleWare.js";

const adminRoutes = express.Router();

adminRoutes.get("/", protect, adminAccess, getUsers);
adminRoutes.delete("/:id", protect, adminAccess, deleteUser);

export default adminRoutes;