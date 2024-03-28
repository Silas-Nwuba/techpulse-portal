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
  border = "border-none",
  rounded = "rounded-md",
  borderColor,
  onClick,
  loading,
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`${backgroundColor} ${width} ${border}  ${
        loading ? "cursor-wait" : "cursor-pointer"
      } ${borderColor} text-[15px] ${rounded} transition duration-300 ease-in-out focus:outline-none ${marginTop} ${hoverBorder} ${hover} p-3 ${color} font-semibold ${marginBottom}`}
    >
      {loading ? children : name}
    </button>
  );
};

export default Button;
