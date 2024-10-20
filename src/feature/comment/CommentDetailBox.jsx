import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetCommentById from "./useGetCommentById";
import { formatDate } from "../../utils/helper";
import CommentDetailLoader from "../../ui/CommentDetailLoader";
import { OverLay } from "../../ui/OverLay";
import ConfirmDeleteModal from "../../ui/ConfirmDeleteModal";

import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";
import useDeleteComment from "./useDeleteComment";
import useEditComment from "./useEditComment";

const CommentDetailBox = () => {
  const { data: comment, isLoading } = useGetCommentById();
  const navigate = useNavigate();
  // const { hours, minute, preiod } = formatTime(comment?.date);
  const [showModal, setShowModal] = useState(false);
  const { editComment, isEditingComment } = useEditComment();
  const { isDeleting } = useDeleteComment();

  const handleDelete = () => {
    setShowModal(true);
  };

  if (isLoading) return <CommentDetailLoader />;
  return (
    <div className="mt-40 md:mt-10 mb-5">
      <div className="shadow-sm bg-white dark:border dark:border-[#172340] rounded-md dark:bg-[#0c1427] mt-5 pb-5 w-[80%]">
        <div className="bg-[#6C4DE6] dark:bg-[#6C4DE6] py-3 rounded-t-md px-5 flex items-center">
          <span
            className="mr-2  text-[#d0d6e1] dark:text-[#d0d6e1]  cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </span>

          <h1 className=" text-[16px] md:text-[18px] font-semibold text-white dark:text-[#f0f1f3]">
            Verify Comment
          </h1>
        </div>
        <div className="mx-4  mt-10">
          <div className="space-y-2">
            <h3 className="text-[20px] md:text-xl mb-5 font-semibold text-[#000000] dark:text-[#d0d6e1]">
              {comment?.post.title.charAt(0).toUpperCase() +
                comment?.post.title.slice(1)}
            </h3>
          </div>
          <div className="gap-4 mt-2 md:mt-0 items-center">
            <span className="text-[16px] font-medium text-stone-[#000000] dark:text-[#d0d6e1]">
              Date: {formatDate(comment?.date)}{" "}
              {/* {hours === 0 ? 12 : hours.toString().padStart("2", 0)}:{" "}
              {minute.toString().padStart("2", 0)} {preiod} */}
            </span>
          </div>
        </div>
        <div className=" flex-wrap flex justify-between gap-3 md:gap-0  mt-2 md:mt-0 items-center mx-4">
          <span className="text-[15px] text-[#000000] capitalize mt-2 dark:text-[#d0d6e1] font-medium">
            Category : {comment?.post.category}
          </span>
          <span className="mr-5 text-[#000000] dark:text-[#d0d6e1] font-medium text-[15px]">
            Status :{" "}
            {comment?.status.charAt(0).toUpperCase() + comment?.status.slice(1)}
          </span>
        </div>
        <div className="mx-4 bg-gray-50 dark:bg-[#4A5568] rounded-md mt-10 py-10 px-5 space-y-3">
          <h3 className="text-xl font-semibold dark:text-[#d0d6e1] text-stone-[#000000]">
            Message
          </h3>
          <p className="dark:text-[#d0d6e1]">{comment?.comment}</p>
        </div>
        <div className="border-t border-stone-200 mt-10 dark:border-[#2c323b]">
          <span className="mt-4 mb-2   items-center gap-5 ">
            <div className="mt-3 flex items-center gap-5 ml-5">
              {comment?.status === "pending" && (
                <button
                  onClick={() => editComment(comment?.id)}
                  disable={isEditingComment}
                  type="button"
                  className="bg-[#48BB78] dark:bg-[#48BB78] dark:text-white w-[100px] text-white transition duration-500 ease-in-out py-3  font-normal text-[16px] rounded-[5px] flex items-center justify-center px-3"
                >
                  {isEditingComment ? <MiniLoaderSpinner /> : "Approve"}
                </button>
              )}
              <button
                onClick={() => handleDelete()}
                type="button"
                className="bg-[#F91212] dark:bg-[#F91212] w-[100px] dark:text-white text-white transition duration-500 ease-in-out py-3  font-normal text-[16px] rounded-[5px] flex items-center justify-center px-3"
              >
                {isDeleting ? <MiniLoaderSpinner /> : " Delete"}
              </button>
            </div>
          </span>
        </div>
      </div>
      {showModal && (
        <OverLay setShowModal={setShowModal}>
          <ConfirmDeleteModal
            setShowModal={setShowModal}
            commentId={comment.id}
          />
        </OverLay>
      )}
    </div>
  );
};
export default CommentDetailBox;
