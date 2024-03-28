import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { HiOutlineCalendar, HiOutlineUser } from "react-icons/hi2";
import { useDeletePost } from "./useDeletePost";
import { formatPostDate } from "../../utils/helper";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useNavigate } from "react-router-dom";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
const PostContent = ({ post }) => {
  const navigate = useNavigate();
  const { deletePost, isDeleting } = useDeletePost();
  const { day, month, year } = formatPostDate(post.createdDate);
  const maxLength = 50;
  const { dispatch } = useUserDropdown();
  const handleEdit = () => {
    dispatch({ type: "closeUserDropdown", payload: false });
    navigate(`/admin/post/edit/${post.id}`);
  };
  const handleDelete = () => {
    dispatch({ type: "closeUserDropdown", payload: false });
    deletePost(post.id);
  };
  return (
    <div className="overflow-hidden">
      <img
        src={post.image}
        alt="postImage"
        className="w-full rounded-md sm:h-[200px]"
      />
      <h1 className="text-[18px] font-semibold text-stone-500 mt-1">
        {(post.title.charAt(0).toUpperCase() + post.title.slice(1)).length >
        maxLength
          ? `${(
              post.title.charAt(0).toUpperCase() + post.title.slice(1)
            ).substring(0, maxLength)}...`
          : `${post.title.charAt(0).toUpperCase() + post.title.slice(1)}`}
      </h1>
      <div className="mt-1 flex justify-between items-center">
        <div className="flex flex-wrap gap-5 items-center text-stone-600 text-sm">
          <span className="flex gap-1 items-center">
            <HiOutlineUser className="text-sky-600" />
            <p className="mt-1">{post.author}</p>
          </span>
          <span className="flex gap-1 items-center">
            <HiOutlineCalendar className="text-sky-600" />
            <p className="mt-1">
              {day} {month} {year}
            </p>
          </span>
        </div>
        <div className="flex item-center gap-2 cursor-pointer">
          <FaEdit className="text-sky-600 font-semibold" onClick={handleEdit} />
          <Modal>
            <Modal.Open opens="post-delete">
              <FaTrash className="text-red-600" />
            </Modal.Open>

            <Modal.Window name="post-delete">
              <ConfirmDelete isDeleting={isDeleting} onConfirm={handleDelete} />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default PostContent;
