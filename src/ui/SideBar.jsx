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
      className={`bg-white dark:bg-[#2D3748] shadow-sm md:z-50 z-[10000] sidebar overflow-y-auto  min-h-screen  ${display} w-full md:block`}
    >
      <Logo setIsSidebarOpen={setIsSidebarOpen} />
      <MainNav setIsSidebarOpen={setIsSidebarOpen} />
      <Footer>
        <span className=" absolute bottom-0 mb-3 mt-10 w-full">
          <div className="border border-stone-100 w-full"></div>
          <p className="dark:text-[#CBD5E0] text-sm text-stone-700 pt-5 mx-7">
            &copy; {new Date().getFullYear()} TechPulse.
          </p>
        </span>
      </Footer>
    </div>
  );
};
export default SideBar;
