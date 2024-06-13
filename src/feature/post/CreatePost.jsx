import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
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

const options = [
  { value: "Technology", label: "Technology" },
  { value: "Business", label: "Business" },
  { value: "SmartPhone", label: "SmartPhone" },
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
  const {
    register,
    handleSubmit,
    formState,
    reset,
    control,
    setValue,
    trigger,
  } = useForm();
  const { errors } = formState;
  const { createPost, isCreating: isLoading, isError } = useCreatePost();
  const { dispatch } = useUserDropdown();
  const [createDate, setCreateDate] = useState(new Date());
  const { user } = useUser();
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
  useEffect(() => {
    document.title = "Create Post | TechPulse";
    return () => {
      document.title = "Dashboard | TechPulse";
    };
  }, []);

  return (
    <>
      {isLoading && <LoaderSpinner />}
      <div className="mt-[120px] md:mt-10">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-[18px] text-stone-600 font-medium dark:text-[#CBD5E0]">
            Create Post
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
          className="bg-white w-full px-6 py-8 rounded-md shadow-md dark:bg-[#2D3748] "
        >
          <FormRow label="Blog Title" error={errors?.title?.message}>
            <input
              type="text"
              name="title"
              {...register("title", {
                required: "Title field is required",
              })}
              className={`dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] focus:outline-none focus:border-2 border  text-sm border-gray-300 rounded-md p-3 mt-2 w-full focus:border-sky-400`}
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
              className={`file:bg-violet-50 file:text-[#007bff] file:font-semibold file:rounded-full dark:file:dark:bg-[#2D3748]   dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] file:py-2 file:px-4  file:border-0 file:text-sm  focus:border-2 focus:outline-none border  text-sm border-gray-300 rounded-md p-3 mt-2 w-full focus:border-sky-400`}
            />
          </FormRow>
          <FormRow label={"Category"} error={errors?.category?.message}>
            <Controller
              name="category"
              control={control}
              defaultValue={null}
              rules={{
                required: "Category field is required",
              }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={options}
                  placeholder="Select.."
                  styles={customStyles}
                  onChange={(option) => {
                    field.onChange(option);
                    setValue("category", option);
                    trigger("category");
                  }}
                  className={` dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] mt-2 rounded-md`}
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
            <input
              type="date"
              defaultValue={createDate}
              className="focus:outline-none border rounded-md p-3 mt-2 w-full border-stone-300  dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] focus:border-sky-400 focus:border-2 placeholder:text-stone-600"
            />
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
              className={`dark:bg-[#4A5568] dark:border-[#CBD5E0] dark:text-[#CBD5E0] focus:border-2  focus:outline-none border  text-sm border-gray-300 rounded-md p-3 mt-2 w-full focus:border-sky-400`}
            />
          </FormRow>
          <div className="space-y-10">
            <FormRow label="Summary">
              <Controller
                name="summary"
                control={control}
                defaultValue=""
                rules={{ required: "Summary field is required" }}
                render={({ field }) => (
                  <ReactQuill
                    {...field}
                    onChange={(content) => field.onChange(content)}
                    className="h-[100px] mt-2 border-stone-300"
                  />
                )}
              />
            </FormRow>

            <FormRow label="Content">
              <Controller
                name="content"
                control={control}
                defaultValue=""
                rules={{ required: "Content field is required" }}
                render={({ field }) => (
                  <ReactQuill
                    {...field}
                    onChange={(content) => field.onChange(content)}
                    className="h-[200px] mt-2  border-stone-300 text-xl"
                  />
                )}
              />
            </FormRow>
          </div>
          <div className="flex gap-3 mt-10">
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
