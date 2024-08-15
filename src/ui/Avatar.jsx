import React from "react";
import { useUserDropdown } from "../context/UserDropdownContextApi";
import { useUser } from "../feature/authentication/useUser";
import { useUpdateUserData } from "../feature/user/useUpdateUserData";
import useOutsideClick from "../hook/useOutsideClick";
import UserDropdown from "./UserDropdown";
const Avatar = () => {
  const { user, isLoading } = useUser();
  const { isUpdating } = useUpdateUserData();
  const { dispatch, isUserDropdown } = useUserDropdown();
  const { dropdownRef } = useOutsideClick();
  const handleToggle = (e) => {
    if (!isUserDropdown) dispatch({ type: "openUserDropdown", payload: true });
    else dispatch({ type: "closeUserDropdown", payload: false });
  };
  if (isUpdating || isLoading)
    return <span className="w-[40px] h-[40px] rounded-full skeleton"></span>;
  return (
    <div ref={dropdownRef}>
      <span className="cursor-pointer" onClick={handleToggle}>
        {!user.user_metadata.avater && (
          <img
            src="public\image\avatar.webp"
            alt={user.user_metadata.fullname}
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
        )}
        <img
          src={user.user_metadata.avater || "avatar.webp"}
          alt={user.user_metadata.fullname}
          className="w-[40px] h-[40px] rounded-full object-cover  dark:opacity-80"
        />
      </span>
      {isUserDropdown && <UserDropdown />}
    </div>
  );
};
//
export default Avatar;
