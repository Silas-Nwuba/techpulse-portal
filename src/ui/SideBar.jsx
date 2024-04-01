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
      className={`bg-white dark:bg-[#2D3748] shadow-sm md:z-50 z-[10000] sidebar min-h-[100vh] ${display} w-full md:block`}
    >
      <Logo sidebarOpen={sidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <MainNav setIsSidebarOpen={setIsSidebarOpen} />
      {/* <Footer>
        <p className="dark:text-[#CBD5E0] text-sm text-stone-700 mx-10 fixed bottom-3">
          &copy; {new Date().getFullYear()} TechPulse
        </p>
      </Footer> */}
    </div>
  );
};
export default SideBar;
