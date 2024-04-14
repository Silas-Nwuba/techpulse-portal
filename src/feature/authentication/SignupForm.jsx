import React from "react";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { HiXMark } from "react-icons/hi2";
import { useSignup } from "./useSignup";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";
const SignupForm = ({ closeModal }) => {
  const { signUp, isLoading } = useSignup();
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  const onsubmit = ({ email, password, fullname, role, avatar }) => {
    signUp(
      { email, password, fullname, role, avatar: avatar[0] },
      {
        onSettled: () => {
          // reset();
        },
      }
    );
  };
  const onerror = () => {};
  return (
    <div className="mt-5">
      <div
        className="absolute top-1 right-2 text-[18px] cursor-pointer bg-gray-100 rounded-full p-2 transition duration-300 ease-in-out hover:bg-gray-200"
        onClick={closeModal}
      >
        <HiXMark />
      </div>
      <form onSubmit={handleSubmit(onsubmit, onerror)} className="mt-10 ">
        <div className="grid grid-cols-2 gap-x-4 w-full">
          <FormRow label={"Full name"} error={errors?.fullname?.message}>
            <input
              type="text"
              name="fullname"
              disabled={isLoading}
              {...register("fullname", {
                required: "Full name field is required",
                minLength: {
                  value: 3,
                  message: "Full name should be atleast 3 character",
                },
              })}
              className={`disabled:opacity-50 ${
                errors?.fullname
                  ? "border-red-400 focus:border-red-400 focus:border"
                  : "focus:border-sky-400 focus:border-2"
              } disabled:bg-gray-100 disabled:cursor-wait disabled:border disabled:border-gray-200 focus:outline-none border h-[50px] text-sm border-gray-300 rounded-md px-3 py-2 mt-1 w-full `}
            />
          </FormRow>
          <FormRow label={"Email address"} error={errors?.email?.message}>
            <input
              type="text"
              name="email"
              disabled={isLoading}
              {...register("email", {
                required: "Email address field is required",
                pattern: {
                  value: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                  message: "Email provided is invalid",
                },
              })}
              className={`disabled:opacity-50 ${
                errors?.email
                  ? "border-red-400 focus:border-red-400 focus:border"
                  : "focus:border-sky-400 focus:border-2"
              } disabled:bg-gray-100 disabled:cursor-wait disabled:border disabled:border-gray-200 focus:outline-none border h-[50px] text-sm border-gray-300 rounded-md px-3 py-2 mt-1 w-full`}
            />
          </FormRow>
          <FormRow label={"Password"} error={errors?.password?.message}>
            <input
              type="password"
              name="password"
              disabled={isLoading}
              {...register("password", {
                required: "Password field is required",
                minLength: {
                  value: 8,
                  message: "Password must be atleast 8 characters",
                },
              })}
              className={`disabled:opacity-50 ${
                errors?.password
                  ? "border-red-400 focus:border-red-400 focus:border"
                  : "focus:border-sky-400 focus:border-2"
              } disabled:bg-gray-100 disabled:cursor-wait disabled:border disabled:border-gray-200 focus:outline-none  border h-[50px] text-sm border-gray-300 rounded-md px-3 py-2 mt-1 w-full`}
            />
          </FormRow>
          <FormRow
            label={"Confirm password"}
            error={errors?.confirmPassword?.message}
          >
            <input
              type="password"
              disabled={isLoading}
              name="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm password field is required",
                validate: (value) =>
                  value === getValues().password || "Password need to match",
              })}
              className={`disabled:opacity-50 ${
                errors?.confirmPassword
                  ? "border-red-400 focus:border-red-400 focus:border"
                  : "focus:border-sky-400 focus:border-2"
              } disabled:bg-gray-100 disabled:cursor-wait disabled:border disabled:border-gray-200 focus:outline-none  border h-[50px] text-sm border-gray-300 rounded-md px-3 py-2 mt-1 w-full`}
            />
          </FormRow>
          <FormRow label="Role" error={errors?.role?.message}>
            <select
              name="role"
              disabled={isLoading}
              {...register("role", {
                required: "Role field is required",
              })}
              className={`file:bg-violet-50  ${
                errors?.role
                  ? "border-red-400 focus:border-red-400 focus:border"
                  : "focus:border-sky-400 focus:border-2"
              } file:text-sky-400 file:font-semibold file:rounded-full file:py-2 file:px-4  file:border-0 file:text-sm file: disabled:opacity-50  disabled:bg-gray-100 disabled:cursor-wait disabled:border disabled:border-gray-200 focus:outline-none border h-[55px] text-sm border-gray-300 rounded-md px-3 py-2 mt-1 w-full`}
            >
              <option value="">Select</option>
              <option value="Administrator">Administrator</option>
              <option value="Administrator">Regular</option>
            </select>
          </FormRow>
          <FormRow
            label="Avatar"
            error={errors?.avater?.message}
            col="col-span-2"
          >
            <input
              type="file"
              name="avatar"
              disabled={isLoading}
              accept="image/*"
              {...register("avatar", {
                required: "Avatar field is required",
              })}
              className={`file:bg-violet-50  ${
                errors?.avater
                  ? "border-red-400 focus:border-red-400 focus:border"
                  : "focus:border-sky-400 focus:border-2"
              } file:text-[#007bff] file:font-semibold file:rounded-full file:py-2 file:px-4 file:border-0 file:text-sm file: disabled:opacity-50  disabled:bg-gray-100 disabled:cursor-wait disabled:border disabled:border-gray-200 focus:outline-none border h-[55px] text-sm border-gray-300 rounded-md px-3 py-2 mt-1 w-full`}
            />
          </FormRow>
        </div>
        <span className="flex gap-3">
          <Button
            name={"Close"}
            width="w-[120px]"
            marginBottom="mb-0"
            backgroundColor="bg-gray-100"
            color="text-stone-600"
            hover="hover:bg-gray-200"
            onClick={closeModal}
          ></Button>
          <Button
            name={"Submit"}
            width="w-[120px]"
            marginBottom="mb-0"
            backgroundColor="bg-[#007bff]"
            hover="hover:bg-sky-600"
            loading={isLoading}
          >
            <MiniLoaderSpinner />
          </Button>
        </span>
      </form>
    </div>
  );
};

export default SignupForm;
