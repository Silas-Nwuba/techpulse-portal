import React, { useEffect, useRef, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import useOutsideClick from "../hook/useOutsideClick";

const CategoryDropdown = ({
  setOpenDropdownIndex,
  isCategoryOpen,
  setCategoryOpen,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState(
    new URLSearchParams(location.search).get("category") || ""
  );

  const iconRef = useRef(null);
  useOutsideClick(iconRef, ".dropdown-menu", () => setCategoryOpen(false));

  const handleButtonClick = () => {
    setCategoryOpen(!isCategoryOpen);
    setOpenDropdownIndex(null);
  };
  const handleOptionClick = (option) => {
    setCategory(option);
    // setCategoryOpen(false);
    setOpenDropdownIndex(null);
  };

  useEffect(() => {
    // Update URL when state changes
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    navigate({ search: params.toString() }, { replace: true });
  }, [category, navigate]);

  return (
    <div className="relative">
      <button
        ref={iconRef}
        type="buttom"
        className="border text-sm font-normal bg-[#6C4DE6] text-white  border-[#6C4DE6]  dark:text-white dark:border-[#6C4DE6] px-3 py-2 rounded-[10px] w-[110px] flex items-center gap-3"
        lassName="flex justify-between items-center w-40 border dark:border-[#172340] rounded-md py-2"
        onClick={handleButtonClick}
      >
        Category
        <HiOutlineChevronDown className="text-white group-hover:text-white text-sm dark:text-white group" />
      </button>
      {isCategoryOpen && (
        <div className="dropdown-menu bg-white border border-[#cecdcdee] dark:border-[#2c3342] z-[20000] dark:bg-[#1a2236] shadow-sm  w-[180px] rounded-md absolute top-11 py-2">
          <ul className="list-none space-y-1 text-sm cursor-pointer dark:text-white">
            <li
              onClick={() => handleOptionClick("technology")}
              className="dark:hover:bg-[#2e2d52f1] hover:bg-slate-100 p-1 px-3"
            >
              Technology
            </li>
            <li
              onClick={() => handleOptionClick("business")}
              className="dark:hover:bg-[#2e2d52f1] hover:bg-slate-100 p-1 px-3"
            >
              Business
            </li>
            <li
              onClick={() => handleOptionClick("social apps")}
              className="dark:hover:bg-[#2e2d52f1] hover:bg-slate-100 p-1 px-3"
            >
              Social Apps
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default CategoryDropdown;
