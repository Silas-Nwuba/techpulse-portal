import React, { useEffect } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import useGetCommentById from "./useGetCommentById";
import { formatDate, formatTime } from "../../utils/helper";
import CommentDetailLoader from "../../ui/CommentDetailLoader";
import Button from "../../ui/Button";
import useEditComment from "./useEditComment";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteComment from "./useDeleteComment";

const CommentDetailBox = () => {
  const navigate = useNavigate();
  const { data: comment, isLoading } = useGetCommentById();
  const { editComment, isEditingComment } = useEditComment();
  const { deleteComment, isDeleting } = useDeleteComment();
  const { hours, minute, preiod } = formatTime(comment?.date);
  useEffect(() => {
    document.title = "CommentDetail | TechZonie";
    return () => {
      document.title = "Dashboard | TechZonie";
    };
  });
  if (isLoading) return <CommentDetailLoader />;
  return (
    <div className="mt-40 md:mt-10 mb-5">
      <div className="justify-end block md:hidden items-center flex-wrap gap-2 md:gap-0">
        <span
          className="flex items-center  gap-2 mr-2 text-[#007bff] dark:text-[#4299E1] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <p>Back</p>
          <HiArrowRight />
        </span>
      </div>
      <div className="bg-white dark:bg-[#2D3748] rounded-md mt-5 pb-5 w-full">
        <div className="bg-[#007bff] dark:bg-[#4299E1] py-3 rounded-t-md px-5">
          <h1 className=" text-[16px] md:text-[18px] font-semibold text-white dark:text-[#E2E8F0]">
            Verify Comment
          </h1>
        </div>
        <div className="flex md:justify-between mx-4 flex-wrap items-center mt-10">
          <div className="space-y-2">
            <h3 className="text-[18px] md:text-xl  font-semibold text-stone-500 dark:text-[#E2E8F0]">
              {comment?.post.title.charAt(0).toUpperCase() +
                comment?.post.title.slice(1)}
            </h3>
          </div>
          <div className="gap-4 flex-wrap flex justify-between mx-0 md:mx-4 mt-2 md:mt-0 items-center mr-3">
            <span className="text-[14px] text-stone-500 dark:text-[#E2E8F0]">
              Date: {formatDate(comment?.date)}{" "}
              {hours === 0 ? 12 : hours.toString().padStart("2", 0)}:{" "}
              {minute.toString().padStart("2", 0)} {preiod}
            </span>
          </div>
        </div>
        <div className=" flex-wrap flex justify-between gap-3 md:gap-0  mt-2 md:mt-0 items-center mx-4">
          <span className="text-[16px] text-stone-500 mt-2 dark:text-[#E2E8F0]">
            Category - {comment?.post.category}
          </span>
          <span className="mr-5 text-stone-500 dark:text-[#E2E8F0]">
            Status -{" "}
            {comment?.status.charAt(0).toUpperCase() + comment?.status.slice(1)}
          </span>
        </div>
        <div className="mx-4 bg-gray-50 dark:bg-[#4A5568] rounded-sm mt-10 py-10 px-5 space-y-3">
          <h3 className="text-xl font-semibold dark:text-[#E2E8F0] text-stone-500">
            Message
          </h3>
          <p className="dark:text-[#E2E8F0]">{comment?.comment}</p>
        </div>
        <div className="border-t border-stone-200 mt-10 dark:border-[#4A5568]">
          <span className="mt-4 mb-2  ml-4 flex justify-end items-center gap-5 mr-3  md:mr-10">
            <Button
              name="Back"
              disable={isEditingComment}
              width={"w-[90px]"}
              borderColor={"border-gray-100"}
              backgroundColor="bg-gray-100"
              color="text-stone-700"
              marginBottom="mb-0"
              hover="hover:bg-slate-200"
              hoverBorder="hover:border-slate-200"
              padding="p-2"
              onClick={() => navigate(-1)}
            />
            {comment?.status === "Pending" && (
              <Button
                disable={isEditingComment}
                name={"Approve"}
                width={"w-[100px]"}
                borderColor="border-[#48BB78]"
                backgroundColor="bg-[#48BB78]"
                color="text-white"
                marginBottom="mb-0"
                hover="hover:bg-[#48BB78]"
                hoverBorder="border-sky-500"
                loading={isEditingComment}
                padding="p-2"
                onClick={() => editComment(comment.id)}
              >
                <MiniLoaderSpinner />
              </Button>
            )}
            <Modal>
              <Modal.Open opens="comment-delete">
                <Button
                  disabled={isEditingComment}
                  name="Delete"
                  width={"w-[90px]"}
                  borderColor={"border-red-500"}
                  backgroundColor="bg-[#E53E3E]"
                  color="text-[#ffff]"
                  marginBottom="mb-0"
                  hover="hover:bg-red-600"
                  hoverBorder="hover:border-red-600"
                  padding="p-2"
                />
              </Modal.Open>
              <Modal.Window name="comment-delete">
                <ConfirmDelete
                  isDeleting={isDeleting}
                  onConfirm={() => deleteComment(comment.id)}
                />
              </Modal.Window>
            </Modal>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentDetailBox;
