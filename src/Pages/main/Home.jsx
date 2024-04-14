import React, { useEffect } from "react";
import LastestPost from "../../ui/LastestPost";
import Aside from "../../ui/Aside";
const Home = () => {
  useEffect(() => {
    document.title = "TechPulse - Tech to the world";
    return () => {
      document.title = "TechPulse - Tech to the world";
    };
  }, []);
  return (
    <>
      <div className="w-90 rounded-md py-3 px-3">
        <img src="image\advertImage1.jpg" alt="advert" className="m-auto" />
      </div>

      <div className="mb-10 mt-10 grid grid-cols-1 xl:flex xl:justify-between xl:gap-10">
        <LastestPost />
        <Aside />
      </div>
    </>
  );
};

export default Home;
