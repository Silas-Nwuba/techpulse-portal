import React, { useEffect, useRef } from "react";
import { useDeletePost } from "./useDeletePost";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useNavigate } from "react-router-dom";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
import { useState } from "react";

const PostContent = ({ post }) => {
  const navigate = useNavigate();
  const { deletePost, isDeleting } = useDeletePost();
  const maxLength = 70;
  const { dispatch } = useUserDropdown();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropdownRefs = useRef([]);

  const handleEdit = () => {
    dispatch({ type: "closeUserDropdown", payload: false });
    navigate(`/post/edit/${post.id}`);
  };
  const handleDelete = () => {
    dispatch({ type: "closeUserDropdown", payload: false });
    deletePost(post.id);
    setOpenDropdownIndex(null);
  };

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
  // Function to handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current.every((ref) => ref && !ref.contains(event.target))
      ) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="overflow-hidden mt-5">
      <img
        src={post.image}
        alt="postImage"
        className="w-[400px] rounded-xl h-[200px]"
      />
      <div
        className="grid grid-cols-5 justify-between mt-3 relative"
        ref={(id) => (dropdownRefs.current[post.id] = id)}
      >
        <h2 className="md:text-[16px] font-semibold text-stone-700 dark:text-[#eeeeee] col-span-4">
          {(post.title.charAt(0).toUpperCase() + post.title.slice(1)).length >
          maxLength
            ? `${(
                post.title.charAt(0).toUpperCase() + post.title.slice(1)
              ).substring(0, maxLength)}...`
            : `${post.title.charAt(0).toUpperCase() + post.title.slice(1)}`}
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-7 col-span-1 cursor-pointer ml-10 text-stone-700 dark:text-[#eeeeee]"
          onClick={() => handleDropdownToggle(post.id)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
        {openDropdownIndex === post.id && (
          <>
            {/* dropdown menu */}
            <div className="dark:bg-[#2D3748] border dark:border-[#3b4557] border-gray-200 bg-white  py-2 pb-2 z-10 rounded-[0.25rem] w-[100px] absolute bottom-10 left-[210px] dark:text-[#ebebebee] font-medium ">
              <ul className="cursor-pointer  ">
                <li
                  className="hover:bg-[#007bff] hover:text-white p-1 px-3"
                  onClick={handleEdit}
                >
                  Edit
                </li>

                <Modal>
                  <Modal.Open opens="post-delete">
                    <li
                      className="hover:bg-[#007bff] hover:text-white p-1 px-3"
                      onClick={handleDelete}
                    >
                      Delete
                    </li>
                  </Modal.Open>
                  <Modal.Window name="post-delete">
                    <ConfirmDelete
                      isDeleting={isDeleting}
                      onConfirm={handleDelete}
                    />
                  </Modal.Window>
                </Modal>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default PostContent;
