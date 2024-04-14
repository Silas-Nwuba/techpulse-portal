import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import { useResetPassword } from "./useResetPassword";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";

const ResetPasswordForm = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { resetPassword, isReseting } = useResetPassword();
  const { errors } = formState;
  const onsubmit = ({ email }) => {
    resetPassword(
      { email },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };
  useEffect(() => {
    document.title = "Reset password - TechPulse";
    return () => {
      document.title = "Reset password - TechPulse";
    };
  });
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <h1 className="font-semibold mb-5 mt-[100px] text-[22px]  text-stone-600 sm:text-[24px] text-center ">
        Reset Your Password
      </h1>
      <div className="bg-white shadow-sm w-[90%] sm:w-[70%] md:w-[50%] xl:w-[35%] py-6 px-4 rounded-md mx-auto">
        <form
          className="flex flex-col justify-center mt-4"
          onSubmit={handleSubmit(onsubmit)}
        >
          <p className="text-[16px] text-stone-500 text-center">
            Enter the email address you registerd with.
          </p>
          <div>
            <input
              type="email"
              name="email"
              disabled={isReseting}
              placeholder="Email address"
              {...register("email", { required: "Enter address is required" })}
              className="disabled:opacity-50 disabled:bg-gray-100 disabled:cursor-wait  text-left mt-5 disabled:border disabled:border-gray-200  border text-sm border-slate-50 font-medium focus:border-2 focus:border-sky-500 w-full py-3 px-5 rounded-full bg-slate-50 placeholder:text-stone-400 placeholder:font-medium  outline-none focus:outline-none"
            />
            {errors?.email && (
              <small className="text-red-500 text-sm flex items-center gap-2 pt-1 ml-2">
                <FaExclamationCircle className="text-red-500" />
                <span>{errors?.email?.message}</span>
              </small>
            )}
          </div>
          <Button
            name={"Reset Password"}
            rounded="rounded-full"
            hover="hover-sky-600"
            marginBottom="mb-1"
            marginTop="mt-4"
            loading={isReseting}
          >
            <MiniLoaderSpinner />
          </Button>
        </form>
        <Link to={"/admin/login"}>
          <p className="text-sm text-[#007bff] pt-2 text-center font-medium">
            Back to Login
          </p>
        </Link>
      </div>
      <div className=" w-full text-center border-stone-200 border-t mt-[160px]">
        <p className="py-2 px-3 text-stone-600 text-sm pt-4">
          &copy; {new Date().getFullYear()} TechPulse. All right reserverd.
        </p>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
