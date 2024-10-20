import React, { useEffect } from "react";
import { useDeletePost } from "../feature/post/useDeletePost";
import MiniLoaderSpinner from "./MiniLoaderSpinner";
import useDeleteComment from "../feature/comment/useDeleteComment";
import { useDeleteCategory } from "../feature/category/useDeleteCategory";

const ConfirmDeleteModal = ({
  setShowModal,
  postId,
  commentId,
  categoryId,
}) => {
  const { deletePost, isDeleting: isDeletingPost } = useDeletePost();
  const { deleteComment, isDeleting: isDeletingComment } = useDeleteComment();
  const { deleteCategory, isDeleting: isDeletingCategory } =
    useDeleteCategory();
  const handleDelete = () => {
    if (postId) deletePost(postId);
    if (commentId) deleteComment(commentId);
    if (categoryId) deleteCategory(categoryId);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "visible";
    };
  });
  return (
    <div className="bg-white xl:w-[24%] lg:w-[30%] md:w-[40%] sm:w-[50%] xs:w-[90%] dark:border-none z-[10000] border dark:bg-[#15142BFF] rounded-[10px] py-[10px] px-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl  transistion duration-300 ease-in-out">
      <div className="mt-5">
        <h2 className="text-2xl font-semibold text-[#000000] text-center dark:text-white">
          Are you sure?
        </h2>
        <p className="text-stone-900 text-center mt-4 text-[16px] dark:text-[#d0d6e1]">
          This can’t be undone and it will be removed from your database
        </p>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center gap-4 mb-5">
        <button
          onClick={handleDelete}
          type="submit"
          className="bg-[#F91212] dark:text-white outline-none transition ease-in-out duration-300 rounded-full border-[0.5px] border-[#F91212] focus:outline-none cursor-pointer w-[90%] py-[12px] text-white font-medium leading-[19.36px] text-[16px]"
        >
          {isDeletingPost || isDeletingComment || isDeletingCategory ? (
            <MiniLoaderSpinner />
          ) : (
            "Delete"
          )}
        </button>

        <button
          type="button"
          onClick={handleClose}
          className="bg-transparent border dark:border-[#777777] dark:hover:bg-[#44425a] border-stone-300 transition ease-in-out duration-300 dark:text-white  hover:bg-stone-200 font-medium rounded-full outline-none focus:outline-none cursor-pointer leading-[19.36px] py-3 w-[90%] text-[16px]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
