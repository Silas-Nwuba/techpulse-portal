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
  const { hours, minute, second, preiod } = formatTime(comment?.date);
  useEffect(() => {
    document.title = "CommentDetail - TechPulse";
    return () => {
      document.title = "TechPulse";
    };
  });

  if (isLoading) return <CommentDetailLoader />;
  return (
    <div className="mt-10 mb-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-stone-500">
          Comment Id #{String(comment?.id).padStart(3, "00")}
        </h1>
        <span
          className="flex items-center gap-2 mr-2 text-[#007bff] cursor-pointer"
          onClick={() => navigate(`/admin/comment`)}
        >
          <p>Back</p>
          <HiArrowRight />
        </span>
      </div>
      <div className="bg-white rounded-md mt-5 pb-5">
        <div className="bg-[#007bff] py-3 rounded-t-md px-5">
          <h1 className="text-[18px] font-semibold text-white">
            Verify Comment
          </h1>
        </div>
        <div className="flex justify-between mx-4 items-center mt-10">
          <div className="space-y-2">
            <h3 className="text-[20px] font-semibold text-stone-500">
              {comment?.post.title.charAt(0).toUpperCase() +
                comment?.post.title.slice(1)}
            </h3>
          </div>
          <div className="flex items-center gap-4 mr-3">
            <span className="text-[15px] text-stone-500">
              Date: {formatDate(comment?.date)}
            </span>
            <span>
              Time: {hours === 0 ? 12 : hours}: {minute} : {second} {preiod}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mx-4">
          <span className="text-[16px] text-stone-500 mt-2">
            Category - {comment?.post.category}
          </span>
          <span className="mr-5">
            Status -{" "}
            {comment?.status.charAt(0).toUpperCase() + comment?.status.slice(1)}
          </span>
        </div>
        <div className="mx-4 bg-gray-50 rounded-sm mt-10 py-10 px-5 space-y-3">
          <h3 className="text-xl font-semibold">Message</h3>
          <p>{comment?.comment}</p>
        </div>
        <div className="border-t border-stone-200 mt-10">
          <span className="mt-4 mb-2  ml-4 flex justify-end items-center gap-5 mr-10">
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
              onClick={() => navigate("/admin/comment")}
            />
            {comment?.status === "Pending" && (
              <Button
                disable={isEditingComment}
                name={"Approve"}
                width={"w-[100px]"}
                borderColor="border-[#007bff]"
                backgroundColor="bg-[#007bff]"
                color="text-white"
                marginBottom="mb-0"
                hover="hover:bg-sky-500"
                hoverBorder="border-sky-500"
                loading={isEditingComment}
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
                  backgroundColor="bg-red-500"
                  color="text-white"
                  marginBottom="mb-0"
                  hover="hover:bg-red-600"
                  hoverBorder="hover:border-red-600"
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
