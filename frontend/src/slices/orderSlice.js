// slices/orderApiSlice.js
import { apiSlice } from "./apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (orderData) => ({
        url: "/api/orders",
        method: "POST",
        body: orderData,
      }),
    }),
    getOrders: builder.query({
      query: () => "/api/orders",
    }),
  }),
});

export const { usePlaceOrderMutation, useGetOrdersQuery } = orderApiSlice;
