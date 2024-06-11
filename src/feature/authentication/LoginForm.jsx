import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaExclamationCircle } from "react-icons/fa";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";
import Button from "../../ui/Button";
const LoginForm = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const [isOpen, setIsOpen] = useState(false);
  const [passwordType, setPasswordType] = useState(null);
  const { login, isPending } = useLogin();

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
  const onerror = (error) => {};
  const handleToggle = () => {
    isOpen ? setPasswordType("text") : setPasswordType("password");
    setIsOpen((open) => !open);
  };
  useEffect(() => {
    setPasswordType("password");
    if (isOpen) setPasswordType("text");
    document.title = "Login - TechPulse";
    return () => {
      document.title = "Login - TechPulse";
    };
  }, [setPasswordType, isOpen]);
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <h1 className="font-semibold text-[24px] text-[#333333] dark:text-white sm:text-[24px] mb-5 mt-[50px] text-center tracking-wider">
        Log in
        {/* <span className="ml-1 tracking-wider">TechPulse</span> */}
      </h1>
      <div className="dark:bg-[#2D3748] bg-white shadow-sm w-[90%] sm:w-[70%] md:w-[50%] xl:w-[35%] py-6 px-4 rounded-md mx-auto text-center">
        <div className="pt-4">
          <form
            onSubmit={handleSubmit(onsubmit, onerror)}
            className="space-y-4 mb-3"
          >
            <div>
              <input
                placeholder="Please enter your email address"
                type="email"
                name="email"
                disabled={isPending}
                autoComplete="username"
                {...register("email", {
                  required: "Email address field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                    message: "Email address provided is invalid",
                  },
                })}
                className="disabled:opacity-50 dark:text-stone-300 disabled:bg-gray-100 disabled:cursor-wait disabled:border dark:bg-[#4A5568]  dark:border-[#4A5568] dark:focus:none  disabled:border-gray-200 border text-sm mb-2 font-medium border-slate-50 bg-slate-50 rounded-full focus:border-2 dark:focus:border focus:border-sky-500 w-full  placeholder:text-stone-400 placeholder:font-medium  py-3 pl-5 outline-none focus:outline-none"
              />
              {errors?.email && (
                <small className="text-red-500 text-sm flex items-center gap-2 ml-2">
                  <FaExclamationCircle className="text-red-500" />
                  <span>{errors?.email?.message}</span>
                </small>
              )}
            </div>
            <div className="relative">
              <input
                name="password"
                placeholder="Please enter password"
                type={passwordType}
                autoComplete="password"
                disabled={isPending}
                {...register("password", {
                  required: "Password field is required",
                  minLength: {
                    value: 8,
                    message: "Password must be atleast 8 characters",
                  },
                })}
                className="disabled:opacity-50 dark:text-stone-300 disabled:bg-gray-100 disabled:cursor-wait disabled:border dark:bg-[#4A5568] disabled:border-gray-200 border text-sm mb-2 font-medium border-slate-50 dark:border-[#4A5568] dark:focus:border bg-slate-50 rounded-full focus:border-2 focus:border-sky-500 w-full  placeholder:text-stone-400 placeholder:font-medium  py-3 pl-5 outline-none focus:outline-none"
              />

              <span
                className="absolute top-3 right-5 bg-gray-100 dark:bg-[#1A202C] p-1 rounded-full cursor-pointer"
                onClick={handleToggle}
              >
                {isOpen ? (
                  <HiOutlineEyeSlash className="text-stone-600  dark:text-stone-200" />
                ) : (
                  <HiOutlineEye className="text-stone-600 dark:text-stone-200" />
                )}
              </span>

              {errors?.password && (
                <small className="text-red-500 text-sm flex items-center gap-2 ml-2">
                  <FaExclamationCircle className="text-red-500" />
                  <span>{errors?.password?.message}</span>
                </small>
              )}
            </div>

            <Button
              width={"w-full"}
              marginBottom="mb-0"
              name={"Log in"}
              backgroundColor="bg-[#007bff]"
              hover="hover:bg-sky-00"
              rounded="rounded-full"
              loading={isPending}
            >
              <MiniLoaderSpinner />
            </Button>
          </form>
          <Link
            to={"/admin/resetpassword"}
            className="text-sm text-[#007bff] transition duration-300 ease-in-out font-medium"
          >
            Forget password?
          </Link>
        </div>
      </div>
      <div className="w-full dark:border-[#4A5568] text-center border-stone-300 border-t absolute bottom-0">
        <p className="py-2 px-3 text-stone-600 dark:text-stone-300 text-sm pt-4">
          &copy; {new Date().getFullYear()} TechPulse. All right reserverd.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
