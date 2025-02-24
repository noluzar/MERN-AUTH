import Order from "../models/orderModel.js";

// Fetch orders for a logged-in user
const getUserOrders = async (req, res) => {
  try {
    // Find orders belonging to the logged-in user (using `req.user._id` from the protect middleware)
    const orders = await Order.find({ user: req.user._id });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found." });
    }

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch order history." });
  }
};

export default getUserOrders;
