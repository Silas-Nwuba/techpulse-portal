import React from "react";
import Table from "../../ui/Table";
import { HiEye, HiTrash } from "react-icons/hi2";
import { formatDate } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteComment from "./useDeleteComment";

const CommentRow = ({ comment }) => {
  const navigate = useNavigate();
  const commentId = comment.id;
  console.log(commentId);
  const maxNameLength = 15;
  const { deleteComment, isDeleting } = useDeleteComment();
  return (
    <Table.Row>
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
        comment.email ? comment.email : "Anonymous"
      }`}</td>
      <td className="px-6 py-4">{formatDate(comment.date)}</td>

      <td className="px-6 py-4">
        {comment.status.charAt(0).toUpperCase() + comment.status.slice(1) ===
          "Pending" && (
          <span className="py-[0.20em] bg-[#F6E05E] dark:bg-[#dfca54]  px-[0.7em] rounded-[5px] text-white font-medium text-[11px]">
            Pending
          </span>
        )}
        {comment.status.charAt(0).toUpperCase() + comment.status.slice(1) ===
          "Approved" && (
          <span className="bg-[#48BB78] py-[0.20em] px-[0.7em] rounded-md text-white font-semibold text-[11px]">
            Approved
          </span>
        )}
      </td>
      <td className="px-6 py-4">
        <span className="flex items-center gap-3  cursor-pointer">
          <span
            className="hover:bg-gray-100 p-1 rounded-full transition duration-300 ease-in-out dark:hover:bg-[#4A5568]"
            onClick={() => navigate(`/comment/${commentId}`)}
          >
            <HiEye className="text-[16px] text-sky-400 dark:text-[#4299E1]" />
          </span>
          <Modal>
            <Modal.Open opens={"delete-comment"}>
              <span className="hover:bg-gray-100 p-1 rounded-full transition  duration-300 ease-in-out dark:hover:bg-stone-500">
                <HiTrash className="text-red-400" />
              </span>
            </Modal.Open>
            <Modal.Window name={"delete-comment"}>
              <ConfirmDelete
                isDeleting={isDeleting}
                onConfirm={() => deleteComment(commentId)}
              />
            </Modal.Window>
          </Modal>
        </span>
      </td>
    </Table.Row>
  );
};
export default CommentRow;
