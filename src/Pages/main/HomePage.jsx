import React, { useEffect } from "react";
import Main from "../../Component/Main";
import Aside from "../../Component/Aside";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "TechPulse: Tech to the world";
    return () => {
      document.title = "TechPulse: Tech to the world";
    };
  }, []);

  return (
    <>
      <div className="mb-10 block gap-10 xl:flex mt-10">
        <div className="w-[100%] xl:w-[65%]">
          <Main />
        </div>
        <div className="w-px bg-gray-200 hidden xl:block dark:bg-[#2c2c2c] mt-10"></div>
        <div className="w-full xl:w-[35%] flex-1">
          <Aside />
        </div>
      </div>
    </>
  );
};
export default HomePage;
