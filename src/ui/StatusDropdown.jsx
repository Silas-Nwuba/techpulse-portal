import React, { useEffect, useRef, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import useOutsideClick from "../hook/useOutsideClick";

const StatusDropdown = ({
  setOpenDropdownIndex,
  isStatusOpen,
  setStatusOpen,
  children,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState(
    new URLSearchParams(location.search).get("status") || ""
  );
  const iconRef = useRef(null);
  useOutsideClick(iconRef, ".dropdown-menu", () => setStatusOpen(false));

  const handleButtonClick = () => {
    setStatusOpen(!isStatusOpen);
    setOpenDropdownIndex(null);
  };
  const handleOptionClick = (option) => {
    setStatus(option);
    setStatusOpen(false);
    setOpenDropdownIndex(null);
  };
  useEffect(() => {
    const params = new URLSearchParams();
    if (status) {
      params.set("status", status);
    }
    navigate({ search: params.toString() }, { replace: true });
  }, [status, navigate]);

  return (
    <div className="relative">
      <button
        ref={iconRef}
        type="buttom"
        className="border text-sm font-normal dark:text-[#d0d6e1] border-[#d0d6e1] text-[#000000] dark:border-[#201f33] px-4 py-2 rounded-[10px] flex justify-between items-center gap-3"
        lassName="flex justify-between items-center w-40 border dark:border-[#172340] rounded-md py-2 "
        onClick={handleButtonClick}
      >
        All Status
        <HiOutlineChevronDown className="text-[#000000] group-hover:text-white text-sm dark:text-white" />
      </button>
      {isStatusOpen && (
        <div className="dropdown-menu bg-white border border-[#cecdcdee] dark:border-[#2c3342] z-[20000] dark:bg-[#1a2236] shadow-sm w-[130px] rounded-md absolute top-11 py-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
