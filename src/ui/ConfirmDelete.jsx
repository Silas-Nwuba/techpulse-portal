import React from "react";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import Button from "./Button";
import MiniLoaderSpinner from "../ui/MiniLoaderSpinner";
const ConfirmDelete = ({ isDeleting, closeModal, onConfirm }) => {
  return (
    <div className="py-3">
      <span className="bg-red-100 w-12 h-12 rounded-full flex flex-col justify-center items-center mx-auto">
        <HiOutlineExclamationTriangle className="text-red-700 font-semibold text-2xl text-center" />
      </span>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold text-stone-700 text-center">
          Are you sure?
        </h2>
        <p className="text-stone-700 text-center mt-4 text-sm">
          Are you sure you want to delete this item?
        </p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          name="Cancel"
          width="w-[130px]"
          backgroundColor="bg-white"
          hover="hover:bg-gray-100"
          hoverBorder="bg-gray-[#d1d5db]"
          color="text-stone-600"
          marginBottom="mb-0"
          marginTop="mt-0"
          borderColor="border-gray-100"
          border="border"
          onClick={closeModal}
        />
        <Button
          name="Delete"
          width="w-[130px]"
          backgroundColor="bg-red-500"
          hover="hover:bg-red-600"
          color="text-white"
          marginBottom="mb-0"
          marginTop="mt-0"
          onClick={onConfirm}
          loading={isDeleting}
        >
          <MiniLoaderSpinner />
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
