import React from "react";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import Button from "./Button";
import MiniLoaderSpinner from "../ui/MiniLoaderSpinner";
const ConfirmDelete = ({ isDeleting, closeModal, onConfirm }) => {
  return (
    <div className="py-3">
      <span className="bg-red-100 dark:bg-[#2D3748] w-12 h-12 rounded-full flex flex-col justify-center items-center mx-auto">
        <HiOutlineExclamationTriangle className="text-red-700 font-semibold text-2xl text-center" />
      </span>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold text-stone-700 text-center dark:text-[#E2E8F0]">
          Are you sure?
        </h2>
        <p className="text-stone-700 text-center mt-4 text-sm dark:text-[#E2E8F0]">
          Are you sure you want to delete this item?
        </p>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          name="Cancel"
          width="w-[130px]"
          backgroundColor="bg-gray-100"
          hover="hover:bg-gray-100"
          hoverBorder="bg-gray-100"
          color="text-stone-600"
          marginBottom="mb-0"
          marginTop="mt-0"
          borderColor="border-gray-100"
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
