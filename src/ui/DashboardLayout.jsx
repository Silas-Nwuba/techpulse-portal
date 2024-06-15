import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";
import { useUser } from "../feature/authentication/useUser";
import NotFoundError from "../ui/NotFoundError";
import MobileSidebarMenu from "./MobileSidebarMenu";
import { useSidebarContext } from "../context/SidebarContext";
const DashboardLayout = () => {
  const { pathname } = useLocation();
  const mainContentRef = useRef(null);
  const { error } = useUser();
  const { sidebar } = useSidebarContext();

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [pathname]);

  if (error) {
    return <NotFoundError />;
  }
  return (
    <div className="dashboard w-full">
      <Header />
      <SideBar />
      {sidebar && <MobileSidebarMenu />}
      <main
        className="overflow-y-auto overflow-x-hidden w-full main px-5  h-full"
        ref={mainContentRef}
      >
        <Outlet />
      </main>
    </div>
  );
};
export default DashboardLayout;
