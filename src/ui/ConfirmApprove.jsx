import React from "react";
import { HiXMark } from "react-icons/hi2";

const ConfirmApprove = ({ data, closeModal, onConfirm, isEditing }) => {
  return (
    <div className=" px-2 p-4">
      <div
        className="flex justify-end mb-3 cursor-pointer"
        onClick={closeModal}
      >
        <HiXMark className="text-xl text-stone-900"></HiXMark>
      </div>
      <div>
        <div className="mt-5">
          <h2 className="font-semibold text-stone-600 text-[18px]">Title:</h2>
          <h4>{data.post.title}</h4>
        </div>
        <div className="mt-2">
          <h2 className=" text-stone-600 font-semibold text-[18px]">
            Comment:
          </h2>
          <p>{data.comment}</p>
        </div>
        <button
          className="bg-lime-400 text-sm font-semibold rounded-md p-3 mt-5 hover:bg-lime-500 text-white transition duration ease-in-out"
          onClick={onConfirm}
        >
          {isEditing ? "Processing.." : "Approve comment"}
        </button>
      </div>
    </div>
  );
};

export default ConfirmApprove;
