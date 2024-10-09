import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useResetPassword } from "./useResetPassword";
import { NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
  const onerror = () => {};

  return (
    <>
      <div className="flex">
        <div className="w-[50%]  relative hidden xl:block">
          <div>
            <img
              src="image/login-image.jpeg"
              alt=""
              className="w-full h-screen"
            />
            <div className="bg-stone-800 absolute top-0 left-0 opacity-60 w-full h-screen"></div>
          </div>
          <div className="absolute top-[40%] px-[60px]">
            <h1 className="text-[28px] font-semibold leading-9 text-stone-50">
              The advancement of technology is the revolution of developement
            </h1>
            <p className="leading-[1.5] font-normal text-[15px]  text-stone-50 mt-2">
              "TekCabal believes in the growth and the improvement of technology
              by sharing business update and social app udpdate."
            </p>
          </div>
        </div>

        <div className="dark:bg-[#070d19] h-screen bg-[#fff] xl:w-[50%] w-full">
          <div className="mt-[90px] xs:mt-[190px] mx-4 md:mt-[200px] xl:mt-[150px] md:mx-auto xl:mx-20 sm:w-[70%] w-[90%]">
            <div className="leading-5">
              <h1 className="font-bold text-[1.5rem] leading-[2rem] text-stone-900 dark:text-stone-100">
                Forget Your Password
              </h1>
              <p className="font-normal text-[1rem] text-stone-600 mt-2 leading-[1.5rem] dark:text-[#94a3b8]">
                Enter your email & instructions will be sent to you!
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onsubmit, onerror)}
              autoComplete="off"
              className="mt-4 mb-5 w-full"
            >
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="leading-[1] font-normal text-stone-500 dark:text-[#94a3b8]"
                >
                  Email
                </label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  disabled={isReseting}
                  {...register("email", {
                    required: "Email field is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                      message: "Your email is invalid",
                    },
                  })}
                  className={` ${
                    errors?.email?.message && "dark:border-red-600"
                  } ${
                    isReseting ? "dark:bg-[#485363]" : "bg-slate-100"
                  } focus:border-[#5660d9] dark:focus:border-[#5660d9] focus:outline-none dark:bg-transparent bg-transparent dark:border-[#64748b] border px-3 text-[#64748b]  text-[.875rem] font-normal placeholder:font-normal border-gray-300 rounded-lg  mt-2 w-full h-[2.5rem]`}
                />
                {errors?.email && (
                  <small className="text-red-500 text-[14px] flex items-center gap-2 mt-1">
                    <span className="font-normal">
                      {errors?.email?.message}
                    </span>
                  </small>
                )}
              </div>
              <Button
                width={"w-full"}
                marginBottom="mb-0"
                name={"Send Recovery Email"}
                backgroundColor={`${
                  isReseting ? `bg-[#5660d9]` : `bg-[#5660d9]`
                }`}
                hover="hover:bg-[#6772f0]"
                rounded="rounded-[0.5rem]"
                loading={isReseting}
              >
                <p>Loading...</p>
              </Button>
            </form>
            <div className="text-center">
              <h2 className="text-stone-500 dark:text-[#94a3b8] text-[16px] font-normal">
                Forget it. Send me back to{" "}
                <NavLink
                  to={"/login"}
                  className="text-[#5660d9] cursor-pointer font-medium"
                >
                  Sign In
                </NavLink>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ResetPasswordForm;
