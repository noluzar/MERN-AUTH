import mongoose from "mongoose";
import CheckoutPage from "../../frontend/src/pages/Checkout";

const checkoutSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      cardNumber: {
        type: String,
        required: true,
      },
      expiryMonth: {
        type: String,
        required: true,
      },
      expiryYear: {
        type: String,
        required: true,
      },
      cvv: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

const CheckoutModel = mongoose.model("Checkout", checkoutSchema);

export { CheckoutModel, CheckoutPage };
