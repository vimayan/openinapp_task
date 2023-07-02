import React from "react";
import { Outlet } from "react-router-dom";
import DashBoard from "../../data/dashboard_icon.svg";
import Transaction from "../../data/transaction_icon.svg";
import Schedule from "../../data/schedule.svg";
import User from "../../data/user_icon.svg";
import Setting from "../../data/setting_icon.svg";
function SideMenu({ handleToggle, toggle }) {
  return (
    <div className="h-[1024px]">
      <div
        className={`absolute z-10 lg:top-[40px] lg:left-[40px] h-[1440px] md:h-[1024px]  lg:h-[944px] w-[280px]  duration-500  lg:rounded-2xl text-[white] bg-[black] 
        flex flex-col items-start ps-[50px] py-[60px] justify-between  ${
          toggle ? "top-[0px] left-[-350px]" : "top-[0px] left-[0px]"
        }`}
        id="side_menu"
      >
        <button
          type="button"
          onClick={handleToggle}
          className="lg:hidden absolute top-4 right-5"
        >
          <svg height="1.5em" className="fill-[white]" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
        <div className="flex flex-col gap-[60px] items-start ">
          <span className="text-3xl font-bold">Board.</span>
          <ul className="flex flex-col gap-[40px]">
            <li className="flex gap-[20px]  cursor-pointer">
              {" "}
              <img src={DashBoard} alt="" />
              Dashboard
            </li>
            <li className="flex gap-[20px]  cursor-pointer">
              {" "}
              <img src={Transaction} alt="" />
              Transaction
            </li>
            <li className="flex gap-[20px]  cursor-pointer">
              {" "}
              <img src={Schedule} alt="" />
              Schedule
            </li>
            <li className="flex gap-[20px]  cursor-pointer">
              {" "}
              <img src={User} alt="" />
              User
            </li>
            <li className="flex gap-[20px]  cursor-pointer">
              {" "}
              <img src={Setting} alt="" />
              setting
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[20px]">
          <span className=" cursor-pointer">Help</span>
          <span className=" cursor-pointer">Contact Us</span>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SideMenu;
