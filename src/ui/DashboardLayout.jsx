import React, { useEffect, useRef } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";
import { useUser } from "../feature/authentication/useUser";
import NotFoundError from "../ui/NotFoundError";
import MobileSidebarMenu from "./MobileSidebarMenu";
import { useSidebarContext } from "../context/SidebarContext";
import { OverLay } from "./OverLay";
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
    <div>
      <SideBar />
      <div>
        <Header />
        {sidebar && (
          <OverLay>
            <MobileSidebarMenu />
          </OverLay>
        )}

        <main
          className="overflow-y-auto overflow-x-hidden w-full xl:px-10 dark:bg-[#070d19]  xs:ml-2  md:mt-20 xl:ml-[200px]  flex flex-col min-h-screen"
          ref={mainContentRef}
        >
          <Outlet />
        </main>
        <footer className="dark:border-t-[#172340] border-t-[#e6e2e2ee] py-3 mt-14 border border-b-0 border-l-0 border-r-0 w-full">
          <p className="dark:text-[#d0d6e1] text-[14px] xl:ml-[280px] ml-5">
            Copyright {new Date().getFullYear()} TekMatas
          </p>
        </footer>
      </div>
    </div>
  );
};
export default DashboardLayout;
