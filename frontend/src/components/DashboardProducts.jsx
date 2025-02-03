import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";
import { useProductStore } from "../store/product.js";
import { toast } from "react-toastify";


const DashboardProducts = () => {
  const { fetchProducts, products, deleteProduct } = useProductStore();

  // Delete a product
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (success) {
      toast.success("Product deleted successfully");
      fetchProducts();
    } else {
      toast.error(`Error: ${message}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="w-full bg-[#fdf4df] p-4 my-4">
      <div className="flex items-start justify-between">
        <h1 className="mb-4 text-xl font-semibold p-2">Top Products</h1>
        <div className="flex items-center gap-2 bg-[#f1e2c2] p-1 rounded-md border border-[#f1e2c2] w-[50%]">
          <CiSearch />
          <input
            placeholder="search"
            className="bg-transparent outline-none"
          ></input>
        </div>
      </div>
      <div className="overflow-x-auto bg-[#f1e2c2]">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="p-3">Product ID</th>
              <th className="p-3">Product Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="p-3">#{item._id}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">R{item.price}.00</td>
                <td className="p-3 text-center">
                  <button onClick={() => handleDeleteProduct(item._id)}>
                    <RiDeleteBin2Line className="cursor-pointer text-[#afad55] size-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProducts;
