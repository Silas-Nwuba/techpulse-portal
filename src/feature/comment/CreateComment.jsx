import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import useGoogleSignIn from "./useGoogleSignIn";
import UseKey from "../../hook/UseKey";
import Button from "../../ui/Button";
import { useLocalStorageGoogleSignIn } from "../../hook/useLocalStorageGoogleSignIn";
const LOCAL_KEY = "userAccount";
const CreateComment = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { setUser, profile } = useGoogleSignIn();
  const { register, handleSubmit, formState, getValues, setValue, reset } =
    useForm();
  const { errors } = formState;
  const onsubmit = (data) => {
    toast.success("Comment has be sent", {
      id: "successId",
    });
    reset();
  };
  const onerror = (error) => {};
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: () => toast.error("Sign in Failed"),
  });
  const { handleKeyDown } = UseKey();
  const { userData } = useLocalStorageGoogleSignIn([], LOCAL_KEY, profile);

  useEffect(() => {
    setValue("name", profile?.name ? profile?.name : userData.name);
    setValue("email", profile?.email ? profile?.email : userData?.email);
  }, [setValue, userData.name, userData.email, profile?.name, profile?.email]);

  return (
    <>
      <div className="bg-white rounded-md p-4 px-5 mt-3 ">
        <form
          onSubmit={handleSubmit(onsubmit, onerror)}
          className="focus:outline-none"
        >
          {!isAnonymous && (
            <>
              <div className="mt-3">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: "Name field is required",
                    validate: () => {
                      const nameRegx = /^[a-zA-Z\s]*$/;
                      const nameValidate =
                        nameRegx.test(getValues().name) ||
                        "Name field should not contain special character or a number";
                      return nameValidate;
                    },
                    minLength: {
                      value: 3,
                      message: "Please name should not be less than 3 charater",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "Please name should not be greater than 50 character",
                    },
                  })}
                  className="focus:outline-none border text-sm border-stone-300 rounded-md p-2 mt-1 w-full"
                  onKeyDown={handleKeyDown}
                />
                <small className="text-red-500 text-sm">
                  {getValues().name !== "" ? "" : errors?.name?.message}
                </small>
              </div>
              <div className="mt-3">
                <label htmlFor="address" className="text-sm">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  {...register("email", {
                    required: "Email field is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                      message: "Email provided is invalid",
                    },
                  })}
                  className="text-sm focus:outline-none border border-stone-300 rounded-md p-2 mt-1 w-full"
                  onKeyDown={handleKeyDown}
                />
                <small className="text-red-500 text-sm">
                  {getValues().email !== "" ? "" : errors?.email?.message}
                </small>
              </div>
              <div className="mt-3">
                <label htmlFor="photo" className="text-sm">
                  Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  {...register("photo", {
                    required: "Photo field is required",
                  })}
                  className="text-sm focus:outline-none border border-stone-300 rounded-md p-2 mt-1 w-full"
                />
                <small className="text-red-500 text-sm">
                  {errors?.photo?.message}
                </small>
              </div>
            </>
          )}
          <div className="mt-4">
            <label htmlFor="comment" className="text-sm">
              Comment
            </label>
            <textarea
              name="comment"
              cols="30"
              rows="10"
              {...register("comment", {
                required: "Comment field is required",
              })}
              className=" text-sm h-[150px] focus:outline-none border overflow-hidden  border-stone-300 rounded-md p-2 mt-2 w-full"
            ></textarea>
            <small className="text-red-500 text-sm">
              {errors?.comment?.message}
            </small>
          </div>
          <div className="flex justify-between items-center mt-2 mb-3">
            <div className="flex gap-2 mt-2">
              <input
                type="checkbox"
                name="anonymous"
                {...register("anonymous")}
                onChange={() => setIsAnonymous((open) => !open)}
              />
              <h2 className="font-semibold text-[16px] text-stone-500">
                Anonymous
              </h2>
            </div>
            {!isAnonymous && (
              <button
                className="bg-white shadow-md rounded-sm p-2 flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  login();
                }}
              >
                <img src="\image\google-icon.png" alt="" className="w-4 h-4" />
                Sign in
              </button>
            )}
          </div>
          <Button name="Post Comment" />
        </form>
      </div>
    </>
  );
};

export default CreateComment;
