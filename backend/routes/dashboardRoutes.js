import express from 'express';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';

const router = express.Router();

// Get Dashboard Stats
router.get('/dashboard/stats', async (req, res) => {
  try {
    // Total Orders
    const totalOrders = await Order.countDocuments();

    // Total Customers (excluding admin)
    const totalCustomers = await User.countDocuments({ role: { $ne: 'admin' } });

    // Total Sales in Rands
    const totalSales = await Order.aggregate([
      { $match: { status: 'completed' } }, // Filter for completed orders
      { $group: { _id: null, total: { $sum: '$totalPrice' } } }
    ]);
    const salesInRands = totalSales[0] ? totalSales[0].total : 0;

    res.status(200).json({
      totalOrders,
      totalCustomers,
      totalSales: salesInRands,
    });
  } catch (error) {
    console.log("Error fetching dashboard stats:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
