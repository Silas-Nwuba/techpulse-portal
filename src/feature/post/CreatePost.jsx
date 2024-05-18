import React, { useState } from "react";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { HiArrowRight } from "react-icons/hi2";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
import { useUser } from "../authentication/useUser";
import useCreatePost from "./useCreatePost";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
const options = [
  { value: "Technology", label: "Technology" },
  { value: "Business", label: "Business" },
  { value: "Smartphone", label: "Smartphone" },
  { value: "Gadget", label: "Gadget" },
];
const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #ced4da",
    height: "45px",
    marginTop: "3px",
    borderRadius: "5px",
  }),
};

const CreatePost = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset, control } = useForm();
  const { errors } = formState;
  const { createPost, isCreating, isError } = useCreatePost();
  const isLoading = isCreating;
  const { dispatch } = useUserDropdown();
  const [createDate, setCreateDate] = useState(new Date());
  const { user } = useUser();
  const { fullname } = user.user_metadata;

  const onsubmit = (data) => {
    createPost(
      {
        ...data,
        image: data.image[0],
        title: data.title.charAt(0).toUpperCase() + data.title.slice(1),
        createdDate: format(createDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
      },
      {
        onSuccess: () => {
          reset();
        },
        onError: (errors) => {
          toast.error(errors.message);
        },
      }
    );
  };
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
        onSubmit={handleSubmit(onsubmit)}
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
            className={`disabled:opacity-50 disabled:bg-gray-100 disabled:cursor-wait disabled:border dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] disabled:border-gray-200 focus:outline-none focus:border-2 border h-[45px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
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
            className={`file:bg-violet-50  file:text-[#007bff] file:font-semibold file:rounded-full dark:file:dark:bg-[#2D3748]  dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] file:py-[0.5em] file:px-4  file:border-0 file:text-sm file: disabled:opacity-50 focus:border-2 disabled:bg-gray-100 disabled:cursor-wait disabled:border disabled:border-gray-200 focus:outline-none border h-[45px] text-sm border-gray-300 rounded-md p-1 mt-1 w-full focus:border-sky-400`}
          />
        </FormRow>
        <FormRow label="Category" error={errors?.category?.message}>
          <Controller
            name="category"
            disabled={isLoading}
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <Select
                {...register("category", {
                  required: "Category field is required",
                })}
                {...field}
                options={options}
                placeholder="Select.."
                styles={customStyles}
                className={`disabled:opacity-50 disabled:bg-gray-100 disabled:cursor-wait disabled:border dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] disabled:border-gray-200 h-[45px] mt-2 rounded-md`}
              />
            )}
          />
        </FormRow>
        <div className={`mb-5 flex flex-col`}>
          <label
            htmlFor="date"
            className="font-medium text-stone-500 dark:text-[#E2E8F0] text-sm"
          >
            Created Date
          </label>
          <DatePicker
            disabled={isLoading}
            selected={createDate}
            placeholderText="dd-mm-yyyy"
            dateFormat="dd-mm-yyyy"
            onChange={(date) => setCreateDate(date)}
            className="disabled:bg-gray-100 disabled:cursor-wait disabled:border focus:outline-none border h-[45px] rounded-md p-3 mt-1 w-full border-stone-300  dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] focus:border-sky-400 focus:border-2 placeholder:text-stone-600"
          />
          {!createDate && (
            <small className="text-red-500 text-sm font-medium dark:text-[#E53E3E]">
              Created Date is required
            </small>
          )}
        </div>
        <FormRow label="Author" error={errors?.author?.message}>
          <input
            type="text"
            defaultValue={fullname}
            name="author"
            disabled={isError ? false : isLoading}
            {...register("author", {
              required: "Author field is required",
            })}
            className={`disabled:opacity-50  disabled:bg-gray-100 disabled:cursor-wait disabled:border   dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] focus:border-2 disabled:border-gray-200 focus:outline-none border h-[45px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
          />
        </FormRow>
        <FormRow label="Summary" error={""}>
          <textarea
            height="150px"
            type="text"
            name="summary"
            disabled={isError ? false : isLoading}
            {...register("summary")}
            className={`disabled:opacity-50disabled:bg-gray-100 disabled:cursor-wait disabled:border dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0]  focus:border-2 disabled:border-gray-200  focus:outline-none border h-[150px] text-sm border-stone-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
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
            className={`disabled:opacity-50disabled:bg-gray-100 disabled:cursor-wait disabled:border dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0]  focus:border-2 disabled:border-gray-200  focus:outline-none border h-[150px] text-sm border-stone-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
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
