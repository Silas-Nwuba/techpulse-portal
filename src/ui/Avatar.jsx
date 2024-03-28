import React from "react";
import { useUserDropdown } from "../context/UserDropdownContextApi";
import { useUser } from "../feature/authentication/useUser";
import useOutsideClick from "../hook/useOutsideClick";
import { useUpdateUserData } from "../feature/user/useUpdateUserData";
const Avatar = () => {
  const { user, isLoading } = useUser();
  const { isUpdating } = useUpdateUserData();
  const { dispatch, isUserDropdown } = useUserDropdown();
  const { userIcon } = useOutsideClick();
  const handleToggle = (e) => {
    if (e.target && !isUserDropdown)
      dispatch({ type: "openUserDropdown", payload: true });
    if (isUserDropdown) dispatch({ type: "closeUserDropdown", payload: false });
  };
  if (isUpdating || isLoading)
    return <span className="w-[40px] h-[40px] rounded-full skeleton"></span>;
  return (
    <span className="cursor-pointer" onClick={handleToggle} ref={userIcon}>
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
        className="w-[40px] h-[40px] rounded-full object-cover"
      />
    </span>
  );
};
//
export default Avatar;
