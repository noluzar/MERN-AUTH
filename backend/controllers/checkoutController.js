import { CheckoutModel } from "../models/checkoutModel.js";

const createCheckout = async (req, res) => {
  try {
    const checkoutData = await CheckoutModel.create(req.body);
    res.status(201).json(checkoutData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
