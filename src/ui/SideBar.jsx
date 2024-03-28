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
      className={`bg-white shadow-sm md:z-50 z-[10000] sidebar h-screen w-full ${display} md:block`}
    >
      <Logo sidebarOpen={sidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <MainNav sidebarOpen={sidebarOpen} />
      <Footer>
        <footer className="mx-10 absolute bottom-3">
          <p className="text-stone-600 text-sm">
            &copy; {new Date().getFullYear()} TechPulse
          </p>
        </footer>
      </Footer>
    </div>
  );
};

export default SideBar;
