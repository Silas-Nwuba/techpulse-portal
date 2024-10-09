import React, { useEffect, useRef, useState } from "react";
import Table from "../../ui/Table";
import { useComment } from "./useComment";
import FullPageLoaderSpinner from "../../ui/FullPageLoaderSpinner";
import { OverLay } from "../../ui/OverLay";
import ConfirmDeleteModal from "../../ui/ConfirmDeleteModal";
import StatusDropdown from "../../ui/StatusDropdown";
import Pagination from "../../ui/Pagination";
import useOutsideClick from "../../hook/useOutsideClick";
import { formatDate } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

const CommentTable = () => {
  const { comments, isLoading } = useComment();
  const [showModal, setShowModal] = useState(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState("");
  const [comentId, setCommentId] = useState(null);
  const [isStatusOpen, setStatusOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 10;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const record = comments?.slice(firstIndex, lastIndex);
  const iconRef = useRef(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const maxNameLength = 15;
  const navigate = useNavigate();

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

  useEffect(() => {
    if (comments?.length === 0) {
      setSearchErrorMessage("No comments found");
    }
    document.title = "TekMatas | Comment";
    return () => {
      document.title = "TekMatas | Comment";
    };
  }, [comments]);
  if (isLoading) return <FullPageLoaderSpinner />;
  return (
    <div className="mt-40 md:mt-10 ">
      <div className="w-full md:w-[81%] shadow-sm bg-white dark:border dark:border-[#172340] rounded-[10px] dark:bg-[#0c1427] p-4 mb-10  overflow-x-auto">
        <div className="flex items-end justify-between my-5 mb-6">
          <h1 className="text-xl font-semibold dark:text-[#d0d6e1]">
            Manage Comment
          </h1>
          <StatusDropdown
            isStatusOpen={isStatusOpen}
            setStatusOpen={setStatusOpen}
          />
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
                Username
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Email
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Comment Date
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
      {showModal && (
        <OverLay setShowModal={setShowModal}>
          <ConfirmDeleteModal
            setShowModal={setShowModal}
            commentId={comentId}
          />
        </OverLay>
      )}
    </div>
  );
};
export default CommentTable;
