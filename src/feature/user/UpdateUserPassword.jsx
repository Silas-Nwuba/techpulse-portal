import React from "react";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
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
    <>
      <h1 className="text-[20px] text-stone-[#333333] font-semibold mb-2 mt-10  dark:text-[#E2E8F0] ">
        Update Password
      </h1>

      <div className="bg-white px-4 py-5 rounded-md shadow-sm mt-5 mb-5 dark:bg-[#2D3748]">
        <form onSubmit={handleSubmit(onsubmit, onerror)}>
          <FormRow label={"New Password"} error={errors?.password?.message}>
            <input
              type="password"
              name="password"
              disabled={isLoadingPassword}
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
              } dark:bg-[#4A5568] dark:border-[#3b4557] dark:text-[#CBD5E0] focus:outline-none focus:border-2 border  text-sm border-gray-300 rounded-md p-3 mt-2 w-full focus:border-sky-400`}
            />
          </FormRow>
          <FormRow
            label={"Confirm New Password"}
            error={errors?.confirmPassword?.message}
          >
            <input
              type="password"
              disabled={isLoadingPassword}
              name="confirmPassword"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === getValues().password || "Password need to match",
              })}
              className={`disabled:opacity-50 ${
                errors?.confirmPassword
                  ? "border-red-400 focus:border-red-400 focus:border"
                  : "focus:border-sky-400 focus:border-2"
              } dark:bg-[#4A5568] dark:border-[#3b4557] dark:text-[#CBD5E0] focus:outline-none focus:border-2 border  text-sm border-gray-300 rounded-md p-3 mt-2 w-full focus:border-sky-400`}
            />
          </FormRow>
          <Button
            name={"Update Password"}
            hover="hover:bg-sky-600"
            marginBottom="mb-1"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateUserPassword;
