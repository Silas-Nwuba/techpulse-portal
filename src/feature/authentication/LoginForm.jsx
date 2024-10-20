import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useLogin from "./useLogin";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { login, isPending } = useLogin();
  const [showInputType, setInputType] = useState("password");
  const inputRef = useRef(null);
  const handleToggleInput = () => {
    const input = inputRef.current.querySelector("input");
    if (inputRef.current && input.type === "password") {
      setInputType("text");
    } else setInputType("password");
  };
  const onsubmit = (data) => {
    login(
      { email: data.email, password: data.password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };
  const onerror = () => {};
  useEffect(() => {
    document.title = "TekMatas";
    return () => {
      document.title = "TekMatas";
    };
  }, []);
  return (
    <div>
      <div className="dark:bg-[#070d19] h-screen bg-slate-50  w-full mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 xl:mt-[0px] border-gray-200 bg-white border  sm:w-[60%] md:w-[50%] w-[90%] xl:w-[30%] dark:bg-[#0c1427] dark:border-[#172340] dark:border px-10 py-5 rounded-[10px]">
          <div className="leading-5">
            <h1 className="font-bold text-[1.5em] md:text-[2rem] xl:text-[2.15em]  leading-[3rem]  text-stone-900 dark:text-stone-100">
              Sign In
            </h1>
          </div>

          <form
            onSubmit={handleSubmit(onsubmit, onerror)}
            autoComplete="off"
            autoCapitalize="off"
            className="mt-5 mb-10 w-full"
          >
            <div className="w-full">
              <input
                placeholder="Email"
                type="email"
                name="email"
                disabled={isPending}
                {...register("email", {
                  required: "Email field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email",
                  },
                })}
                className={` ${
                  errors?.email?.message && "dark:border-red-600"
                } ${
                  isPending ? "dark:bg-[#485363]" : "bg-slate-100"
                } focus:border-[#5660d9] dark:focus:border-[#5660d9] border-gray-300  focus:outline-none dark:bg-transparent bg-transparent py-4  dark:border-[#172340]  border px-3 dark:text-[#64748b]  text-[.875rem] font-normal placeholder:font-normal placeholder:text-[16px] rounded-[10px]  mt-2 w-full`}
              />
              {errors?.email && (
                <small className="text-red-500 text-[14px] flex items-center gap-2 mt-1">
                  <span className="font-normal">{errors?.email?.message}</span>
                </small>
              )}
            </div>
            <div className="relative mt-4" ref={inputRef}>
              <input
                name="password"
                placeholder="Password"
                type={showInputType}
                {...register("password", {
                  required: "Password field is required",
                  minLength: {
                    value: 8,
                    message:
                      "Your password must contain between 8 and 60 character",
                  },
                })}
                disabled={isPending}
                className={`text ${
                  errors?.email?.message && "dark:border-red-600"
                } ${
                  isPending ? "dark:bg-[#485363]" : "bg-slate-100"
                } focus:border-[#5660d9] dark:focus:border-[#5660d9] dark:bg-transparent border-gray-300 placeholder:text-[16px]  focus:outline-none dark:border-[#172340] dark:text-[#64748b] border px-3 py-4 text-sm rounded-[10px] bg-transparent  mt-2 w-full`}
              />
              <span
                className="absolute top-[25px] right-5 cursor-pointer"
                onClick={handleToggleInput}
              >
                {showInputType === "password" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-stone-400 dark:text-[#94a3b8]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
                {showInputType === "text" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-stone-400 dark:text-[#94a3b8]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </span>
              {errors?.password && (
                <small className="text-red-500 text-sm flex items-center gap-2 mt-2">
                  <span>{errors?.password?.message}</span>
                </small>
              )}
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-between my-5 ">
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="rememberMe" checked />
                <span className="dark:text-[#94a3b8]">Remember me</span>
              </div>
              <NavLink to="/resetpassword" className="text-[#6C4DE6] text-sm">
                Forget Password?
              </NavLink>
            </div>
            <button className="bg-[#6C4DE6] hover:bg-[#464ea7] mb-4 w-full transition duration-500 ease-in-out py-2 text-white font-medium text-[16px] rounded-md flex items-center justify-center pr-2">
              {isPending ? "Processing.." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
