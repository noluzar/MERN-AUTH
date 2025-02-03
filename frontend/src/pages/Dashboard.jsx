import { IoBagAddOutline } from "react-icons/io5";
import DashboardCustomers from "./DashboardCustomers";
import Calendar from "../components/Calendar";
import { useSelector } from 'react-redux';
import DashboardProducts from "../components/DashboardProducts";

const StatCard = ({ title, value }) => (
  <div className="bg-[#afad55] w-[20%] text-3xl text-white p-4 space-y-2">
    <div className="flex items-center gap-2">
      <IoBagAddOutline />
      <p>{title}</p>
    </div>
    <p>{value}</p>
  </div>
);

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const stats = [
    { title: "Total Sales", value: "R0" },
    { title: "Total Sales", value: "R0" },
    { title: "Total Sales", value: "R0" },
    { title: "Visitors", value: "R0" },
    { title: "Total Orders", value: "R0" },
  ];

  return (
    <div className="pt-[50px] p-8 my-2">
      <div className="space-y-4">
        <div className="space-y-4">
          <h1 className="font-semibold text-3xl">{`${userInfo?.firstName || ''} ${userInfo?.lastName || ''}`.trim()}</h1>
          <h3 className="text-lg">Hello Admin, Welcome back!</h3>
        </div>
        <div className="flex space-x-4">
          {stats.map((stat, index) => (
            <StatCard key={index} title={stat.title} value={stat.value} />
          ))}
        </div>
        <div className="flex space-x-4">
          <Calendar />
          <DashboardProducts />
        </div>
      </div>
      <DashboardCustomers />
    </div>
  );
};

export default Dashboard;
