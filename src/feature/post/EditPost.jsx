import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import ReactQuill from "react-quill";
import FormRow from "../../ui/FormRow";
import useEditPost from "./useEditPost";
import { useNavigate } from "react-router-dom";
import useGetEditPostById from "./useGetEditPostById";
import FullPageLoaderSpinner from "../../ui/FullPageLoaderSpinner";
import { useUser } from "../authentication/useUser";
import NotFoundError from "../../ui/NotFoundError";
import LoaderSpinner from "../../ui/LoaderSpinner";
import { format } from "date-fns";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";
const options = [
  { value: "latest post", label: "Lastest Post" },
  { value: "top stories", label: "Top Stories" },
  { value: "post", label: "Post" },
];
const category = [
  { value: "", label: "Select" },
  { value: "technology", label: "Technology" },
  { value: "business", label: "Business" },
  { value: "gadget", label: "Gadget" },
  { value: "social apps", label: " Social Apps" },
];
const EditPost = () => {
  const navigate = useNavigate();
  const { data, isFetching, error } = useGetEditPostById();
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
    document.title = "TekMatas | Edit Post";
    window.scrollTo({ top: 0 });
  }, []);

  if (isFetching) return <FullPageLoaderSpinner />;
  if (error) return <NotFoundError />;

  return (
    <>
      {isEditing && <LoaderSpinner />}
      <div className="md:mt-10 mt-[120px] mb-10 w-[80%] ml-3">
        <div className="flex items-center gap-2 mb-5">
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

          <h1 className="text-[22px] text-stone-[#000000] font-semibold dark:text-[#CBD5E0]">
            Update Post
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="bg-white px-4 py-5 space-y-2 rounded-[10px] dark:bg-[#0c1427]   border-[#172340] dark:border"
        >
          <FormRow label="Blog Title" error={errors?.title?.message}>
            <input
              type="text"
              name="title"
              {...register("title", {
                required: "Title field is required",
              })}
              className={`dark:bg-[#0c1427] dark:disabled:bg-[#212a3a] dark:border-[#172340] dark:focus:border-[#3b4557] placeholder:text-[#d0d6e1] dark:text-[#d0d6e1] focus:outline-none  border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full`}
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
              className={`dark:bg-[#0c1427] file:bg-slate-100 file:text-stone-700 file:font-medium dark:focus:border-[#3b4557] dark:disabled:bg-[#212a3a] dark:border-[#172340] dark:file:bg-[#212a3a]  dark:text-[#d0d6e1] file:border-0 file:p-3 file:text-[12px] dark:file:text-[#d0d6e1] border  text-sm border-gray-300 rounded-[10px] mt-2 w-full`}
            />
          </FormRow>

          <FormRow label={"Feature"} error={errors?.feature?.message}>
            <select
              name="feature"
              {...register("feature", {
                required: "Feature field is required",
              })}
              className={`dark:bg-[#0c1427] dark:disabled:bg-[#212a3a] dark:border-[#172340] dark:focus:border-[#3b4557] placeholder:text-[#d0d6e1] dark:text-[#d0d6e1] focus:outline-none  border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full`}
            >
              {options.map((element, index) => (
                <option key={index} value={element.value}>
                  {element.label}
                </option>
              ))}
            </select>
          </FormRow>

          <FormRow label="Category" error={errors?.category?.message}>
            <select
              name="category"
              defaultValue={data?.category}
              {...register("category", {
                required: "Category field is required",
              })}
              className="dark:bg-[#0c1427] dark:border-[#172340] dark:disabled:bg-[#212a3a] dark:focus:border-[#3b4557]  dark:text-[#d0d6e1] focus:outline-none border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full focus:border-sky-400"
            >
              {category.map((item) => (
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
                  className="dark:bg-[#0c1427] dark:border-[#172340] dark:disabled:bg-[#212a3a] dark:focus:border-[#3b4557]  dark:text-[#d0d6e1] focus:outline-none border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full focus:border-sky-400"
                />
              )}
            />
            {errors?.date && (
              <small className="text-red-500 text-sm font-medium dark:text-[#E53E3E]">
                {errors?.date?.message}
              </small>
            )}
          </div>
          <FormRow label="Image Credit">
            <input
              type="text"
              name="credit"
              className={`dark:bg-[#0c1427] dark:disabled:bg-[#212a3a] dark:border-[#172340] dark:focus:border-[#3b4557] placeholder:text-[#d0d6e1] dark:text-[#d0d6e1] focus:outline-none  border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full`}
            />
          </FormRow>
          <FormRow label="Author" error={errors?.author?.message}>
            <input
              type="text"
              defaultValue={user?.user_metadata.fullname}
              name="author"
              {...register("author", {
                required: "Author field is required",
              })}
              className={`dark:bg-[#0c1427] dark:focus:border-[#3b4557] disabled:bg-slate-50 dark:disabled:bg-[#212a3a] dark:border-[#172340]  dark:text-[#d0d6e1] focus:outline-none border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full focus:border-sky-400`}
            />
          </FormRow>
          <FormRow label="Summary" error={errors?.summary?.message}>
            <Controller
              name="summary"
              control={control}
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
                  className="mt-2 overflow-auto  border-stone-300 dark:disabled:bg-[#212a3a] dark:bg-[#0c1427] dark:border-[#172340] dark:text-[#d0d6e1]"
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
                  className="mt-2 overflow-auto  border-stone-300 dark:disabled:bg-[#212a3a] dark:bg-[#0c1427] dark:border-[#172340]  dark:text-[#d0d6e1] "
                />
              )}
            />
          </FormRow>
          <div className="mt-3">
            <button
              type="submit"
              className="bg-[#6C4DE6] dark:bg-[#6C4DE6]  dark:text-white text-white w-[120px] transition duration-500 ease-in-out  h-[30px] py-5  font-normal text-[16px] rounded-[5px] flex items-center justify-center px-3"
            >
              {isEditing ? <MiniLoaderSpinner /> : "Update Post"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default EditPost;
