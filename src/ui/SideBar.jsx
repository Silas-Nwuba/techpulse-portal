import React from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
const SideBar = () => {
  return (
    <div
      className={`bg-white dark:bg-[#0c1427] border-r dark:border-r-[#172340]  sidebar  md:z-50 z-[20000] overflow-y-auto  min-h-screen hidden w-[250px] md:block`}
    >
      <Logo />
      <MainNav />
    </div>
  );
};
export default SideBar;
