import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "../../ui/Table";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { formatDate, formatTime } from "../../utils/helper";
import { useFilterPost } from "./useFilterPost";
import useOutsideClick from "../../hook/useOutsideClick";
import { OverLay } from "../../ui/OverLay";
import ConfirmDeleteModal from "../../ui/ConfirmDeleteModal";
import { useGetallPost } from "./useGetallPost";
import FullPageLoaderSpinner from "../../ui/FullPageLoaderSpinner";
import Pagination from "../../ui/Pagination";
import StatusDropdown from "../../ui/StatusDropdown";
import CategoryDropdown from "../../ui/CategoryDropDown";
import { FaPlus } from "react-icons/fa";

const Post = () => {
  const [searchedInput, setSearchInput] = useState("");
  const [searchedData, setSearchedData] = useState(null);
  const [searchErrorMessage, setSearchErrorMessage] = useState("");
  const { filterCategoryData, isLoading } = useFilterPost();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const { data } = useGetallPost();

  const iconRef = useRef(null);
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isStatusOpen, setStatusOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const recordPerPage = 10;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const record = searchedData?.slice(firstIndex, lastIndex);
  const navigate = useNavigate();

  const handleDropDown = (index, event) => {
    event.stopPropagation();
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
    setCategoryOpen(false);
    setStatusOpen(false);
  };
  useOutsideClick(iconRef, ".dropdown-menu", () => {
    setOpenDropdownIndex(null);
  });
  const handleOptionClick = (id) => {
    setOpenDropdownIndex(null);
    setShowModal(true);
    setPostId(id);
  };
  useEffect(() => {
    setSearchedData(filterCategoryData);
    const handleSearch = () => {
      if (searchedInput !== "") {
        const fiteredData = filterCategoryData.filter((data) =>
          data.author.toUpperCase().includes(searchedInput.toUpperCase())
        );
        setSearchedData(fiteredData);
        setSearchErrorMessage(
          fiteredData?.length === 0 ? "No search results found" : ""
        );
      }
      document.documentElement.style.overflowY = "auto";
    };
    handleSearch();
  }, [searchedInput, filterCategoryData, openDropdownIndex]);
  if (isLoading) return <FullPageLoaderSpinner />;
  return (
    <div className="md:mt-[40px] mt-[120px] lg:ml-3">
      <div className="flex items-center gap-5  mt-5">
        <span
          className="flex items-center gap-2 text-[#768191] dark:text-[#768191] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </span>

        <Link
          to={"/post/add"}
          className="bg-[#6C4DE6] flex items-center gap-2 hover:bg-[#7771cc] dark:hover:bg-[#584fd4] transition duration-500 ease-in-out px-[20px] text-center py-[10px] text-white font-medium text-[14px] rounded-[5px]"
        >
          <FaPlus /> New Post
        </Link>
      </div>
      <div
        className={`bg-white rounded-[10px] mt-5 dark:bg-[#0c1427] p-4 w-[96%] xl:w-[85%] overflow-y-auto`}
      >
        <div className="py-2 lg:flex items-center justify-between">
          <h1 className="text-xl font-semibold dark:text-[#d0d6e1]">
            Post Overview
          </h1>
          <div className="md:flex items-center gap-5 my-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by author name"
                onChange={(e) => setSearchInput(e.target.value)}
                className="border outline-none placeholder:text-[13px] placeholder:dark:text-[#b1b6c0] dark:text-[#d0d6e1] border-[#d0d6e1]  text-sm dark:bg-transparent dark:border-[#201f33]  placeholder:text-[#C1C1C1] rounded-[10px] px-3 py-[10px] w-full xl:w-[400px]"
              />
              <HiMagnifyingGlass className="text-lg text-[text-[#1D2235] cursor-pointer absolute top-3 right-5 dark:text-[#d0d6e1]" />
            </div>

            <div className="flex gap-4 my-4">
              <CategoryDropdown
                setOpenDropdownIndex={setOpenDropdownIndex}
                isCategoryOpen={isCategoryOpen}
                setCategoryOpen={setCategoryOpen}
              />
              <StatusDropdown
                setOpenDropdownIndex={setOpenDropdownIndex}
                isStatusOpen={isStatusOpen}
                setStatusOpen={setStatusOpen}
              >
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
              </StatusDropdown>
            </div>
          </div>
        </div>
        <Table>
          <Table.Header>
            <tr className="font-medium">
              <th
                id="tre1"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Post Id
              </th>
              <th className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]">
                Author
              </th>
              <th className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]">
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Published Date & Time
              </th>
              <th
                scope="col"
                className="py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                No of Comment
              </th>
              <th className=" text-[text-[#1D2235] px-6 py-3 dark:text-[#d4def1]">
                Status
              </th>
              <th
                id="tre7"
                className="text-[#333333] px-6 py-3 dark:text-[#d4def1]"
              >
                Action
              </th>
            </tr>
          </Table.Header>
          {searchErrorMessage && (
            <p className="font-medium text-[14px] ml-2 my-3 dark:text-[#b0b5be]">
              {searchErrorMessage}
            </p>
          )}

          {!isLoading && (
            <Table.Body
              data={record}
              render={(data) => (
                <>
                  <Table.Row key={data.id}>
                    <td className="px-6 py-3 font-medium text-[13px]">
                      {String(data.id).padStart(3, "00")}
                    </td>
                    <td className="px-2 py-3 font-medium text-[13px] capitalize whitespace-nowrap">
                      {data.author === "Admin" ? "Ebuka Nwuba" : data.author}
                    </td>
                    <td className="px-6 py-3 font-medium text-[13px] capitalize whitespace-nowrap">
                      {data.category}
                    </td>
                    <td className="px-6 py-3 font-medium text-[13px] whitespace-nowrap">
                      <span className="flex gap-1 items-center">
                        <p>{formatDate(data.created_at)}</p>-
                        <p>
                          {formatTime(data.created_at).hours}:
                          {formatTime(data.created_at).minute}{" "}
                          {formatTime(data.created_at).preiod}
                        </p>
                      </span>
                    </td>
                    <td className="px-6 py-3 font-medium text-[13px] whitespace-nowrap">
                      None
                    </td>
                    <td className="px-6 py-3 font-medium text-[13px] whitespace-nowrap">
                      {data.status.charAt(0).toUpperCase() +
                        data.status.slice(1) ===
                        "Pending" && (
                        <span className="dark:bg-[#f7b84b] bg-[#f7b84b] bg-opacity-15 dark:bg-opacity-10 text-[#f7b84b] py-[4px] w-[70px] text-center inline-block px-[4.6pxpx] leading-[1.4] rounded-[5px] font-medium text-[11px]">
                          Pending
                        </span>
                      )}
                      {data.status.charAt(0).toUpperCase() +
                        data.status.slice(1) ===
                        "Approved" && (
                        <span className="dark:bg-[#56ffaa] bg-[#4dc187] bg-opacity-15 dark:bg-opacity-10 text-[#4dc187] py-[4px] w-[70px] text-center inline-block px-[4.6pxpx] leading-[1.4] rounded-[5px] font-medium text-[11px]">
                          Approved
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-3 text-[13px] relative whitespace-nowrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-7 dark:text-[#899BB1] text-[#899BB1] cursor-pointer dark:hover:bg-[#2D3748] hover:bg-slate-50 rounded-full"
                        onClick={(event) => handleDropDown(data?.id, event)}
                        ref={iconRef}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      {openDropdownIndex === data?.id && (
                        <div className="dropdown-menu bottom-10 bg-white border  dark:border-[#2c3342] z-[30000] shadow-sm dark:bg-[#1a2236] w-[130px] rounded-md absolute right-14 py-2">
                          <ul className="list-none font-meduim space-y-1 text-[13.5px] cursor-pointer dark:text-[#eeee] text-[#000000]">
                            <li
                              className="dark:hover:bg-[#2e2d52f1] hover:bg-slate-100  dark:hover:text-white p-1 px-3"
                              onClick={() => navigate(`/post/edit/${data.id}`)}
                            >
                              Edit
                            </li>
                            <li
                              onClick={() => navigate(`/post/view/${data?.id}`)}
                              className="dark:hover:bg-[#2e2d52f1]  hover:bg-slate-100  dark:hover:text-white p-1 px-3"
                            >
                              View Details
                            </li>
                            <li
                              className="dark:hover:bg-[#2e2d52f1] text-red-600 font-medium p-1 px-3"
                              onClick={() => handleOptionClick(data?.id)}
                            >
                              Delete
                            </li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </Table.Row>
                </>
              )}
            />
          )}
        </Table>
        {!data?.length && (
          <Pagination
            data={data}
            searchErrorMessage={searchErrorMessage}
            isLoading={isLoading}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        {showModal && (
          <OverLay setShowModal={setShowModal}>
            <ConfirmDeleteModal setShowModal={setShowModal} postId={postId} />
          </OverLay>
        )}
      </div>
    </div>
  );
};
export default Post;
