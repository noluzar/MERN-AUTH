// import React from "react";
import {
  MdOutlineDashboard,
  MdOutlineShoppingBag,
  MdOutlinePeopleAlt,
  MdOutlineSettings,
  MdOutlineHelpOutline
} from "react-icons/md";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex h-[100vh] pt-[100px]">
      <div className="space-y-1 w-[20%] fixed">
        <div className="bg-[#f1e2c2] h-[45vh] p-4 space-y-4">
            <p>MENU</p>
          <Link to={"dashboard"} className="flex items-center space-x-2 p-2">
            <MdOutlineDashboard className="size-6 text-[#afad55]" />
            <p>Dashboard</p>
          </Link>
          <Link to={"products"} className="flex items-center space-x-2 p-2">
            <MdOutlineShoppingBag className="size-6 text-[#afad55]" />
            <p>Products</p>
          </Link>
          <Link to={"customers"} className="flex items-center space-x-2 p-2">
            <MdOutlinePeopleAlt className="size-6 text-[#afad55]" />
            <p>Customers</p>
          </Link>
          <Link to={"orders"} className="flex items-center space-x-2 p-2">
            <MdOutlinePeopleAlt className="size-6 text-[#afad55]" />
            <p>Orders</p>
          </Link>
        </div>
        <div className="bg-[#f1e2c2] h-[45vh] p-4 space-y-4">
        <p>SUPPORT</p>
          <a href="#" className="flex items-center space-x-2 p-2">
            <MdOutlineHelpOutline className="size-6 text-[#afad55]" />
            <p>Help</p>
          </a>
          <a href="#" className="flex items-center space-x-2 p-2">
            <MdOutlineSettings className="size-6 text-[#afad55]" />
            <p>Settings</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
