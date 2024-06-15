import React from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Footer from "./Footer";
const SideBar = () => {
  return (
    <div
      className={`bg-white  dark:bg-[#2D3748] shadow-sm md:z-50 z-[20000] sidebar overflow-y-auto  min-h-screen hidden w-full md:block`}
    >
      <Logo />
      <MainNav />
      <Footer>
        <span className=" absolute bottom-0 mb-3 mt-10 w-full md:w-[240px]">
          <div className="border border-stone-100 w-full md:w-[240px] dark:border-[#3b4557]"></div>
          <p className="dark:text-[#CBD5E0] text-sm text-stone-700 pt-5 mx-7">
            &copy; {new Date().getFullYear()} TechPulse. All right reserved
          </p>
        </span>
      </Footer>
    </div>
  );
};
export default SideBar;
