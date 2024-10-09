import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Avatar from "./Avatar";
import { HiOutlineBars3, HiOutlineBell } from "react-icons/hi2";
import { useSidebarContext } from "../context/SidebarContext";
import { useUser } from "../feature/authentication/useUser";
import useLogout from "../feature/authentication/useLogout";
const Header = () => {
  const { user, isLoading } = useUser();
  const { dispatch } = useSidebarContext();
  const { logout } = useLogout();
  const handleMobileSidebar = () => {
    dispatch({ type: "openSidebarMenu", payload: true });
    document.documentElement.style.overflowY = "hidden";
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="bg-white dark:bg-[#0c1427]  border-b-[#f0ececee] border border-l-0 border-t-0 border-r-0 dark:border-b dark:border-b-[#172340]  p-4 flex  justify-between items-center px-2  z-[9999] md:z-50  fixed top-0 md:px-5 w-[calc(100%-250px)]  ml-[250px]">
      <div className="flex items-center gap-4">
        <div
          className="flex items-center gap-6 bg-gray-300 rounded-full w-[37px] h-[37px] hover:bg-slate-200 md:hidden  ml-2 dark:bg-[#2D3748]"
          onClick={handleMobileSidebar}
        >
          <HiOutlineBars3 className="text-[24px] w-20 cursor-pointer font-semibold dark:text-[#E2E8F0]" />
        </div>
        <span className="leading-4">
          {!isLoading && (
            <h2 className="dark:text-[#E7E9EA] text-[18px] text-[#495057] font-medium ">
              Welcome back <span>{user.user_metadata.fullname}</span>
            </h2>
          )}
        </span>
      </div>
      <div className="flex items-center gap-5 mr-3 md:mr-4">
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <div className="dark:hover:bg-[#2D3748] hover:bg-slate-50 rounded-full relative w-[35px] h-[30px] flex flex-col justify-center items-center cursor-pointer">
            <HiOutlineBell className="text-2xl dark:text-[#E7E9EA] text-[#899BB1]" />
            <span className="bg-[#6C4DE6] text-white dark:text-[#00000] font-normal rounded-full px-[5px] text-[12px] absolute top-0 left-5">
              3
            </span>
          </div>
          <div
            onClick={handleLogout}
            className="ml-2 dark:hover:bg-[#2D3748] hover:bg-slate-50 rounded-full w-[35px] h-[35px] flex flex-col justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 dark:text-[#E7E9EA] text-[#899BB1]"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
};
export default Header;
