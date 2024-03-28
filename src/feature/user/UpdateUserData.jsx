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
    <div className="bg-white px-4 py-5 rounded-md shadow-sm mt-5">
      <form onSubmit={handleSubmit}>
        <FormRow label={"Full Name"}>
          <input
            id="fullName"
            type="text"
            disabled={isUpdating}
            value={fullname}
            className="disabled:bg-gray-100  disabled:border disabled:border-gray-200 focus:outline-none border h-[50px]  focus:border-2 text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400"
            onChange={(e) => setFullname(e.target.value)}
          />
        </FormRow>
        <FormRow label={"Email Address"}>
          <input
            id="email address"
            type="text"
            disabled={true}
            value={email}
            className="disabled:bg-gray-100 disabled:border disabled:border-gray-200 focus:outline-none border h-[50px]  focus:border-2 text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400"
          />
        </FormRow>
        <FormRow label={"Avatar"}>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            disabled={isUpdating}
            className={`file:bg-violet-50 file:text-[#007bff] file:font-semibold file:rounded-full file:py-2 file:px-4  file:border-0 file:text-sm file: disabled:opacity-50 focus:border-2 disabled:bg-gray-100 disabled:cursor-wait disabled:border disabled:border-gray-200 focus:outline-none border h-[55px] text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400`}
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </FormRow>
        <FormRow label={"Role"}>
          <input
            value={role}
            disabled={true}
            className="disabled:bg-gray-100 disabled:border disabled:border-gray-200 focus:outline-none border h-[50px] focus:border-2 text-sm border-gray-300 rounded-md p-3 mt-1 w-full focus:border-sky-400"
          />
        </FormRow>

        <Button
          name={"Update User"}
          width={"w-[140px]"}
          marginBottom="mb-2"
          loading={isUpdating}
          hover="hover:bg-sky-600"
        >
          <MiniLoaderSpinner />
        </Button>
      </form>
    </div>
  );
};

export default UpdateUserData;
