import React from "react";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import useCreateCategory from "./useCreateCategory";
import { useEditCategory } from "./useEditCategory";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";

const CategoryForm = ({ setShowForm, data, setEditForm, showEditForm }) => {
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: data,
  });
  const { createCategory, isCreating } = useCreateCategory();
  const { editCategory, isEditing } = useEditCategory();
  const { errors } = formState;
  const onsubmit = (formData) => {
    if (formData.id) {
      const updataData = {
        id: formData.id,
        category: formData.category,
        description: formData.description,
        status: formData.status,
      };

      editCategory(
        updataData,

        {
          onSettled: () => {
            setEditForm(false);
          },
        }
      );
    } else {
      createCategory(
        { data },
        {
          onSettled: () => {
            reset();
            setShowForm(false);
          },
        }
      );
    }
  };
  const handleCancelForm = () => {
    setShowForm(false);
    setEditForm(false);
  };

  return (
    <div className="bg-white xl:w-[40%] lg:w-[30%] md:w-[40%] sm:w-[50%] w-[95%] xs:w-[90%] dark:border-none z-[10000] border dark:bg-[#0c1427] rounded-[10px] py-[10px] px-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl  transistion duration-300 ease-in-out">
      <form
        onSubmit={handleSubmit(onsubmit)}
        autoComplete="off"
        className="mt-[10px] px-4 py-3 w-full"
      >
        <FormRow label="Category" error={errors?.category?.message}>
          <input
            type="text"
            name="category"
            placeholder="Category"
            {...register("category", {
              required: "Category field is required",
            })}
            className={`dark:bg-[#0c1427] dark:border-[#172340] capitalize focus:border-[#6C4DE6] dark:focus:border-[#3b4557] dark:text-[#d0d6e1] focus:outline-none  border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full`}
          />
        </FormRow>
        <FormRow label="Description" error={errors?.description?.message}>
          <textarea
            name="description"
            placeholder="Description"
            {...register("description", {
              required: "Description field is required",
              maxLength: {
                value: 50,
                message: "Description should be at least 50 characters",
              },
            })}
            className={`dark:bg-[#0c1427] focus:border-[#6C4DE6] dark:border-[#172340] dark:focus:border-[#3b4557] dark:text-[#d0d6e1] focus:outline-none  border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full h-20`}
          ></textarea>
        </FormRow>
        {showEditForm ? (
          <select
            name="status"
            {...register("status")}
            className="dark:bg-[#0c1427] dark:border-[#172340] capitalize focus:border-[#6C4DE6] dark:focus:border-[#3b4557] dark:text-[#d0d6e1] focus:outline-none  border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full"
          >
            <option selected value={data.status}>
              {data.status}
            </option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        ) : (
          <div>
            <span className="flex gap-2 items-center">
              <label
                htmlFor="status"
                className="font-medium flex text-stone-[#000000] dark:text-[#d0d6e1] text-[16px] mb-1"
              >
                Status
              </label>
              <span className="text-red-600  dark:text-[#d0d6e1]">*</span>
            </span>
            <select
              name="status"
              {...register("status", { required: true })}
              className="dark:bg-[#0c1427] dark:border-[#172340] capitalize focus:border-[#6C4DE6] dark:focus:border-[#3b4557] dark:text-[#d0d6e1] focus:outline-none  border  text-sm border-gray-300 rounded-[10px] p-3 mt-2 w-full"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        )}
        <div className="mt-4 flex items-center gap-5">
          <button
            type="submit"
            onClick={handleCancelForm}
            className="bg-slate-100 dark:bg-transparent dark:border-[#777777] dark:border   dark:text-stone-300 text-stone-700 transition duration-500 ease-in-out  py-2  font-normal text-[16px] rounded-[5px] flex items-center justify-center px-4"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`${
              isCreating || isEditing
                ? "grid grid-cols-3 items-center justify-center"
                : ""
            }  bg-[#6C4DE6] dark:bg-[#6C4DE6] dark:text-white text-white transition duration-500 ease-in-out  w-[100px] py-2  text-center font-normal text-[16px] rounded-[5px] px-2`}
          >
            {isCreating || isEditing ? <MiniLoaderSpinner /> : ""}
            {showEditForm ? (
              <p className={` ${isCreating && "mr-10"} text-center`}>Update</p>
            ) : (
              <p className={` ${isCreating && "mr-10"} text-center`}>Submit</p>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
export default CategoryForm;
