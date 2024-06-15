import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { HiArrowRight } from "react-icons/hi2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
import { useUser } from "../authentication/useUser";
import useCreatePost from "./useCreatePost";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import LoaderSpinner from "../../ui/LoaderSpinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const options = [
  { value: "", label: "Select" },
  { value: "Technology", label: "Technology" },
  { value: "Business", label: "Business" },
  { value: "SmartPhone", label: "SmartPhone" },
  { value: "Gadget", label: "Gadget" },
];
// const customStylesLight = {
//   control: (provided) => ({
//     ...provided,
//     border: "1px solid #ced4da",
//     height: "45px",
//     marginTop: "4px",
//     borderRadius: "5px",
//     backgroundColor: "#ffffff",
//   }),
// };

// const customStylesDark = {
//   control: (provided) => ({
//     ...provided,
//     border: "1px solid #4a5568",
//     height: "45px",
//     marginTop: "3px",
//     borderRadius: "5px",
//     backgroundColor: "#4a5568",
//     outLine: "none",
//   }),
// };
const CreatePost = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset, control } = useForm();
  const { errors } = formState;
  const { createPost, isCreating: isLoading, isError } = useCreatePost();
  const { dispatch } = useUserDropdown();
  const { user } = useUser();

  const onsubmit = (data) => {
    createPost(
      {
        ...data,
        image: data.image[0],
        title: data.title.charAt(0).toUpperCase() + data.title.slice(1),
        // createdDate: format(createDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
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
    document.title = "Create Post | TechPulse";
    return () => {
      document.title = "Dashboard | TechPulse";
    };
  }, []);

  return (
    <>
      {isLoading && <LoaderSpinner />}

      <div className="mt-[120px] md:mt-10 mb-5">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-[18px] text-stone-600 font-medium dark:text-[#CBD5E0]">
            Create Post
          </h1>
          <span
            className="flex items-center gap-2 text-[#007bff] text-[16px] mr-2 cursor-pointer"
            onClick={() => navigate("/post")}
          >
            <p>Back</p> <HiArrowRight />
          </span>
        </div>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="bg-white w-full px-6 py-8 rounded-md shadow dark:bg-[#2D3748] "
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
                required: "image field is required",
              })}
              className={`file:bg-violet-50 file:text-[#007bff] file:font-semibold file:rounded-full dark:file:dark:bg-[#2D3748]   dark:bg-[#4A5568] dark:border-[#3b4557] dark:text-[#CBD5E0] file:py-2 file:px-4  file:border-0 file:text-sm  focus:border-2 focus:outline-none border  text-sm border-gray-300 rounded-md p-3 mt-2 w-full focus:border-sky-400`}
            />
          </FormRow>
          <FormRow label={"Category"} error={errors?.category?.message}>
            <select
              name="category"
              {...register("category", {
                required: "Category field is required",
              })}
              className="dark:bg-[#4A5568] dark:border-[#3b4557] dark:text-[#CBD5E0] focus:outline-none focus:border-2 border  text-sm border-gray-300 rounded-md p-3 mt-2 w-full focus:border-sky-400"
            >
              {options.map((element, index) => (
                <option key={index} value={element.value}>
                  {element.label}
                </option>
              ))}
            </select>
          </FormRow>
          <div className={`mb-5 flex flex-col`}>
            <label
              htmlFor="date"
              className="font-medium text-stone-500 dark:text-[#E2E8F0] text-sm"
            >
              Created Date
            </label>
            <Controller
              name="createdDate"
              defaultValue={format(new Date(), "MM-dd-yyyy")}
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  popperPlacement="top-center"
                  dateFormat={"MM-dd-yyyy"}
                  selected={field.value}
                  onChange={(newValue) => field.onChange(newValue)}
                  className="focus:outline-none border h-[50px]  rounded-md p-3 mt-1 w-full border-stone-300  dark:bg-[#4A5568] dark:border-[#4A5568] dark:text-[#CBD5E0] focus:border-sky-400 focus:border-2 placeholder:text-stone-600"
                />
              )}
            />

            {/* <input
              type="date"
              defaultValue={createDate}
              className="focus:outline-none border rounded-md p-3 mt-2 w-full border-stone-300  dark:bg-[#4A5568] dark:border-[#3b4557] dark:text-[#CBD5E0] focus:border-sky-400 focus:border-2 placeholder:text-stone-600"
            /> */}
          </div>
          <FormRow label="Author" error={errors?.author?.message}>
            <input
              type="text"
              defaultValue={user?.user || "Ebuka"}
              name="author"
              disabled={isError ? false : isLoading}
              {...register("author", {
                required: "Author field is required",
              })}
              className={`dark:bg-[#4A5568] dark:border-[#3b4557] dark:text-[#CBD5E0] focus:border-2  focus:outline-none border  text-sm border-gray-300 rounded-md p-3 mt-2 w-full focus:border-sky-400`}
            />
          </FormRow>

          <div className="mb-2">
            <FormRow label="Summary" error={errors?.summary?.message}>
              <Controller
                name="summary"
                control={control}
                defaultValue=""
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
                    className="mt-2 overflow-auto border-stone-300 dark:bg-[#4A5568] dark:border-[#3b4557] "
                  />
                )}
              />
            </FormRow>
          </div>

          <div className="">
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
                    className="mt-2 overflow-auto  border-stone-300 dark:bg-[#4A5568] dark:border-[#3b4557] "
                  />
                )}
              />
            </FormRow>
          </div>

          <div className="flex gap-3 mt-3">
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
              name={"Publish"}
              width="w-[130px]"
              backgroundColor="bg-[#007bff]"
              hover="hover:bg-sky-500"
              marginBottom="mb-0"
              cursor={"cursor-pointer"}
              darkMode={"bg-[#4299E1]"}
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default CreatePost;
