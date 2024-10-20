import React from "react";
import { useForm } from "react-hook-form";
import { FaExclamationCircle } from "react-icons/fa";
import { useUpdatePassword } from "./useUpdatePassword";
const UpdatePaswordForm = () => {
  const { register, handleSubmit, formState, reset, getValues } = useForm();
  const { updatePassword, isUpdatingPassword } = useUpdatePassword();
  const { errors } = formState;
  const onsubmit = ({ email }) => {
    updatePassword(
      { email },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };

  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <h1 className="font-semibold mb-5 mt-[100px] text-center sm:text-[24px] text-[22px] text-stone-[#333333]">
        Update Your Password
      </h1>
      <div className="bg-white shadow-sm w-[90%] sm:w-[70%] md:w-[50%] xl:w-[35%] py-6 px-4 rounded-[10px] mx-auto">
        <form
          className="flex flex-col justify-center mt-1"
          onSubmit={handleSubmit(onsubmit)}
        >
          <div>
            <input
              name="password"
              type="password"
              disabled={isUpdatingPassword}
              placeholder="Password must be atleast 8 characters"
              {...register("password", {
                required: "Password field is required",
              })}
              className="disabled:opacity-50 disabled:bg-gray-100 disabled:cursor-wait  text-left mt-5 disabled:border disabled:border-gray-200  border text-sm border-slate-50 font-medium focus:border-2 focus:border-sky-500 w-full py-3 px-5 rounded-full bg-slate-50 placeholder:text-stone-400 placeholder:font-medium  outline-none focus:outline-none"
            />

            {errors?.password && (
              <small className="text-red-500 text-sm flex items-center gap-2 pt-1 ml-2">
                <FaExclamationCircle className="text-red-500" />
                <span>{errors?.password?.message}</span>
              </small>
            )}
          </div>
          <div>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === getValues().password || "Password need to match",
              })}
              className="disabled:opacity-50 disabled:bg-gray-100 disabled:cursor-wait  text-left mt-5 disabled:border disabled:border-gray-200  border text-sm border-slate-50 font-medium focus:border-2 focus:border-sky-500 w-full py-3 px-5 rounded-full bg-slate-50 placeholder:text-stone-400 placeholder:font-medium  outline-none focus:outline-none"
            />
            {errors?.confirmPassword && (
              <small className="text-red-500 text-sm flex items-center gap-2 pt-1 ml-2">
                <FaExclamationCircle className="text-red-500" />
                <span>{errors?.confirmPassword?.message}</span>
              </small>
            )}
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="bg-[#6C4DE6] outline-none dark:bg-[#6C4DE6]  dark:text-white text-white transition duration-500 ease-in-out  h-[30px] py-5  font-normal text-[16px] rounded-[5px] flex items-center justify-center px-3"
            >
              {isUpdatingPassword ? "Loading..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdatePaswordForm;
