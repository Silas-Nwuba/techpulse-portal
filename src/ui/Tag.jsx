import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateTag } from "../feature/tag/useCreateTag";
import FormRow from "./FormRow";
import MiniLoaderSpinner from "./MiniLoaderSpinner";

const Tag = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const navigate = useNavigate();
  const { errors } = formState;
  const { createTag, isCreating } = useCreateTag();

  const onsubmit = (data) => {
    createTag(data, {
      onSettled: () => {
        reset();
      },
    });
  };
  return (
    <div className="mt-[100px] md:mt-10 mb-5 ml-3">
      <div className="flex items-center gap-2  mt-5">
        <span
          className="flex items-center gap-2 text-[#768191] dark:text-[#768191] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </span>

        <h1 className="text-[22px] text-stone-[#000000] font-semibold dark:text-[#CBD5E0]">
          Add Tag
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        autoComplete="off"
        className="mt-[30px] dark:bg-[#0c1427] rounded-[10px] bg-white  px-4 py-3 w-[93%] md:w-[50%]"
      >
        <FormRow label="Tag Name" error={errors?.tag?.message}>
          <input
            type="text"
            name="name"
            placeholder="Tag name"
            {...register("name", {
              required: "Tag name field is required",
            })}
            className={`dark:bg-[#0c1427]  dark:focus:border-[#3b4557] rounded-[10px] dark:border-[#172340] dark:text-[#d0d6e1] focus:outline-none  border  text-sm border-gray-300  p-3 mt-2 w-full`}
          />
        </FormRow>

        <div className="mt-3">
          <button
            type="submit"
            className={`${
              isCreating ? "grid grid-cols-3 items-center justify-center" : ""
            }   bg-[#6C4DE6] dark:bg-[#6C4DE6]  dark:text-white text-white transition duration-500 ease-in-out w-[100px] py-2   text-center font-normal text-[16px] rounded-[5px] px-2`}
          >
            {isCreating ? <MiniLoaderSpinner /> : ""}
            <p className={`${isCreating ? "mr-10" : "text-center"}  `}>
              Submit
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tag;
