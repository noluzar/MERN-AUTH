import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [], // Initialize cart from localStorage
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x._id === item._id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already in cart
      } else {
        state.cartItems.push({ ...item, quantity: 1 }); // Add new item
      }

      // Save cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
      
      // Save cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];

      // Clear cart from localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
