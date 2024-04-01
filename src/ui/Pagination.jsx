import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { Page_Size } from "../utils/constant";
const Pagination = ({ count }) => {
  const [searchParam, setSearchParam] = useSearchParams();

  let currentPage = !searchParam.get("page")
    ? 1
    : Number(searchParam.get("page"));
  const pageCount = Math.ceil(count / Page_Size);

  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParam.set("page", next);
    setSearchParam(searchParam);
  };
  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParam.set("page", prev);
    setSearchParam(searchParam);
  };
  return (
    <>
      {count > Page_Size && (
        <div className="mt-10 flex justify-between items-center mx-3 flex-wrap">
          <p className="text-sm text-stone-600 dark:text-white">
            Showing
            <span>
              {" "}
              {(currentPage - 1) * Page_Size} to{" "}
              {currentPage === pageCount ? count : currentPage * Page_Size}
            </span>
            <span> of {count}</span>
          </p>
          <div className="flex gap-3 items-center cursor-pointer justify-center ">
            <button
              className="disabled:cursor-default  dark:text-white dark:hover:text-sky-600 flex items-center text-sm transition duration-300 ease-out  hover:text-sky-600 text-stone-600 py-2 pr-3 pl-2 font-semibold rounded-md"
              onClick={prevPage}
            >
              <HiChevronLeft className="text-[16px]" />
              Previous
            </button>
            <button
              className="flex items-center justify-around text-sm   text-sky-600 hover:text-sky-600 py-2 pr-4 pl-4 font-semibold rounded-md"
              onClick={nextPage}
            >
              Next
              <HiChevronRight className="text-[16px]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
