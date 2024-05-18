import React from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Footer from "./Footer";

const SideBar = ({ sidebarOpen, setIsSidebarOpen }) => {
  const visible = sidebarOpen;
  let display = "hidden";
  if (visible) {
    display = "block fixed top-0";
  }
  return (
    <div
      className={`bg-white dark:bg-[#2D3748] shadow-sm md:z-50 z-[10000] sidebar overflow-y-auto  min-h-[100vh] ${display} w-full md:block`}
    >
      <Logo setIsSidebarOpen={setIsSidebarOpen} />
      <MainNav setIsSidebarOpen={setIsSidebarOpen} />
      <Footer>
        <span className="relative top-[3rem] left-0 mb-3 md:top-[5rem] md:left-0">
          <div className="border border-stone-100 w-full"></div>
          <p className="dark:text-[#CBD5E0] text-sm text-stone-700 mx-10 pt-5">
            &copy; {new Date().getFullYear()} TechPulse
          </p>
        </span>
      </Footer>
    </div>
  );
};
export default SideBar;
