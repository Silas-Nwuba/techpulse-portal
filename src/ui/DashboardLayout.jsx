import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";
const DashboardLayout = () => {
  const { pathname } = useLocation();
  const mainContentRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [pathname]);
  return (
    <div className="dashboard w-full">
      <Header setSidebarOpen={setIsSidebarOpen} />
      <SideBar
        sidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main
        className="overflow-y-auto overflow-x-hidden w-full main px-5 bg-gray-50 dark:bg-[#1A202C]"
        ref={mainContentRef}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
