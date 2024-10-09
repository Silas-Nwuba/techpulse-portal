import React, { useState } from "react";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import { useUpdateUserData } from "./useUpdateUserData";
import MiniLoaderSpinner from "../../ui/MiniLoaderSpinner";
const UpdateUserData = () => {
  const {
    user: {
      email,
      user_metadata: { fullname: currentFullName, role },
    },
  } = useUser();
  const { updateUser, isUpdating } = useUpdateUserData();
  const [fullname, setFullname] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullname) return;
    updateUser(
      { fullname, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  };
  return (
    <div className="bg-white px-4 py-5 w-[81%] shadow-sm mt-5 dark:border dark:border-[#172340] rounded-md dark:bg-[#0c1427] ">
      <form onSubmit={handleSubmit} className=" px-2">
        <FormRow label={"Full Name"}>
          <input
            id="fullName"
            type="text"
            disabled={isUpdating}
            value={fullname}
            className="dark:bg-[#0c1427] dark:border-[#172340] dark:text-[#CBD5E0] focus:outline-none dark:focus:border-[#3b4557] border text-sm border-gray-300 rounded-md p-3 mt-2 w-full"
            onChange={(e) => setFullname(e.target.value)}
          />
        </FormRow>
        <FormRow label={"Email Address"}>
          <input
            id="email address"
            type="text"
            disabled
            value={email}
            className="dark:bg-[#0c1427] dark:border-[#172340] dark:disabled:bg-[#212a3a] dark:text-[#CBD5E0] focus:outline-none dark:focus:border-[#3b4557] border text-sm border-gray-300 rounded-md p-3 mt-2 w-full"
          />
        </FormRow>
        <FormRow label={"Avatar"}>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            disabled={isUpdating}
            className={`dark:bg-[#0c1427] file:bg-slate-100 file:text-stone-700 dark:file:bg-[#212a3a]   dark:border-[#172340]  dark:text-[#d0d6e1] file:border-0 file:p-3 file:text-[12px] dark:file:text-[#d0d6e1] border  text-sm border-gray-300 rounded-[10px] mt-2 w-full`}
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </FormRow>
        <FormRow label={"Role"}>
          <input
            value={role}
            disabled={isUpdating}
            className="dark:bg-[#0c1427] dark:border-[#172340] dark:text-[#CBD5E0] focus:outline-none dark:focus:border-[#3b4557] border text-sm border-gray-300 rounded-md p-3 mt-2 w-full"
          />
        </FormRow>
        <div className="mt-3">
          <button
            type="submit"
            className="bg-[#6C4DE6] dark:bg-[#6C4DE6]  dark:text-white text-white transition duration-500 ease-in-out  h-[30px] py-5  font-normal text-[16px] rounded-[5px] flex items-center justify-center px-3"
          >
            {isUpdating ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default UpdateUserData;
