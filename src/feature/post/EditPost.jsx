import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import ReactQuill from "react-quill";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import useEditPost from "./useEditPost";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import useGetEditPostById from "./useGetEditPostById";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
import FullPageLoaderSpinner from "../../ui/FullPageLoaderSpinner";
import { useUser } from "../authentication/useUser";
import NotFoundError from "../../ui/NotFoundError";
import LoaderSpinner from "../../ui/LoaderSpinner";
import { format } from "date-fns";

const options = [
  { value: "Technology", label: "Technology" },
  { value: "Business", label: "Business" },
  { value: "Gadget", label: "Gadget" },
  { value: "Apps", label: "Apps" },
];
const EditPost = () => {
  const { dispatch } = useUserDropdown();
  const navigate = useNavigate();
  const { data, isFetching, error } = useGetEditPostById();
  console.log(data);
  const { editPost, isEditing } = useEditPost();
  const { register, handleSubmit, formState, reset, control } = useForm({
    values: { ...data },
  });
  const { errors } = formState;
  const { user } = useUser();
  const onsubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    editPost(
      {
        newPostData: {
          ...data,
          image,
          title: data.title.charAt(0).toUpperCase() + data.title.slice(1),
        },
        id: data.id,
      },
      {
        onSuccess: () => {
          reset();
        },
        onError: () => {},
      }
    );
  };
  useEffect(() => {
    document.title = "Edit Post | TechPulse";
    return () => {
      document.title = "Dashboard | TechPulse";
    };
  }, []);

  if (isFetching) return <FullPageLoaderSpinner />;
  if (error) return <NotFoundError />;
  return (
    <>
      {isEditing && <LoaderSpinner />}
      <div className="md:mt-10 mt-[120px] mb-10">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-[18px] text-stone-600 font-semibold dark:text-[#CBD5E0]">
            Update Post
          </h1>
          <span
            className="flex items-center gap-2 text-[#007bff] text-[16px] mr-2 cursor-pointer"
            onClick={() => navigate("/post")}
          >
            <p>Back</p>
            <HiArrowRight />
          </span>
        </div>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="bg-white px-4 py-5 space-y-2 rounded-md shadow dark:bg-[#2D3748]"
        >
          <FormRow label="Blog Title" error={errors?.title?.message}>
            <input
              type="text"
              name="title"
              {...register("title", {
                required: "Title field is required",
              })}
              className={`dark:bg-[#4A5568] dark:border-[#3b4557] dark:text-[#CBD5E0] focus:outline-none focus:border-2 border  text-sm border-gray-300 rounded-md p-3 mt-2 w-full focus:border-sky-400`}
            />
          </FormRow>
          <FormRow label="Image" error={errors?.image?.message}>
            <input
              type="file"
              name="image"
              accept="image/*"
              {...register("image", {
                required: data?.image ? false : "image field is required",
              })}
              className={`file:bg-violet-50 file:text-[#007bff] file:font-semibold file:rounded-full dark:file:dark:bg-[#2D3748]   dark:bg-[#4A5568] dark:border-[#3b4557] dark:text-[#CBD5E0] file:py-2 file:px-4  file:border-0 file:text-sm  focus:border-2 focus:outline-none border  text-sm border-gray-300 rounded-md p-3 mt-2 w-full focus:border-sky-400`}
            />
          </FormRow>
          <FormRow label="Category" error={errors?.category?.message}>
            <select
              name="category"
              defaultValue={data?.category}
              {...register("category", {
                required: "Category field is required",
              })}
              className="dark:bg-[#4A5568] dark:border-[#3b4557] dark:text-[#CBD5E0] focus:outline-none focus:border-2 border  text-sm border-gray-300 rounded-md p-3 mt-2 w-full focus:border-sky-400"
            >
              {options.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
          </FormRow>
          <div className="mb-5 flex flex-col">
            <label
              htmlFor="createDate"
              className="font-medium text-stone-700 dark:text-[#E2E8F0] text-sm"
            >
              Created Date
            </label>
            <Controller
              name="createdDate"
              rules={{ required: "Created Date is required" }}
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  selected={field.value}
                  defaultValue={format(data.createdDate, "MM-dd-yyyy")}
                  placeholderText="dd-mm-yyyy"
                  dateFormat="dd-MM-yyyy"
                  onChange={(date) => field.onChange(date)}
                  className="focus:outline-none mb-3 border h-[50px] rounded-md p-3 mt-1 w-full border-stone-300  dark:bg-[#4A5568] dark:border-[#4A5568] dark:text-[#CBD5E0] focus:border-sky-400 focus:border-2 placeholder:text-stone-600"
                />
              )}
            />
            {errors?.date && (
              <small className="text-red-500 text-sm font-medium dark:text-[#E53E3E]">
                {errors?.date?.message}
              </small>
            )}
          </div>
          <FormRow label="Author" error={errors?.author?.message}>
            <input
              type="text"
              defaultValue={user?.user_metadata.fullname}
              name="author"
              {...register("author", {
                required: "Author field is required",
              })}
              className={`dark:bg-[#4A5568] dark:border-[#4A5568] dark:text-[#CBD5E0] focus:border-2 focus:outline-none border h-[50px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
            />
          </FormRow>
          <FormRow label="Summary" error={errors?.summary?.message}>
            <Controller
              name="summary"
              control={control}
              // rules={{ required: "Summary field is required" }}
              render={({ field }) => (
                <ReactQuill
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ size: [] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link", "image", "video"],
                      ["clean"],
                    ],
                  }}
                  {...field}
                  onChange={(content) => field.onChange(content)}
                  className="mt-2 overflow-auto  border-stone-300 dark:bg-[#4A5568] dark:border-[#3b4557]"
                />
              )}
            />
          </FormRow>
          <FormRow label="Content" error={errors?.content?.message}>
            <Controller
              name="content"
              control={control}
              rules={{ required: "Content field is required" }}
              render={({ field }) => (
                <ReactQuill
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ size: [] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link", "image", "video"],
                      ["clean"],
                    ],
                  }}
                  {...field}
                  onChange={(content) => field.onChange(content)}
                  className="mt-2 overflow-auto  border-stone-300 dark:bg-[#4A5568] dark:border-[#3b4557]"
                />
              )}
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
                navigate("/post");
                dispatch({ type: "closeUserDropdown", payload: false });
              }}
            />
            <Button
              name={"Update"}
              width="w-[130px]"
              backgroundColor="bg-[#007bff]"
              hover="hover:bg-sky-500"
              marginBottom="mb-0"
              cursor={"cursor-pointer"}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPost;
