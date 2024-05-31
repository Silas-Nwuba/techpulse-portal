import React from "react";
import Technology from "./Technology";
import Business from "./Business";
import Smartphone from "./Smartphone";
import Gadget from "./Gadget";

const Main = () => {
  return (
    <>
      <Technology />
      <Business />
      <Smartphone />
      <Gadget />
      <img
        src="\image\ad728.jpg"
        alt="advert"
        className="m-auto w-full mt-20 mb-10"
      />
    </>
  );
};

export default Main;
