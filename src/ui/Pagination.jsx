import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
const Pagination = ({
  currentPage,
  setCurrentPage,
  data,
  searchErrorMessage,
  isLoading,
}) => {
  const recordPerPage = 10;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const nPage = Math.ceil(
    data?.length !== undefined && data?.length / recordPerPage
  );
  const number = [...Array(nPage + 1).keys()].slice(1);
  const handlePrevious = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const handleChange = (id) => {
    setCurrentPage(id);
  };
  const handleNext = () => {
    if (currentPage !== nPage) setCurrentPage(currentPage + 1);
    console.log(number);
  };
  return (
    <>
      {data?.length > 5 && !searchErrorMessage && !isLoading && (
        <div className="mt-5 text-white ml-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[14px] font-medium text-[#8891A0] dark:text-[#b1b6c0]">
              Showing {firstIndex} to{" "}
              {lastIndex >= data?.length ? data?.length : lastIndex} of
              {data?.length} entries
            </h2>
            <div className="flex items-center gap-4 mr-3">
              <span
                className="border border-stone-300 dark:border-[#6C4DE6] cursor-pointer  rounded-lg p-2"
                onClick={handlePrevious}
              >
                <HiOutlineChevronLeft className="text-[#6C4DE6] text-lg dark:text-[#6C4DE6]" />
              </span>
              <ul className="flex items-center gap-3 cursor-pointer">
                {number.map((n, i) => (
                  <li
                    key={i}
                    className={`${
                      currentPage === n
                        ? "bg-[#6C4DE6] border-none  hover:bg-[#6C4DE6] transition duration-300 ease-in-out text-sm rounded-lg py-2 px-4 text-white hover:text-white font-medium"
                        : "border border-stone-300 dark:border-[#6C4DE6]  text-stone-800 dark:text-[#6C4DE6] dark:hover:text-white text-sm rounded-lg  py-2 px-4 text-[#0000]  hover:text-white hover:bg-[#6C4DE6] transition duration-300 ease-in-out font-medium"
                    }`}
                    onClick={() => handleChange(n)}
                  >
                    {n}
                  </li>
                ))}
              </ul>

              <span
                className="border border-stone-300 dark:border-[#6C4DE6] cursor-pointer rounded-lg p-2"
                onClick={handleNext}
              >
                <HiOutlineChevronRight className="text-stone-300 text-lg dark:text-[#6C4DE6]" />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Pagination;
