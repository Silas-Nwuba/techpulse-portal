import React from "react";
import { HiMiniEnvelope } from "react-icons/hi2";
import { RiPhoneFill } from "react-icons/ri";
const Advert = () => {
  return (
    <div className="block pb-4 sm:pb-0 sm:flex items-center justify-center text-sm leading-7  text-stone-100">
      <h3 className="text-center tracking-widest">Advert enquire:</h3>
      <span className="flex items-center justify-center">
        <HiMiniEnvelope className="ml-2 mr-1" />
        <p className="tracking-widest"> nwubasilas@yahoo.com</p>
      </span>
      <span className="flex items-center justify-center">
        <RiPhoneFill className="ml-2 mr-1" />
        <p className="tracking-widest">+234-0921576961</p>
      </span>
    </div>
  );
};

export default Advert;
