import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  HiOutlineChatBubbleLeft,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlinePencilSquare,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import { NavLink, useMatch } from "react-router-dom";
import Logo from "./Logo";
import Footer from "./Footer";
import { useSidebarContext } from "../context/SidebarContext";

const MobileSidebarMenu = () => {
  const dashboardMatch = useMatch("/dashboard");
  const commentMatch = useMatch("comment");
  const settingMatch = useMatch("settings");
  const allPostMatch = useMatch("post/allPost");
  const categoryMatch = useMatch("post/category");
  const tagMatch = useMatch("post/tag");
  const [activeLink, setActiveLink] = useState(false);

  const checkActiveLink = () => {
    setActiveLink(!activeLink);
  };
  const { dispatch } = useSidebarContext();
  const handleCloseSidebar = () => {
    dispatch({ type: "closeSidebarMenu" });
    document.documentElement.style.overflowY = "auto";
  };
  return (
    <div className="bg-white fixed top-0 overflow-y-auto h-screen  min-h-screen dark:bg-[#0c1427] shadow-sm md:z-50 z-[500000] w-[250px] md:block">
      <Logo textAlign="" display="flex" showIcon="block" padding="py-0" />
      <div className=" border-slate-50 w-full dark:border-[#3b4557] mb-4"></div>
      <div className="mx-2 py-5 mt-3 ml-4 space-y-5 text-[14px] navLink relative">
        <NavLink
          to={"dashboard"}
          onClick={() => {
            setActiveLink(false);
            dispatch({ type: "closeSidebarMenu" });
          }}
          className={` ${
            dashboardMatch
              ? "bg-[#6C4DE6] group group-hover:text-[#E7E9EA] rounded-[10px] w-[70%]"
              : "dark:hover:bg-[#F7F9F916] hover:bg-[#0F14191A]"
          } w-[90%] group dark:group-hover:text-white flex items-center group-hover:text-[#000000]  gap-2  py-[12px] rounded-[10px]  px-[0px] transition ease-in-out duration-500`}
        >
          <HiOutlineSquares2X2
            className={`w-5 h-5 ml-5 transition  group dark:group-hover:text-white group-hover:text-[#000000] duration-300 ease-in-out ${
              dashboardMatch
                ? "dark:text-white text-white group group-hover:text-white"
                : "text-[#899BB1] dark:text-[#E7E9EA]"
            }`}
          />
          <h2
            className={`text-[17px] font-medium transition duration-300 group dark:group-hover:text-white group-hover:text-[#000000]   ease-in-out ${
              dashboardMatch
                ? "text-white group group-hover:text-white"
                : "dark:text-[#E7E9EA] text-[#000000]"
            }`}
          >
            Dashboard
          </h2>
        </NavLink>
        <div>
          <div
            className={`${
              activeLink === true
                ? "dark:bg-[#F7F9F916] bg-[#0F14191A] rounded-[10px] w-[90%] dark:group-hover:text-white group-hover:text-white  flex items-center py-[12px] justify-between cursor-pointer"
                : "flex items-center justify-between cursor-pointer rounded-[10px] dark:group-hover:text-white w-[90%] group py-[12px]  group-hover:text-white transition duration-500 ease-in-out "
            } dark:hover:bg-[#F7F9F916] hover:bg-[#0F14191A] group-hover:text-[#000000] `}
            onClick={checkActiveLink}
          >
            <div className="flex items-center gap-4">
              <HiOutlinePencilSquare
                className={`w-5 h-5 ${
                  activeLink
                    ? "text-[#000000] dark:text-[#E7E9EA] group-hover:text-white transition duration-500 ease-in-out text-lg ml-5 group"
                    : "text-lg ml-5 group  text-[#899BB1] dark:text-[#E7E9EA] dark:group-hover:text-white group-hover:text-[#000000] transition duration-500 ease-in-out"
                }`}
              />
              <h2
                className={`${
                  activeLink
                    ? "text-[#000000] text-[16px] font-medium"
                    : "text-[#000000] text-[16px] font-medium dark:text-[#E7E9EA] group-hover:text-[#000000]  transition duration-300 ease-in-out"
                }  text-[16px] font-medium dark:text-[#edf0f7] dark:group-hover:text-white group-hover:text-[#000000]  transition duration-300 ease-in-out`}
              >
                Posts
              </h2>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${
                activeLink
                  ? "text-[#000000] dark:text-[#E7E9EA] size-[18px] mr-4"
                  : "size-[18px] mr-4 text-black group-hover:text-[#000000]  dark:group-hover:text-white dark:text-[#768191] transition duration-300 ease-in-out"
              } `}
              onClick={checkActiveLink}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {activeLink && (
            <div className="pt-3 ml-6  min-w-[20px] h-[100px] z-10 relative inline-block  border-[2px] border-l-slate-100 dark:border-l-[#4a5263] border-b-slate-100 border-t-0 border-r-0 dark:border-b-[#4a5263]">
              <ul className="text-[14px] font-medium space-y-5 cursor-pointer leading-[20px] list-none overflow-hidden absolute pl-5">
                <NavLink
                  to={"post/allPost"}
                  onClick={() => {
                    dispatch({ type: "closeSidebarMenu" });
                    setActiveLink(false);
                  }}
                  className={`text-[#000000] leading-[16.94px] group dark:text-[#E7E9EA] transition duration-300 ease-in-out dark:hover:text-[#6C4DE6] hover:text-[#6C4DE6] flex gap-3 items-center 
                    ${allPostMatch ? "text-[#6C4DE6]" : ""}`}
                >
                  <span className={`${allPostMatch ? "text-[#6C4DE6]" : ""}`}>
                    All Posts
                  </span>
                </NavLink>

                <NavLink
                  to={"/post/category"}
                  onClick={() => {
                    dispatch({ type: "closeSidebarMenu" });
                    setActiveLink(false);
                  }}
                  className={`text-[#000000] group  leading-[16.94px]  dark:text-[#E7E9EA] transition duration-300 ease-in-out dark:hover:text-[#6C4DE6] hover:text-[#6C4DE6] flex gap-3 items-center 
                    ${categoryMatch ? "text-[#6C4DE6]" : ""}`}
                >
                  <span className={`${categoryMatch ? "text-[#6C4DE6]" : ""}`}>
                    Category
                  </span>
                </NavLink>

                <NavLink
                  to={"post/tag"}
                  onClick={() => {
                    dispatch({ type: "closeSidebarMenu" });
                    setActiveLink(false);
                  }}
                  className={`text-[#000000] group  leading-[16.94px] dark:text-[#E7E9EA] transition duration-300 ease-in-out dark:hover:text-[#6C4DE6] hover:text-[#6C4DE6] flex gap-3 items-center 
                    ${tagMatch ? "text-[#6C4DE6]" : ""}`}
                >
                  <span className={`${tagMatch ? "text-[#6C4DE6]" : ""}`}>
                    Tags
                  </span>
                </NavLink>
              </ul>
            </div>
          )}
        </div>
        <NavLink
          to={"comment"}
          onClick={() => {
            dispatch({ type: "closeSidebarMenu" });
            setActiveLink(false);
          }}
          className={` ${
            commentMatch
              ? "bg-[#6C4DE6]  rounded-[10px] w-[70%]"
              : "hover:bg-[#0F14191A] dark:hover:bg-[#F7F9F916]"
          } w-[90%] group dark:group-hover:text-white flex items-center group  gap-2  py-[12px] rounded-[10px]  px-[0px] transition ease-in-out duration-500`}
        >
          <HiOutlineChatBubbleLeftEllipsis
            className={`w-5 h-5 ml-5 group transition font-medium  group dark:group-hover:text-white group-hover:text-[#000000]  duration-300 ease-in-out ${
              commentMatch
                ? "dark:text-white text-white group group-hover:text-white"
                : "text-[#899BB1] dark:text-[#E7E9EA] "
            }`}
          />
          <h2
            className={`text-[16px] font-medium transition duration-300 group dark:group-hover:text-white group-hover:text-[#000000]   ease-in-out ${
              commentMatch
                ? "text-white group group-hover:text-white"
                : "dark:text-[#E7E9EA] text-[#000000]"
            }`}
          >
            Comments
          </h2>
        </NavLink>
        <NavLink
          to={"settings"}
          onClick={() => {
            dispatch({ type: "closeSidebarMenu" });
            setActiveLink(false);
          }}
          className={` ${
            settingMatch
              ? "bg-[#6C4DE6] rounded-[10px] w-[70%]"
              : "hover:bg-[#0F14191A] dark:hover:bg-[#F7F9F916]"
          } w-[90%] group dark:group-hover:text-white flex items-center group  gap-2  py-[12px] rounded-[10px]  px-[0px] transition ease-in-out duration-500`}
        >
          <HiOutlineCog6Tooth
            className={`w-5 h-5 ml-5 group transition text-[#899BB1]  group dark:group-hover:text-white group-hover:text-[#000000] duration-300 ease-in-out ${
              settingMatch
                ? "dark:text-white text-[#FFFFFF] group group-hover:text-white"
                : "text-[#899BB1] dark:text-[#E7E9EA] "
            }`}
          />
          <h2
            className={`text-[16px] font-medium transition duration-300 group dark:group-hover:text-white group-hover:text-[#000000]  ease-in-out ${
              settingMatch
                ? "text-white group group-hover:text-white"
                : "dark:text-[#E7E9EA] text-[#000000]"
            }`}
          >
            Settings
          </h2>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileSidebarMenu;
