import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useCreatePost from "./useCreatePost";
import FormRow from "../../ui/FormRow";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";
import { useGetAllCategory } from "../category/useGetAllCategory";
import { useGetAllTag } from "../tag/useGetAllTag";
const options = [
  { value: "latest post", label: "Lastest Post" },
  { value: "top stories", label: "Top Stories" },
  { value: "post", label: "Post" },
];

const CreatePost = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset, control } = useForm();
  const { errors } = formState;
  const { createPost, isCreating: isLoading } = useCreatePost();
  const { data, isLoading: isLoadingCategory } = useGetAllCategory();
  const { data: tag } = useGetAllTag();
  console.log(tag);

  const onsubmit = (data) => {
    createPost(
      {
        ...data,
        image: data.image[0],
        title: data.title.charAt(0).toUpperCase() + data.title.slice(1),
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
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <div className="mt-[120px] md:mt-12 mb-5  ml-3">
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
            Add Post
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onsubmit)}
          autoComplete="off"
          className="bg-white w-[93%] xl:w-[85%] px-6 py-8 rounded-[10px]  dark:bg-[#0c1427]"
        >
          <FormRow label="Blog Title" error={errors?.title?.message}>
            <input
              type="text"
              name="title"
              disabled={isLoading}
              {...register("title", {
                required: "Title field is required",
              })}
              className={`dark:bg-[#0c1427] dark:disabled:bg-[#212a3a] dark:border-[#172340] dark:focus:border-[#3b4557] placeholder:text-[#d0d6e1] dark:text-[#d0d6e1] focus:outline-none  border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full`}
            />
          </FormRow>
          <FormRow label={"Feature"} error={errors?.feature?.message}>
            <select
              name="feature"
              disabled={isLoading}
              {...register("feature", {
                required: "Feature field is required",
              })}
              className="dark:bg-[#0c1427] dark:border-[#172340] dark:disabled:bg-[#212a3a] dark:focus:border-[#3b4557]  dark:text-[#d0d6e1] focus:outline-none border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full focus:border-sky-400"
            >
              <option value="" selected className="dark:text-[#d0d6e1]">
                Select
              </option>
              {options.map((element, index) => (
                <option key={index} value={element.value}>
                  {element.label}
                </option>
              ))}
            </select>
          </FormRow>
          <FormRow label={"Category"} error={errors?.category?.message}>
            <select
              name="category"
              disabled={isLoading || isLoadingCategory}
              {...register("category", {
                required: "Category field is required",
              })}
              className="dark:bg-[#0c1427] capitalize dark:border-[#172340] dark:disabled:bg-[#212a3a] dark:focus:border-[#3b4557] dark:text-[#d0d6e1] focus:outline-none border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full focus:border-sky-400"
            >
              {isLoadingCategory ? <option>Loadding..</option> : ""}
              <option selected value={""}>
                Select
              </option>
              {data?.map((element, index) => (
                <option key={index} value={element.category}>
                  {element.category}
                </option>
              ))}
            </select>
          </FormRow>

          <FormRow label={"Post Tag"} error={errors?.tag?.message}>
            <select
              name="tag"
              disabled={isLoading || isLoadingCategory}
              {...register("tag", {
                required: "Tag field is required",
              })}
              className="dark:bg-[#0c1427] capitalize dark:border-[#172340] dark:disabled:bg-[#212a3a] dark:focus:border-[#3b4557] dark:text-[#d0d6e1] focus:outline-none border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full focus:border-sky-400"
            >
              {isLoadingCategory ? <option>Loadding..</option> : ""}
              <option selected value={""}>
                Select
              </option>
              {tag?.map((element, index) => (
                <option key={index} value={element.name}>
                  {element.name}
                </option>
              ))}
            </select>
          </FormRow>

          <div className={`mb-5 flex flex-col`}>
            <label
              htmlFor="date"
              className="font-medium text-stone-500 dark:text-[#d0d6e1] mb-2 text-[13px]"
            >
              Created Date
            </label>
            <Controller
              name="createdDate"
              disabled={isLoading}
              defaultValue={format(new Date(), "MM-dd-yyyy")}
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  popperPlacement="top-center"
                  dateFormat={"MM-dd-yyyy"}
                  selected={field.value}
                  onChange={(newValue) => field.onChange(newValue)}
                  className="focus:outline-none border h-[50px] dark:disabled:bg-[#212a3a]  dark:focus:border-[#3b4557] rounded-[10px] p-3 mt-1 w-full border-stone-300  dark:bg-[#0c1427] dark:border-[#172340]  dark:text-[#d0d6e1] placeholder:text-stone-600"
                />
              )}
            />
          </div>

          <FormRow label="Author" error={errors?.author?.message}>
            <input
              type="text"
              disabled={true}
              value="Ebuka Nwuba"
              name="author"
              // {...register("author", {
              //   required: "Author field is required",
              // })}
              className={`dark:bg-[#0c1427] dark:focus:border-[#3b4557] disabled:bg-slate-50 dark:disabled:bg-[#212a3a] dark:border-[#172340]  dark:text-[#d0d6e1] focus:outline-none border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full focus:border-sky-400`}
            />
          </FormRow>
          <FormRow label="Image" error={errors?.image?.message}>
            <input
              type="file"
              name="image"
              disabled={isLoading}
              accept="image/*"
              {...register("image", {
                required: "image field is required",
              })}
              className={`dark:bg-[#0c1427] file:bg-slate-100 file:text-stone-700 file:font-medium dark:focus:border-[#3b4557] dark:disabled:bg-[#212a3a] dark:border-[#172340] dark:file:bg-[#212a3a]  dark:text-[#d0d6e1] file:border-0 file:p-3 file:text-[12px] dark:file:text-[#d0d6e1] border  text-sm border-gray-300 rounded-[10px] mt-2 w-full`}
            />
          </FormRow>
          <FormRow label="Image Credit">
            <input
              type="text"
              name="credit"
              disabled={isLoading}
              className={`dark:bg-[#0c1427] dark:focus:border-[#3b4557] dark:disabled:bg-[#212a3a] dark:border-[#172340] dark:text-[#d0d6e1] focus:outline-none border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full focus:border-sky-400`}
            />
          </FormRow>
          <div className="mb-2">
            <FormRow label="Summary" error={errors?.summary?.message}>
              <Controller
                name="summary"
                disabled={isLoading}
                control={control}
                rules={{ required: "Summary field is required" }}
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
          </div>
          <div>
            <FormRow label="Content" error={errors?.content?.message}>
              <Controller
                name="content"
                control={control}
                rules={{ required: "Content field is required" }}
                disabled={isLoading}
                render={({ field }) => (
                  <ReactQuill
                    modules={{
                      toolbar: [
                        [{ header: "1" }, { header: "2" }, { font: [] }],
                        [{ size: [] }],
                        [
                          "bold",
                          "italic",
                          "underline",
                          "strike",
                          "blockquote",
                          "color",
                        ],
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
                    className="mt-2 overflow-auto  border-stone-300 dark:disabled:bg-[#212a3a] dark:bg-[#0c1427] dark:border-[#172340]  dark:text-[#d0d6e1]"
                  />
                )}
              />
            </FormRow>
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="bg-[#6C4DE6] dark:bg-[#6C4DE6]  dark:text-white text-white transition duration-500 ease-in-out w-[120px]  h-[30px] py-5  font-normal text-[16px] rounded-[5px] flex items-center justify-center px-3"
            >
              {isLoading ? <MiniLoaderSpinner /> : " Publish Post"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default CreatePost;
