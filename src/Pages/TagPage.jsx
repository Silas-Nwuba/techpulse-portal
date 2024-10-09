import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormRow from "../ui/FormRow";
import { useNavigate } from "react-router-dom";

const TagPage = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();
  const { errors } = formState;
  useEffect(() => {
    document.title = "TekMatas | Tag";
    return () => {
      document.title = "TekMatas | Tag";
    };
  }, []);
  return (
    <div className="mt-[120px] md:mt-10 mb-5 w-[90%]">
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
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </span>

        <h1 className="text-[20px] text-stone-[#000000] font-semibold dark:text-[#CBD5E0]">
          Add Tag
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onsubmit)}
        autoComplete="off"
        className="mt-[30px] dark:bg-[#0c1427] rounded-[5px] bg-white  dark:border-[#172340] dark:border px-4 py-3 w-[90%]"
      >
        <FormRow label="Tag Name" error={errors?.tag?.message}>
          <input
            type="text"
            name="tag"
            placeholder="Tag name"
            {...register("tag", {
              required: "Tag name field is required",
            })}
            className={`dark:bg-[#0c1427]  dark:focus:border-[#3b4557] rounded-[10px] dark:border-[#172340] dark:text-[#d0d6e1] focus:outline-none  border  text-sm border-gray-300  p-3 mt-2 w-full`}
          />
        </FormRow>

        <div className="mt-3">
          <button
            type="submit"
            className="bg-[#6C4DE6] dark:bg-[#6C4DE6]  dark:text-white text-white transition duration-500 ease-in-out  h-[30px] py-5  font-normal text-[16px] rounded-[5px] flex items-center justify-center px-3"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default TagPage;
