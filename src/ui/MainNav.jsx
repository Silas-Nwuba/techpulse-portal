import React from "react";
import {
  HiOutlineHome,
  HiOutlineChatBubbleLeft,
  HiOutlineCog6Tooth,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { AiOutlineDashboard } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const MainNav = ({ isSidebarOpen }) => {
  return (
    <div className="mx-5 mt-5 py-2 space-y-10 text-[15px] navLink">
      <NavLink
        to={"/admin/dashboard"}
        className="flex items-center w-full gap-3 py-[10px] pb-2 text-ston-500 px-[0px] group hover:bg-slate-50 hover:rounded-md hover:w-full transition ease-in-out duration-300"
      >
        <AiOutlineDashboard className="text-xl ml-5 group group-hover:text-[rgba(0, 0, 255, 0.753)]  text-stone-400 icon" />
        <h3 className="group group-hover:text-stone-500 text-stone-700">
          Dashboard
        </h3>
      </NavLink>
      <NavLink
        to={"/"}
        className="flex items-center gap-4 text-ston-500 group py-[10px] px-[0px] hover:bg-slate-50 hover:rounded-md hover:w-full transition duration-150"
      >
        <HiOutlineHome className="text-xl ml-5 group group-hover:text-[rgba(0, 0, 255, 0.753)]  text-stone-400 icon" />
        <h3 className="group group-hover:text-ston-500 text-stone-700">Home</h3>
      </NavLink>
      <NavLink
        to={"/admin/post"}
        className="flex items-center gap-4 w-full active:bg-slate-50 py-[10px] text-ston-500  px-[0px] group hover:bg-slate-50 hover:rounded-md hover:w-full transition ease-in-out duration-300"
      >
        <HiOutlinePencilSquare className="text-xl ml-5 group group-hover:text-[rgba(0, 0, 255, 0.753)] icon text-stone-400" />
        <h3 className="group group-hover:text-ston-500 text-stone-700">Post</h3>
      </NavLink>
      <NavLink
        to={"/admin/comment"}
        className="flex items-center gap-4 w-full py-[10px] text-stone px-[0px] group hover:bg-slate-50 hover:rounded-md hover:w-full transition ease-in-out duration-300"
      >
        <HiOutlineChatBubbleLeft className="text-xl ml-5 group group-hover:text-[rgba(0, 0, 255, 0.753)] icon text-stone-400" />
        <h3 className="group group-hover:text-ston-500 text-stone-700">
          Comment
        </h3>
      </NavLink>
      <NavLink
        to={"/admin/settings"}
        className="flex items-center gap-4 w-full py-[10px] text-stone px-[0px] group hover:bg-slate-50 hover:rounded-md hover:w-full transition ease-in-out duration-300"
      >
        <HiOutlineCog6Tooth className="text-xl ml-5 group group-hover:text-[rgba(0, 0, 255, 0.753)] icon text-stone-400" />
        <h3 className="group group-hover:text-ston-500 text-stone-700">
          Settings
        </h3>
      </NavLink>
    </div>
  );
};
export default MainNav;
