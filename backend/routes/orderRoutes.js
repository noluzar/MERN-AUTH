import express from "express";
import { createOrder, getAllOrders } from "../controllers/orderController.js";
import { protect, admin } from '../middleware/authMiddleware.js';
import getUserOrders from "../controllers/getUserOrders.js";

const router = express.Router();

// For placing an order
router.post("/", protect, createOrder);

// For admins to get all orders
router.get("/", protect, admin, getAllOrders);

// For users to get their own order history
router.get("/order-history", protect, getUserOrders);

export default router;
