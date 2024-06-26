import React from "react";
import {
  HiOutlineHome,
  HiOutlineChatBubbleLeft,
  HiOutlineCog6Tooth,
  HiOutlinePencilSquare,
} from "react-icons/hi2";
import { AiOutlineDashboard } from "react-icons/ai";
import { NavLink, useMatch } from "react-router-dom";

const MainNav = () => {
  const dashboardMatch = useMatch("/dashboard");
  const homeMatch = useMatch("/");
  const postMatch = useMatch("post");
  const commentMatch = useMatch("comment");
  const settingMatch = useMatch("settings");
  return (
    <div className="mx-5 py-5 mt-3 space-y-10 text-[15px] navLink">
      <NavLink
        to={"dashboard"}
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
  );
};
export default MainNav;
