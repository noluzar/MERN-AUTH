// import React from 'react'
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";
import { useUserStore } from "../store/user.js";
import { toast } from "react-toastify";

const DashboardCustomers = () => {
  const { fetchUsers, users, deleteUser } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Delete a user
  const handleDeleteUser = async (pid) => {
    const { success, message } = await deleteUser(pid);
    if (success) {
      toast.success("User deleted successfully");
      fetchUsers();
    } else {
      toast.error(`Error: ${message}`);
    }
  };

  return (
    <div className="p-2">
      <div className="bg-[#f1e2c2] p-4 ">
        <div className="flex items-start justify-between">
        <h1 className="mb-4 text-xl font-semibold p-2">Active Customers</h1>
        <div className="flex items-center gap-2 bg-[#fdf4df] p-1 rounded-md border border-[#f1e2c2] w-[40%]">
          <CiSearch />
          <input
            placeholder="search"
            className="bg-transparent outline-none"
          ></input>
        </div>
      </div>
      <div className="overflow-x-auto bg-[#fdf4df]">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="p-3">Customer ID</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="p-3">#{item._id}</td>
                <td className="p-3">{item.firstName}</td>
                <td className="p-3">{item.lastName}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3 text-center">
                    <RiDeleteBin2Line className="cursor-pointer text-[#afad55] size-6 " onClick={() => handleDeleteUser(item._id)} />
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

export default DashboardCustomers;
