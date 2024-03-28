import React from "react";
import Advert from "./Advert";
import Footer from "./Footer";
import Narbar from "./Narbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-grow">
          <header className="item-center bg-sky-700 px-5 py-4  md:px-20">
            <Advert />
          </header>
          <Narbar />
          <main className="w-[95%] md:w-[90%] mx-3 flex flex-col justify-center ml-auto mr-auto mt-10 mb-10">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
