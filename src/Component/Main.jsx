import React from "react";
import Technology from "./Technology";
import Business from "./Business";
import Smartphone from "./Smartphone";
import Gadget from "./Gadget";
import HorizontalAd from "../ui/HorizontalAd";

const Main = () => {
  return (
    <>
      <Technology />
      <Business />
      <Smartphone />
      <Gadget />
      <HorizontalAd marginTop={"mt-[40px]"} backgroundColor={"bg-slate-50"} />
    </>
  );
};

export default Main;
