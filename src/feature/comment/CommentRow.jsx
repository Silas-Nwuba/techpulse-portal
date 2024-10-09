import React, { useRef, useState } from "react";
import Table from "../../ui/Table";
import { formatDate } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import useOutsideClick from "../../hook/useOutsideClick";

const CommentRow = ({ comment, setShowModal, setPostId, setStatusOpen }) => {
  const navigate = useNavigate();
  const iconRef = useRef(null);
  const maxNameLength = 15;
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  useOutsideClick(iconRef, ".dropdown-menu", () => {
    setOpenDropdownIndex(null);
  });
  const handleDropDown = (index, event) => {
    event.stopPropagation();
    setOpenDropdownIndex((prevId) => (prevId === index ? null : index));
    setStatusOpen(false);
  };
  const handleOptionClick = (id) => {
    setOpenDropdownIndex(null);
    setShowModal(true);
    setPostId(id);
  };
  return (
    <Table.Row key={comment.id}>
      <td className="px-6 py-4 font-medium">
        {String(comment.id).padStart(3, "00")}
      </td>
      <td className="px-6 py-4">
        {" "}
        {`${
          comment.name.length < maxNameLength
            ? comment.name.charAt(0).toUpperCase() + comment.name.slice(1)
            : `${comment.name.substring(0, maxNameLength)}..`
        }`}
      </td>
      <td className="px-6 py-4">{`${
        comment?.email ? comment?.email : "Anonymous"
      }`}</td>
      <td className="px-6 py-4">{formatDate(comment?.date)}</td>
      <td className="px-6 py-4">
        {comment.status.charAt(0).toUpperCase() + comment.status.slice(1) ===
          "Pending" && (
          <span className="dark:bg-[#f7b84b] bg-[#f7b84b] bg-opacity-15 dark:bg-opacity-10 text-[#f7b84b] py-[4px] w-[70px] text-center inline-block px-[4.6pxpx] leading-[1.4] rounded-[6px] font-medium text-[11px]">
            Pending
          </span>
        )}
        {comment.status.charAt(0).toUpperCase() + comment.status.slice(1) ===
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
                onClick={() => navigate(`comment/view/${comment?.id}`)}
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
  );
};
export default CommentRow;
