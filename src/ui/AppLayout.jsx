import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Menu from "../Component/Menu";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import HeaderAdvert from "../Component/HeaderAdvert";
import { HiChevronDown } from "react-icons/hi2";
import MenuSidebar from "../Component/MenuSidebar";
import useGetAllComment from "../feature/comment/useGetAllComment";
import NotFoundError from "./NotFoundError";
const AppLayout = () => {
  const { error } = useGetAllComment();
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);
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
      <header className="item-center px-4 py-4 lg:px-10 flex justify-between">
        <nav>
          <ul className="flex gap-4 text-stone-500 text-[13px] font-medium">
            <li
              className="hover:text-[#007bff] transition-all flex items-center gap-1"
              onClick={handleNavigation}
            >
              <Link>Home</Link>
              <HiChevronDown className="mt-1 block lg:hidden" />
            </li>
            <li className="hover:text-[#007bff] transition-all hidden lg:block">
              <Link>About</Link>
            </li>
            <li className="hover:text-[#007bff] transition-all hidden lg:block">
              <Link>Contact</Link>
            </li>
            <li className="hover:text-[#007bff] transition-all hidden lg:block">
              <Link>Advertise with us</Link>
            </li>
          </ul>
          {showNav && (
            <div className="bg-stone-600 shadow-sm py-3 z-[60000] px-5 mt-2 absolute transition-all duration-300 ease-in-out  block  xl:hidden">
              <nav>
                <ul className="block text-white text-[13px] font-medium space-y-5">
                  <li className="hover:text-[#007bff] transition-all">
                    <Link>Home</Link>
                  </li>
                  <li className="hover:text-[#007bff] transition-all">
                    <Link>About</Link>
                  </li>
                  <li className="hover:text-[#007bff] transition-all">
                    <Link>Contact</Link>
                  </li>
                  <li className="hover:text-[#007bff] transition-all">
                    <Link>Advertise with us</Link>
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
                <FaFacebookSquare className="text-sky-600 transition-all duration-200 text-2xl" />
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
      <HeaderAdvert />
      <main className="w-[95%] md:w-[95%] mx-auto mt-10 mb-10 min-h-screen">
        <Outlet />
      </main>
      <Footer>
        <footer className="bg-sky-600 w-full  mt-0 py-3 text-sm text-center  text-slate-50 font-normal">
          &copy; {new Date().getFullYear()} TechPulse All right reserved
        </footer>
      </Footer>
    </div>
  );
};
export default AppLayout;
