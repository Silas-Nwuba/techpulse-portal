import React from "react";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { PiSignOutBold } from "react-icons/pi";
import { useUser } from "../feature/authentication/useUser";
import useLogout from "../feature/authentication/useLogout";
import MiniLoaderSpinner from "./MiniLoaderSpinner";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const { user, isLoading } = useUser();
  const { logout, isLogout } = useLogout();
  if (isLoading)
    return (
      <div className="bg-white dark:bg-[#2D3748] border-4 w-[250px] shadow-xl rounded-md py-3 flex flex-col justify-start mr-10 z-[10000] ml-5 absolute right-0 top-[4.5rem] border-t-4 border-[#007bff] ">
        <MiniLoaderSpinner
          borderRight="border-r-[#007bff]"
          borderTop="border-t-[#007bff]"
        />
      </div>
    );
  return (
    <div className="bg-white dark:bg-[#2D3748] transition -translate-y-2 border-t-4 border-t-[#007bff] dark:border-t dark:border-t-[#2D3748] shadow-xl rounded-md py-3 px-1 sm:px-0 flex flex-col justify-start mr-4  sm:mr-10 z-[10000] ml-5 absolute right-0 top-[4.5rem]  border-[#007bff] dark:border-[#CBD5E0]">
      <div className="flex items-center justify-center gap-3 divide divide-stone-400 px-6  ">
        <span className="flex-shrink-0">
          <img
            src={user.user_metadata.avater}
            alt={user.user_metadata.fullname}
            className="w-[40px] h-[40px] rounded-full"
          />
        </span>
        <span>
          <h2 className="text-stone-700 font-semibold text-[14px] dark:text-[#CBD5E0]">
            {user.user_metadata.role}
          </h2>
          <p className="text-sm text-[#333333] dark:text-[#CBD5E0]">
            {user.email}
          </p>
        </span>
      </div>
      <div className="border border-stone-100 mt-2 dark:border-[#4A5568]"></div>
      <ul className="py-2 space-y-2 mt-2 ">
        <Link
          to={"/admin/settings"}
          className="flex items-center gap-2 text-[#333333] dark:text-[#CBD5E0] group cursor-pointer mx-2 rounded-md hover:bg-slate-50 dark:hover:bg-[#4A5568] font-medium group-hover:text-stone-500 py-2 px-6 hover:transition-all hover:duration-150 hover:ease-in-out"
        >
          <HiOutlineCog8Tooth className="font-semibold text-xl text-stone-500 dark:text-[#CBD5E0] group-hover:text-stone-400 dark:group-hover:text-[#CBD5E0]" />
          <li className="text-sm group-hover:text-stone-500 dark:group-hover:text-[#CBD5E0]">
            Settings
          </li>
        </Link>
        <span
          className={`flex items-center gap-2 group mx-2 rounded-md hover:bg-slate-50 dark:hover:bg-[#4A5568] py-2 dark:group-hover:bg-[#4A5568] focus:bg-slate-50 dark:focus:bg-[#4A5568]  ${
            isLogout ? "cursor-wait" : "cursor-pointer"
          } font-medium px-6 hover:transition-all hover:duration-150 hover:ease-in-out`}
          onClick={logout}
        >
          {isLogout ? (
            <MiniLoaderSpinner
              borderRight="border-r-[#007bff]"
              borderTop="border-t-[#007bff]"
            />
          ) : (
            <>
              <PiSignOutBold className="font-semibold text-red-500 text-xl group-hover:text-red-500" />
              <li className=" text-red-500 text-sm group-hover:text-red">
                Logout
              </li>
            </>
          )}
        </span>
      </ul>
    </div>
  );
};

export default UserDropdown;
