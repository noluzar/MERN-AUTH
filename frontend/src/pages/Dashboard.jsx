// import React from 'react'
import { IoBagAddOutline } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="h-screen pt-[100px] pl-[5%] space-y-2">
      <div>
        <h1>Username</h1>
        <h3>Hello Admin, Welcome back!</h3>
      </div>
      <div className="flex space-x-1">
        <div className="bg-[#afad55] w-[20%] text-3xl text-white p-2 space-y-2">
          <div className="flex items-center gap-2">
            <IoBagAddOutline />
            <p>Total sales</p>
          </div>
          <p>R0</p>
        </div>
        <div className="bg-[#afad55] w-[20%] text-3xl text-white p-2 space-y-2">
          <div className="flex items-center gap-2">
            <IoBagAddOutline />
            <p>Total sales</p>
          </div>
          <p>R0</p>
        </div>
        <div className="bg-[#afad55] w-[20%] text-3xl text-white p-2 space-y-2">
          <div className="flex items-center gap-2">
            <IoBagAddOutline />
            <p>Total sales</p>
          </div>
          <p>R0</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
