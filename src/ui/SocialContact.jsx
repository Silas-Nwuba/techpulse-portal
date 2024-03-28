import React from "react";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "react-icons/ri";

const SocialContact = () => {
  return (
    <div className="bg-white mt-5 py-3 px-3 shadow-sm rounded-md">
      <h2 className="text-stone-600 font-semibold text-xl">Follow Us</h2>
      <div className="grid grid-cols-4 gap-5 mt-4 mb-4 cursor-pointer ">
        <div className="bg-sky-700 py-2 rounded-md hover:bg-sky-800 hover:transition-all hover:duration-200">
          <RiFacebookFill className="text-stone-50 text-xl text-center mx-auto font-bold" />
        </div>
        <div className="bg-sky-500 py-2 rounded-md hover:bg-sky-600 hover:transition-all hover:duration-200">
          <RiTwitterXFill className="text-stone-50 text-xl text-center mx-auto font-bold" />
        </div>
        <div className="bg-[#1c791c] py-2 rounded-md hover:bg-[#43c043] hover:transition-all hover:duration-200">
          <RiWhatsappFill className=" text-stone-50 text-xl text-center mx-auto font-bold" />
        </div>
        <div className="bg-red-600 py-2 rounded-md hover:bg-red-500 hover:transition-all hover:duration-200">
          <RiYoutubeFill className=" text-stone-50 text-xl text-center mx-auto font-bold" />
        </div>
      </div>
    </div>
  );
};

export default SocialContact;
