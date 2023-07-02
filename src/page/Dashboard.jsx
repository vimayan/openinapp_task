import React from "react";
import Squares from "../component/dashboard/Squares";
import AppBar from "../component/menu/AppBar";
import Clip from "../data/Vector.svg";
import TotalTransaction from "../data/total_transactions_icon.svg";
import Like from "../data/Like.svg";
import Users from "../data/user.svg";
import Schedule from "../component/dashboard/Schedule";
import PieChart from "../component/dashboard/chart/PieChart";
import LineChart from "../component/dashboard/chart/LineChart";

function Dashboard({ handleToggle }) {
  const square = [
    {
      name: "Total Revenues",
      value: "$" + 2129430,
      bg: "green-100",
      icon: Clip,
    },
    {
      name: "Total Transaction",
      value: 1520,
      bg: "yellow-100",
      icon: TotalTransaction,
    },
    { name: "Total Likes", value: 9721, bg: "red-100", icon: Like },
    { name: "Total Users", value: 892, bg: "purple-100", icon: Users },
  ];
  return (
    <div className="bg-gray-100">
      <div
        className="mx-3 lg:ms-[380px] lg:me-[60px] lg:pt-[60px] pt-[10px] pb-[80px] "
        id="dashboard"
      >
        <div className="mb-[40px]">
          <AppBar handleToggle={handleToggle} />
        </div>
        <div className="squares mb-[40px] grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 xl:gap-[35px]">
          {square.map((item, index) => (
            <React.Fragment key={index}>
              <Squares
                name={item.name}
                value={item.value}
                bg={item.bg}
                icon={item.icon}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="line_chart mb-[40px] ">
          <LineChart />
        </div>
        <div className="pie_shedule flex flex-col md:flex-row justify-between gap-4  xl:gap-[40px]">
          <div className="pie_chart w-full xl:w-[480px] xl:h-[256px] rounded-2xl flex flex-col items-start ps-[50px] pe-[40px] py-[30px] gap-[25px] bg-[white] ">
            <div className="flex w-full justify-between items-center">
              <h1 className="text-[18px] font-bold">Top Products</h1>
              <span className="text-[12px] text-gray-500">See All {`>`}</span>
            </div>
            <div className="w-full">
              <PieChart />
            </div>
          </div>
          <div className="schedule w-full">
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
