import React, { useEffect, useRef, useState } from "react";

import Table from "./Table";
import { useComment } from "../feature/comment/useComment";
import { useNavigate } from "react-router-dom";
import useOutsideClick from "../hook/useOutsideClick";
import FullPageLoaderSpinner from "./FullPageLoaderSpinner";
import StatusDropdown from "./StatusDropdown";
import { formatDate } from "../utils/helper";
import Pagination from "./Pagination";
import { OverLay } from "./OverLay";
import { HiMagnifyingGlass } from "react-icons/hi2";
import CategoryForm from "./CategoryForm";

const Category = () => {
  const iconRef = useRef(null);
  const navigate = useNavigate();
  const { comments, isLoading } = useComment();
  const [showModal, setShowModal] = useState(false);
  const [searchedInput, setSearchInput] = useState("");
  const [searchErrorMessage, setSearchErrorMessage] = useState("");
  const [comentId, setCommentId] = useState(null);
  const [isStatusOpen, setStatusOpen] = useState(false);
  const [isAddCategory, setAddCategory] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 10;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const record = comments?.slice(firstIndex, lastIndex);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const maxNameLength = 15;

  const handleDropDown = (index, event) => {
    event.stopPropagation();
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
    setStatusOpen(false);
  };
  useOutsideClick(iconRef, ".dropdown-menu", () => {
    setOpenDropdownIndex(null);
  });
  const handleOptionClick = (id) => {
    setOpenDropdownIndex(null);
    setShowModal(true);
    setCommentId(id);
  };
  const handleOpenCategoryForm = () => {
    setAddCategory(true);
  };

  useEffect(() => {
    if (comments?.length === 0) {
      setSearchErrorMessage("No comments found");
    }
    document.title = "TekMatas | Comment";
    window.scrollTo({ top: 0 });
    return () => {
      document.title = "TekMatas | Comment";
    };
  }, [comments]);
  if (isLoading) return <FullPageLoaderSpinner />;

  return (
    <div className="mt-40 md:mt-10 ">
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
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </span>

        <button
          type="button"
          onClick={handleOpenCategoryForm}
          className="bg-[#6C4DE6] hover:bg-[#7771cc] dark:hover:bg-[#584fd4] transition duration-500 ease-in-out w-[130px] h-[20px] py-[22px] text-white font-medium text-[14px] rounded-[10px] flex items-center justify-center pr-2"
        >
          Add Category
        </button>
      </div>
      <div className="w-full md:w-[81%] shadow-sm bg-white dark:border dark:border-[#172340] rounded-md dark:bg-[#0c1427] p-4 mb-10 mt-10  overflow-x-auto">
        <div className="py-5 flex items-center gap-8 justify-between">
          <h1 className="text-xl font-semibold dark:text-[#d0d6e1]">
            Manage Category
          </h1>
          <div className="flex items-center gap-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by category"
                onChange={(e) => setSearchInput(e.target.value)}
                className="border outline-none placeholder:text-[13px] placeholder:dark:text-[#b1b6c0] dark:text-[#d0d6e1] border-[#d0d6e1]  text-sm dark:bg-transparent dark:border-[#201f33]  placeholder:text-[#C1C1C1] rounded-[10px] px-3 py-[10px] w-[400px]"
              />
              <HiMagnifyingGlass className="text-lg text-[text-[#1D2235] cursor-pointer absolute top-3 right-5 dark:text-[#d0d6e1]" />
            </div>
            <StatusDropdown
              isStatusOpen={isStatusOpen}
              setStatusOpen={setStatusOpen}
            />
          </div>
        </div>

        <Table>
          <Table.Header>
            <tr className="dark:border-b-[0.5px] font-medium dark:border-b-[#172340] dark:bg-[#363d4b] bg-[#FAFAFA]">
              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                S/N
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Post Count
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Created Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Action
              </th>
            </tr>
          </Table.Header>
          <Table.Body
            data={record}
            render={(comment) => (
              <>
                <Table.Row key={comment.id}>
                  <td className="px-6 py-4 font-medium">
                    {String(comment.id).padStart(3, "00")}
                  </td>
                  <td className="px-6 py-4">
                    {" "}
                    {`${
                      comment.name.length < maxNameLength
                        ? comment.name.charAt(0).toUpperCase() +
                          comment.name.slice(1)
                        : `${comment.name.substring(0, maxNameLength)}..`
                    }`}
                  </td>
                  <td className="px-6 py-4">{`${
                    comment?.email ? comment?.email : "Anonymous"
                  }`}</td>
                  <td className="px-6 py-4">{formatDate(comment?.date)}</td>
                  <td className="px-6 py-4">
                    {comment.status.charAt(0).toUpperCase() +
                      comment.status.slice(1) ===
                      "Pending" && (
                      <span className="dark:bg-[#f7b84b] bg-[#f7b84b] bg-opacity-15 dark:bg-opacity-10 text-[#f7b84b] py-[4px] w-[70px] text-center inline-block px-[4.6pxpx] leading-[1.4] rounded-[6px] font-medium text-[11px]">
                        Pending
                      </span>
                    )}
                    {comment.status.charAt(0).toUpperCase() +
                      comment.status.slice(1) ===
                      "Approved" && (
                      <span className="dark:bg-[#56ffaa] bg-[#4dc187] bg-opacity-15 dark:bg-opacity-20 text-[#4dc187] py-[4px] w-[70px] text-center inline-block px-[4.6pxpx] leading-[1.4] rounded-[6px] font-medium text-[11px]">
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
                      onClick={(event) => handleDropDown(comment?.id, event)}
                      ref={iconRef}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {openDropdownIndex === comment?.id && (
                      <div className="dropdown-menu bottom-10 bg-white border  dark:border-[#2c3342] z-[30000] shadow-sm dark:bg-[#1a2236] w-[130px] rounded-md absolute right-14 py-2">
                        <ul className="list-none font-meduim space-y-1 text-[13.5px] cursor-pointer dark:text-[#eeee] text-[#000000]">
                          <li
                            onClick={() =>
                              navigate(`/comment/view/${comment?.id}`)
                            }
                            className="dark:hover:bg-[#2e2d52f1] hover:bg-slate-100  dark:hover:text-white p-1 px-3"
                          >
                            View Details
                          </li>
                          <li
                            className="dark:hover:bg-[#2e2d52f1] text-red-600  hover:bg-slate-100  font-medium p-1 px-3"
                            onClick={() => handleOptionClick(comment?.id)}
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
        </Table>
        {!comments?.length && (
          <Pagination
            data={comments}
            searchErrorMessage={searchErrorMessage}
            isLoading={isLoading}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>

      {isAddCategory && (
        <OverLay setShowModal={setAddCategory}>
          <CategoryForm setShowForm={setAddCategory} />
        </OverLay>
      )}
    </div>
  );
};

export default Category;
