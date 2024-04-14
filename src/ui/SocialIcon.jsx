import React from "react";
import {
  RiFacebookCircleFill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "react-icons/ri";

const SocialIcon = () => {
  return (
    <span className="hidden cursor-pointer items-center gap-5 md:flex">
      <RiFacebookCircleFill className="text-stone-100 hover:text-sky-400 transition-all duration-200" />
      <RiTwitterXFill className="text-stone-100 hover:text-sky-400 transition-all duration-200" />
      <RiWhatsappFill className="text-stone-100 hover:text-sky-400 transition-all duration-200" />
    </span>
  );
};

export default SocialIcon;
