import React from "react";
const Button = ({
  children,
  name,
  backgroundColor = "bg-[#007bff]",
  width,
  hover = "hover:bg-sky-500",
  hoverBorder = "hover:border-sky-700",
  color = "text-white",
  marginBottom = "mb-10",
  marginTop = "mt-4",
  border = "border",
  rounded = "rounded-md",
  borderColor,
  onClick,
  loading,
  darkMode,
  padding = "p-[10px]",
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`${backgroundColor} ${width} ${border}  ${
        loading ? "cursor-wait" : "cursor-pointer"
      } ${borderColor} text-[14px] ${rounded}  dark:${darkMode} transition duration-300 ease-in-out focus:outline-none ${marginTop} ${hoverBorder} ${hover} ${padding} ${color} font-medium  ${marginBottom}`}
    >
      {loading ? "Loading.." : name}
    </button>
  );
};

export default Button;
