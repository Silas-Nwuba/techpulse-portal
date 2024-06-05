import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Menu from "../Component/Menu";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link, NavLink, Outlet, useMatch } from "react-router-dom";
import HeaderAdvert from "../Component/HeaderAdvert";
import { HiChevronDown } from "react-icons/hi2";
import MenuSidebar from "../Component/MenuSidebar";
import useGetAllComment from "../feature/comment/useGetAllComment";
import NotFoundError from "./NotFoundError";
import HorizontalAd from "./HorizontalAd";
const AppLayout = () => {
  const { error } = useGetAllComment();
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const homeMatch = useMatch("/home");
  const aboutMatch = useMatch("/about");
  const contactMatch = useMatch("/contact");
  const advertMatch = useMatch("/advert");

  const handleNavigation = () => {
    setShowNav((open) => !open);
    if (showMenu) setShowNav(false);
  };
  const handleShowMenu = () => {
    setShowMenu(true);
    if (!showMenu) setShowNav(false);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
    if (showMenu) setShowNav(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return <NotFoundError />;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="item-center px-4 py-4 lg:px-10 flex justify-between dark:bg-[#000000]">
        <nav>
          <ul className="flex gap-4 text-stone-500 dark:text-[#e0e0e0] text-[13px] font-medium">
            <li
              className={`hover:text-[#007bff]  dark:hover:text-[#eeeeee] transition-all flex items-center gap-1 ${
                homeMatch
                  ? "text-[#1e88e5] font-semibold dark:text-[#1e88e5]"
                  : ""
              }`}
              onClick={handleNavigation}
            >
              <NavLink to={"/"}>Home</NavLink>
              <HiChevronDown className="mt-1 block lg:hidden" />
            </li>
            <li
              className={`hover:text-[#007bff] dark:hover:text-[#eeeeee] transition-all hidden lg:block ${
                aboutMatch
                  ? "text-[#1e88e5] font-semibold dark:text-[#1e88e5]"
                  : ""
              }`}
            >
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li
              className={`hover:text-[#007bff] dark:hover:text-[#eeeeee] transition-all hidden lg:block ${
                contactMatch
                  ? "text-[#1e88e5] font-semibold dark:text-[#1e88e5]"
                  : ""
              }`}
            >
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li
              className={`hover:text-[#007bff] dark:hover:text-[#eeeeee] transition-all hidden lg:block ${
                advertMatch
                  ? "text-[#1e88e5] font-semibold dark:text-[#1e88e5]"
                  : ""
              }`}
            >
              <NavLink to={"/advert"}>Advertise with us</NavLink>
            </li>
          </ul>
          {showNav && (
            <div className="bg-stone-600 shadow-sm py-3 z-[60000] px-5 mt-2 absolute transition-all duration-300 ease-in-out  block  xl:hidden">
              <nav>
                <ul className="block text-white text-[13px] font-medium space-y-5">
                  <li className="hover:text-[#007bff] transition-all">
                    <NavLink>Home</NavLink>
                  </li>
                  <li className="hover:text-[#007bff] transition-all">
                    <NavLink>About</NavLink>
                  </li>
                  <li className="hover:text-[#007bff] transition-all">
                    <NavLink>Contact</NavLink>
                  </li>
                  <li className="hover:text-[#007bff] transition-all">
                    <NavLink>Advertise with us</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </nav>
        <span>
          <ul className="flex gap-2 md:gap-3 cursor-pointer">
            <li>
              <Link>
                <FaFacebookSquare className="text-sky-600   transition-all duration-200 text-2xl" />
              </Link>
            </li>
            <li>
              <FaTwitterSquare className="text-sky-500 transition-all duration-200 text-2xl" />
            </li>
            <li>
              <FaWhatsappSquare className="text-green-600 transition-all duration-200 text-2xl" />
            </li>
            <li>
              <FaGooglePlusSquare className="text-red-600 transition-all duration-200 text-2xl" />
            </li>
          </ul>
        </span>
      </header>
      <Menu
        handleShowMenu={handleShowMenu}
        handleCloseMenu={handleCloseMenu}
        showMenu={showMenu}
        showNav={showNav}
      />

      {showMenu && <MenuSidebar setShowMenu={setShowMenu} />}
      <div className="bg-slate-50 dark:bg-[#2c2c2c] w-full py-10 px-3">
        <HorizontalAd />
      </div>
      <main className="w-[95%] md:w-[95%] mx-auto mt-10 mb-10">
        <Outlet />
      </main>
      <Footer>
        <footer className="bg-sky-600 w-full dark:bg-[#1e1e1e]  dark:text-[#e0e0e0] mt-0 py-3 text-sm text-center  text-slate-50 font-normal">
          &copy; {new Date().getFullYear()} TechPulse All right reserved
        </footer>
      </Footer>
    </div>
  );
};
export default AppLayout;
