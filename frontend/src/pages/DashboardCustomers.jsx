// import React from 'react'
import { RiDeleteBin2Line } from "react-icons/ri";
import { useEffect } from "react";
import { useUserStore } from "../store/user.js";
// import { useSelector } from 'react-redux';


const DashboardCustomers = () => {
  const { fetchUsers, users } = useUserStore();
//   const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="pt-[55px] p-8 space-y-4">
      <h1>Active Customers</h1>
      <div className="flex justify-between items-end">
        <p>Customer ID</p>
        <p>First Name</p>
        <p>Last Name</p>
        <p>Email</p>
        <p>Delete user</p>
      </div>
      <hr/>
      <div>
        {users.map((item) => (
          <div key={item._id} className="flex justify-between items-end">
            <p>#{item._id}</p>
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p>{item.email}</p>
            <p><RiDeleteBin2Line /></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCustomers;
