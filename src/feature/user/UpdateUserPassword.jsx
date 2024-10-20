import React from "react";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { useUpdateUserPassword } from "./useUpdateUserPassword";
const UpdateUserPassword = () => {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const { updatePassword, isLoadingPassword } = useUpdateUserPassword();

  const onsubmit = ({ password }) => {
    updatePassword(
      { password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };
  const onerror = (error) => {};
  return (
    <div className="ml-3">
      <h1 className="text-[20px] text-stone-[#333333] font-medium mb-2 mt-10 w-full dark:text-[#d0d6e1]">
        Update Password
      </h1>

      <div className="bg-white px-4 py-5 w-[93%] xl:w-[85%]  shadow-sm mt-5 dark:bg-[#0c1427] rounded-[10px]  mb-10">
        <form onSubmit={handleSubmit(onsubmit, onerror)}>
          <FormRow label={"New Password"} error={errors?.password?.message}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              disabled={isLoadingPassword}
              {...register("password", {
                required: "Password field is required",
                minLength: {
                  value: 8,
                  message: "Password must be atleast 8 characters",
                },
              })}
              className={`disabled:opacity-50 dark:bg-[#0c1427] dark:border-[#172340] dark:text-[#CBD5E0] focus:outline-none dark:focus:border-[#3b4557] border text-sm border-gray-300 rounded-md p-3 mt-2 w-full`}
            />
          </FormRow>
          <FormRow
            label={"Confirm Password"}
            error={errors?.confirmPassword?.message}
          >
            <input
              type="password"
              disabled={isLoadingPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === getValues().password || "Password need to match",
              })}
              className={`disabled:opacity-50 dark:bg-[#0c1427] dark:border-[#172340] dark:text-[#CBD5E0] focus:outline-none dark:focus:border-[#3b4557] border text-sm border-gray-300 rounded-md p-3 mt-2 w-full `}
            />
          </FormRow>
          <div className="mt-3">
            <button
              type="submit"
              className="bg-[#6C4DE6] dark:bg-[#6C4DE6]  dark:text-white text-white transition duration-500 ease-in-out  h-[30px] py-5  font-normal text-[16px] rounded-[5px] flex items-center justify-center px-3"
            >
              {isLoadingPassword ? "Loading..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserPassword;
