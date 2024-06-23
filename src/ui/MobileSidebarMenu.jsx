import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  HiOutlineChatBubbleLeft,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { NavLink, useMatch } from "react-router-dom";
import Logo from "./Logo";
import Footer from "./Footer";
import { useSidebarContext } from "../context/SidebarContext";

const MobileSidebarMenu = () => {
  const dashboardMatch = useMatch("/dashboard");
  const homeMatch = useMatch("/");
  const postMatch = useMatch("post");
  const commentMatch = useMatch("comment");
  const settingMatch = useMatch("settings");
  const { dispatch } = useSidebarContext();
  const handleCloseSidebar = () => {
    dispatch({ type: "closeSidebarMenu" });
    document.documentElement.style.overflowY = "auto";
  };
  return (
    <div className="bg-white fixed top-0 h-screen  min-h-screen dark:bg-[#2D3748] shadow-sm md:z-50 z-[20000] w-full md:block">
      <Logo
        textAlign="text-left"
        display="flex"
        showIcon="block"
        padding="py-3"
      />
      <div className="border border-stone-100 w-full dark:border-[#3b4557] mb-4"></div>
      <div className="mx-5 mt-10 py-2 space-y-10 text-[15px] navLink ">
        <NavLink
          to={"dashboard"}
          onClick={handleCloseSidebar}
          className={`flex items-center gap-4 w-full py-[10px] dark:hover:bg-#4a5568]   ${
            dashboardMatch ? "bg-stone-100 rounded-md font-medium" : ""
          }  dark:${
            dashboardMatch ? "bg-[#4A5568]" : ""
          } dark:focus:text-[#ffff] text-stone px-[0px] group hover:bg-stone-50  dark:hover:bg-[#4A5568]  hover:rounded-md hover:w-full transition ease-in-out duration-30`}
        >
          <AiOutlineDashboard
            className={`text-xl ml-5 group group-hover:text-[#007bff] dark:group-hover:text-[#007bff] dark:${
              dashboardMatch ? "text-[#007bff]" : "text-[#CBD5E0]"
            } ${dashboardMatch ? "text-[#007bff]" : "text-stone-600"}`}
          />
          <h3
            className={`group group-hover:text-stone-500  dark:${
              dashboardMatch ? "text-white" : ""
            } dark:group-hover:text-white text-stone-700  dark:text-[#CBD5E0]`}
          >
            Dashboard
          </h3>
        </NavLink>
        <NavLink
          to={"/"}
          onClick={handleCloseSidebar}
          className={`flex items-center gap-4 w-full py-[10px] ${
            homeMatch ? "bg-stone-100  font-medium rounded-md" : ""
          }  dark:${
            homeMatch ? "bg-[#4A5568]" : ""
          } dark:focus:text-[#ffff] text-stone px-[0px] group hover:bg-slate-50  dark:hover:bg-[#4A5568]  hover:rounded-md hover:w-full transition ease-in-out duration-30`}
        >
          <HiOutlineHome
            className={`text-xl ml-5 group group-hover:text-[#007bff] dark:${
              homeMatch ? "text-[#007bff]" : "text-[#CBD5E0]"
            } ${homeMatch ? "text-[#007bff]" : "text-stone-600"}`}
          />
          <h3
            className={`group group-hover:text-stone-500  dark:${
              homeMatch ? "text-white" : ""
            } text-stone-700  dark:group-hover:text-white dark:text-[#CBD5E0]`}
          >
            Home
          </h3>
        </NavLink>
        <NavLink
          to={"post"}
          onClick={handleCloseSidebar}
          className={`flex items-center gap-4 w-full py-[10px] ${
            postMatch ? "bg-stone-100 font-medium rounded-md" : ""
          }  dark:${
            postMatch ? "bg-[#4A5568]" : ""
          }  text-stone-700 px-[0px] group hover:bg-slate-50 dark:hover:bg-[#4A5568]  hover:rounded-md hover:w-full transition ease-in-out duration-30`}
        >
          <HiOutlinePencilSquare
            className={`text-xl ml-5 group group-hover:text-[#007bff]   dark:${
              postMatch ? "text-[#007bff]" : "text-[#CBD5E0]"
            }  ${postMatch ? "text-[#007bff]" : "text-stone-600"}`}
          />

          <h3
            className={`group group-hover:text-stone-500 dark:${
              postMatch ? "text-white" : ""
            }  text-stone-700 dark:group-hover:text-white dark:text-[#CBD5E0]`}
          >
            Post
          </h3>
        </NavLink>

        <NavLink
          to={"comment"}
          onClick={handleCloseSidebar}
          className={`flex items-center gap-4 w-full py-[10px] ${
            commentMatch ? "bg-stone-100 font-medium rounded-md" : ""
          }  dark:${
            commentMatch ? "bg-[#4A5568]" : ""
          }  text-stone px-[0px] group hover:bg-slate-50  dark:hover:bg-[#4A5568] dark: hover:rounded-md hover:w-full transition ease-in-out duration-30`}
        >
          <HiOutlineChatBubbleLeft
            className={`text-xl ml-5 group group-hover:text-[#007bff]  dark:${
              commentMatch ? "text-[#007bff]" : "text-[#CBD5E0]"
            }  ${commentMatch ? "text-[#007bff]" : "text-stone-600 "}`}
          />
          <h3
            className={`group group-hover:text-stone-500 text-stone-700  dark:${
              commentMatch ? "text-white" : ""
            } dark:group-hover:text-white dark:text-[#CBD5E0]`}
          >
            Comment
          </h3>
        </NavLink>
        <NavLink
          to={"settings"}
          onClick={handleCloseSidebar}
          className={`flex items-center gap-4 w-full py-[10px] ${
            settingMatch ? "bg-stone-100 font-medium rounded-md" : ""
          }  dark:${
            settingMatch ? "bg-[#4A5568]" : ""
          }  text-stone px-[0px] group hover:bg-slate-50  dark:hover:bg-[#4A5568]  hover:rounded-md hover:w-full transition ease-in-out duration-30`}
        >
          <HiOutlineCog6Tooth
            className={`text-xl ml-5 group group-hover:text-[#007bff]  dark:${
              settingMatch ? "text-[#007bff]" : "text-[#CBD5E0]"
            }  ${settingMatch ? "text-[#007bff]" : "text-stone-600"}`}
          />
          <h3
            className={`group group-hover:text-stone-500 dark:group-hover:text-white dark:${
              settingMatch ? "text-white" : ""
            } text-stone-700  dark:text-[#CBD5E0]`}
          >
            Settings
          </h3>
        </NavLink>
      </div>
      <Footer>
        <span className="mb-3 mt-40 w-full absolute bottom-0 ">
          <div className="border border-stone-100 w-full dark:border-[#3b4557]"></div>
          <p className="dark:text-[#CBD5E0] text-sm text-stone-700 pt-5 mx-7">
            &copy; {new Date().getFullYear()} TechPulse. All right reserved
          </p>
        </span>
      </Footer>
    </div>
  );
};

export default MobileSidebarMenu;
