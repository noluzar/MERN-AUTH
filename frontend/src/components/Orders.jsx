import React from "react";
import { useGetAllOrdersQuery } from "../slices/orderSlice";
import { CiSearch } from "react-icons/ci";

const Orders = () => {
  const { data: orders, isLoading, error } = useGetAllOrdersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.data?.message}</p>;

  return (
    <div className="px-1">
      <div className="bg-[#f1e2c2] p-4">
        <div className="flex items-start justify-between">
          <h1 className="mb-4 text-xl font-semibold p-2">All Orders</h1>
          <div className="flex items-center gap-2 bg-[#fdf4df] p-1 rounded-md border border-[#f1e2c2] w-[40%]">
            <CiSearch />
            <input
              placeholder="search"
              className="bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="overflow-x-auto bg-[#fdf4df]">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="p-3">Order ID</th>
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">Total Price</th>
                <th className="p-3">Date Placed</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="p-3">#{order._id}</td>
                  <td className="p-3">{order.user?.firstName}</td>
                  <td className="p-3">{order.user?.lastName}</td>
                  <td className="p-3">R{order.totalPrice}.00</td>
                  <td className="p-3">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
