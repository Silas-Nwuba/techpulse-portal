<<<<<<< HEAD

import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import useCreatePost from "./useCreatePost";
import FormRow from "../../ui/FormRow";
import toast from "react-hot-toast";
<<<<<<< HEAD
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import "react-datepicker/dist/react-datepicker.css";
=======
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
<<<<<<< HEAD
import { useUser } from "../authentication/useUser";
=======
>>>>>>> 2240043135df3e38123bbfa092520827935184bb

const CreatePost = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { createPost, isCreating, isError } = useCreatePost();
  const isLoading = isCreating;
  const { dispatch } = useUserDropdown();
<<<<<<< HEAD
  const [startDate, setStartDate] = useState(new Date())
  const {user} = useUser()
  const {fullname} = user.user_metadata

=======
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
  const onsubmit = (data) => {
    createPost(
      {
        ...data,
        image: data.image[0],
      },
      {
        onSettled: () => {
          reset();
        },
        onError: (errors) => {
          toast.error(errors.message);
        },
      }
    );
  };
  const onerror = (error) => {};
<<<<<<< HEAD

=======
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
  return (
    <div className="mt-[120px] md:mt-10 mb-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-[18px] text-stone-600 font-semibold dark:text-[#CBD5E0]">
          Create New Post
        </h1>
        <span
          className="flex items-center gap-2 text-[#007bff] text-[16px] mr-2 cursor-pointer"
          onClick={() => navigate("/admin/post")}
        >
          <p>Back</p> <HiArrowRight />
        </span>
      </div>
      <form
        onSubmit={handleSubmit(onsubmit, onerror)}
        className="bg-white px-4 py-5 rounded-md shadow-sm dark:bg-[#2D3748]"
      >
        <FormRow label="Blog Title" error={errors?.title?.message}>
          <input
            type="text"
            name="title"
            disabled={isError ? false : isLoading}
            {...register("title", {
              required: "Title field is required",
            })}
<<<<<<< HEAD
            className={`disabled:opacity-50 disabled:bg-gray-100 disabled:cursor-wait disabled:border dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] disabled:border-gray-200 focus:outline-none focus:border-2 border h-[50px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
=======
            className={`disabled:opacity-50 ${
              errors?.title
                ? "border-red-400 focus:border-red-400 focus:border"
                : ""
            } disabled:bg-gray-100 disabled:cursor-wait disabled:border dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] disabled:border-gray-200 focus:outline-none focus:border-2 border h-[50px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
          />
        </FormRow>
        <FormRow label="Image" error={errors?.image?.message}>
          <input
            type="file"
            name="image"
            accept="image/*"
            disabled={isError ? false : isLoading}
            {...register("image", {
              required: "image field is required",
            })}
<<<<<<< HEAD
            className={`file:bg-violet-50  file:text-[#007bff] file:font-semibold file:rounded-full dark:file:dark:bg-[#2D3748]  dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] file:py-2 file:px-4  file:border-0 file:text-sm file: disabled:opacity-50 focus:border-2 disabled:bg-gray-100 disabled:cursor-wait disabled:border disabled:border-gray-200 focus:outline-none border h-[55px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
=======
            className={`file:bg-violet-50 ${
              errors?.image
                ? "border-red-400 focus:border-red-400 focus:border"
                : ""
            }  file:text-[#007bff] file:font-semibold file:rounded-full dark:file:dark:bg-[#2D3748]  dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] file:py-2 file:px-4  file:border-0 file:text-sm file: disabled:opacity-50 focus:border-2 disabled:bg-gray-100 disabled:cursor-wait disabled:border disabled:border-gray-200 focus:outline-none border h-[55px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
          />
        </FormRow>
        <FormRow label="Category" error={errors?.category?.message}>
          <select
            name="category"
            disabled={isLoading}
            {...register("category", {
              required: "Category field is required",
            })}
<<<<<<< HEAD
            className={`disabled:opacity-50 
           disabled:bg-gray-100 disabled:cursor-wait disabled:border  dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] disabled:border-gray-200 focus:outline-none border h-[50px] focus:border-2 text-sm border-stone-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
          >
            <option value="">Select</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="SmartPhone">SmartPhone</option>
            <option value="Gadget">Gadjet</option>
          </select>
        </FormRow>
        <div className={`mb-5 flex flex-col`} > 
        <label htmlFor="date" className="font-medium text-stone-500 dark:text-[#E2E8F0] text-sm">Created Date</label>
        <DatePicker  selected={startDate} placeholderText="dd-mm-yyyy" dateFormat="dd-MM-yyyy" onChange={(date) => setStartDate(date)} className="disabled:bg-gray-100 disabled:cursor-wait disabled:border focus:outline-none border h-[50px] rounded-md p-3 mt-1 w-full border-stone-300  dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] focus:border-sky-400 focus:border-2 placeholder:text-stone-600"/>
        {!startDate && <small className="text-red-500 text-sm font-medium dark:text-[#E53E3E]">
        Created Date is required</small>}
        </div>
        <FormRow label="Author" error={errors?.author?.message}>
          <input
            type="text"
            defaultValue={fullname}
=======
            className={`disabled:opacity-50 ${
              errors?.category
                ? "border-red-400 focus:border-red-400 focus:border"
                : ""
            } disabled:bg-gray-100 disabled:cursor-wait disabled:border  dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] disabled:border-gray-200 focus:outline-none border h-[50px] focus:border-2 text-sm border-stone-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
          >
            <option value="">Select</option>
            <option value="Technology">Technology</option>
            <option value="Gadget">Gadjet</option>
            <option value="Business">Business</option>
          </select>
        </FormRow>
        <FormRow label="Created Date" error={errors?.createdDate?.message}>
          <input
            type="date"
            name="createDate"
            disabled={isError ? false : isLoading}
            {...register("createdDate", {
              required: "Created date field is required",
            })}
            className={`disabled:opacity-50 ${
              errors?.createdDate
                ? "border-red-400 focus:border-red-400 focus:border"
                : ""
            } disabled:bg-gray-100 disabled:cursor-wait disabled:border dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] disabled:border-gray-200 focus:outline-none border h-[50px]  focus:border-2 text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
          />
        </FormRow>
        <FormRow label="Author" error={errors?.author?.message}>
          <input
            type="text"
            defaultValue="Ebuka"
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
            name="author"
            disabled={isError ? false : isLoading}
            {...register("author", {
              required: "Author field is required",
            })}
<<<<<<< HEAD
            className={`disabled:opacity-50  disabled:bg-gray-100 disabled:cursor-wait disabled:border   dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] focus:border-2 disabled:border-gray-200 focus:outline-none border h-[50px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
=======
            className={`disabled:opacity-50 ${
              errors?.author
                ? "border-red-400 focus:border-red-400 focus:border"
                : ""
            } disabled:bg-gray-100 disabled:cursor-wait disabled:border   dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] focus:border-2 disabled:border-gray-200 focus:outline-none border h-[50px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
          />
        </FormRow>
        <FormRow label="Content" error={errors?.content?.message}>
          <textarea
            height="150px"
            type="text"
            name="content"
            disabled={isError ? false : isLoading}
            {...register("content", {
              required: "Content field is required",
            })}
<<<<<<< HEAD
            className={`disabled:opacity-50disabled:bg-gray-100 disabled:cursor-wait disabled:border dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0]  focus:border-2 disabled:border-gray-200  focus:outline-none border h-[150px] text-sm border-stone-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
=======
            className={`disabled:opacity-50 ${
              errors?.content
                ? "border-red-400 focus:border-red-400 focus:border"
                : ""
            } disabled:bg-gray-100 disabled:cursor-wait disabled:border dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0]  focus:border-2 disabled:border-gray-200  focus:outline-none border h-[150px] text-sm border-stone-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
          />
        </FormRow>
        <div className="flex gap-3">
          <Button
            name="Back"
            backgroundColor="bg-slate-100"
            width="w-[120px]"
            hover="hover:bg-gray-200"
            color="text-stone-600"
            marginBottom="mb-0"
            onClick={() => {
              navigate("/admin/post");
              dispatch({ type: "closeUserDropdown", payload: false });
            }}
          />
          <Button
            name={"Publish"}
            width="w-[130px]"
            backgroundColor="bg-[#007bff]"
            hover="hover:bg-sky-500"
            marginBottom="mb-0"
            cursor={isLoading ? "cursor-wait" : "cursor-pointer"}
            loading={isLoading}
            darkMode={"bg-[#4299E1]"}
          >
            <MiniLoaderSpinner />
          </Button>
        </div>
      </form>
    </div>
  );
};
export default CreatePost;
