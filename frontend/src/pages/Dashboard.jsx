import { IoBagAddOutline } from "react-icons/io5";
import DashboardCustomers from "./DashboardCustomers";
import Calendar from "../components/Calendar";
import { useSelector } from 'react-redux';
import DashboardProducts from "../components/DashboardProducts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StatCard = ({ title, value }) => (
  <Link className="bg-[#afad55] w-full text-2xl text-white p-4">
    <div className="flex items-center gap-2">
      <IoBagAddOutline />
      <p>{title}</p>
    </div>
    <p>{value}</p>
  </Link>
);

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [dashboardStats, setDashboardStats] = useState({
    totalOrders: 0,
    totalCustomers: 0,
    totalSales: 0,
    totalProducts: 0, 
  });

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const response = await fetch('/api/dashboard/stats');
        const data = await response.json();
        if (response.ok) {
          setDashboardStats({
            totalOrders: data.totalOrders,
            totalCustomers: data.totalCustomers,
            totalSales: data.totalSales,
            totalProducts: 0,
          });
        } else {
          console.error("Error fetching dashboard stats:", data.message);
        }
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchDashboardStats();
  }, []);

  const stats = [
    { title: "Total Orders", value: `${dashboardStats.totalOrders}` },
    { title: "Total Customers", value: `${dashboardStats.totalCustomers}` },
    { title: "Total Sales", value: `R${dashboardStats.totalSales.toFixed(2)}` },
    { title: "Total Products", value: `${dashboardStats.totalProducts}` },
  ];

  return (
    <div className="p-2">
      <div className="space-y-2 p-2">
        <div className="">
          <h1 className="font-semibold text-3xl">{`${userInfo?.firstName || ''} ${userInfo?.lastName || ''}`.trim()}</h1>
          <h3 className="text-lg">Hello Admin, Welcome back!</h3>
        </div>
        <div className="flex space-x-2">
          {stats.map((stat, index) => (
            <StatCard key={index} title={stat.title} value={stat.value} />
          ))}
        </div>
        <div className="flex space-x-2">
          <Calendar />
          <DashboardProducts />
        </div>
      </div>
      <Link to={'/admin/customers'}>
      <DashboardCustomers />
      </Link>
    </div>
  );
};

export default Dashboard;
