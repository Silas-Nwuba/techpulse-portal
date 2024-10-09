import React, { useEffect, useRef, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import useOutsideClick from "../hook/useOutsideClick";

const StatusDropdown = ({
  setOpenDropdownIndex,
  isStatusOpen,
  setStatusOpen,
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
        className="border text-sm font-normal border-[#6C4DE6] bg-[#6C4DE6]  text-white dark:text-white dark:border-[#6C4DE6] px-4 py-2 rounded-[10px]  flex justify-between items-center gap-3"
        lassName="flex justify-between items-center w-40 border dark:border-[#172340] rounded-md py-2 "
        onClick={handleButtonClick}
      >
        All Status
        <HiOutlineChevronDown className="text-white group-hover:text-white text-sm dark:text-white" />
      </button>
      {isStatusOpen && (
        <div className="dropdown-menu bg-white border border-[#cecdcdee] dark:border-[#2c3342] z-[20000] dark:bg-[#1a2236] shadow-sm w-[130px] rounded-md absolute top-11 py-2">
          <ul className="list-none space-y-1 text-sm cursor-pointer dark:text-white">
            <li
              onClick={() => handleOptionClick("approved")}
              className="dark:hover:bg-[#2e2d52f1] hover:bg-slate-100 p-1 px-3"
            >
              Approved
            </li>
            <li
              onClick={() => handleOptionClick("pending")}
              className="dark:hover:bg-[#2e2d52f1] hover:bg-slate-100 p-1 px-3"
            >
              Pending
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
