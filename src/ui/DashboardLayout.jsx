import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import { useUserDropdown } from "../context/UserDropdownContextApi";
const DashboardLayout = () => {
  const { isUserDropdown } = useUserDropdown();
  const { pathname } = useLocation();
  const mainContentRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [pathname]);
  return (
    <div className="dashboard relative w-full h-screen">
      <Header setSidebarOpen={setIsSidebarOpen} />
      {isUserDropdown && <UserDropdown />}
      <SideBar
        sidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main
        className="overflow-y-auto overflow-x-hidden w-full main px-5 bg-gray-50 main h-full"
        ref={mainContentRef}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
