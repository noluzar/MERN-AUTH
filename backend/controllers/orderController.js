import Order from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  const { orderItems, totalPrice } = req.body;
  const order = new Order({
    user: req.user._id,
    orderItems,
    totalPrice,
  });
  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

export const getAllOrders = async (req, res) => {
  const orders = await Order.find({}).populate("user", "firstName lastName");
  res.json(orders);
};
