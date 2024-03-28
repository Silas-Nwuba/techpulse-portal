import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { FaExclamationCircle } from "react-icons/fa";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";
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
  useEffect(() => {
    document.title = "Update password - TechPulse";
    return () => {
      document.title = "Update password - TechPulse";
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <h1 className="font-semibold mb-5 mt-[100px] text-center sm:text-[24px] text-[22px] text-stone-[#333333]">
        Update Your Password
      </h1>
      <div className="bg-white shadow-sm w-[90%] sm:w-[70%] md:w-[50%] xl:w-[35%] py-6 px-4 rounded-md mx-auto">
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
          <Button
            name={"Update Password"}
            rounded="rounded-full"
            hover="hover-sky-600"
            marginBottom="mb-1"
            marginTop="mt-4"
            loading={isUpdatingPassword}
          >
            <MiniLoaderSpinner />
          </Button>
        </form>
      </div>
      <div className=" w-full text-center border-stone-200 border-t mt-[145px]">
        <p className="py-2 px-3 text-stone-600 text-sm pt-7">
          &copy; {new Date().getFullYear()} TechPulse. All right reserverd.
        </p>
      </div>
    </div>
  );
};
export default UpdatePaswordForm;
