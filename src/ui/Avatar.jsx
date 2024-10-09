import React from "react";
import { useUser } from "../feature/authentication/useUser";
import { useUpdateUserData } from "../feature/user/useUpdateUserData";
const Avatar = () => {
  const { user, isLoading } = useUser();
  const { isUpdating } = useUpdateUserData();

  if (isUpdating || isLoading)
    return <span className="w-[35px] h-[35px] rounded-full skeleton"></span>;
  return (
    <div>
      <span className="flex items-center gap-3">
        {!user.user_metadata.avater && (
          <img
            src="public\image\avatar.webp"
            alt={user.user_metadata.fullname}
            className="w-[32px] h-[32px] rounded-[50%] object-cover"
          />
        )}
        <img
          src={user.user_metadata.avater || "avatar.webp"}
          alt={user.user_metadata.fullname}
          className="w-[35px] h-[35px] rounded-full object-cover"
        />
      </span>
      {/* {isUserDropdown && <UserDropdown />} */}
    </div>
  );
};
//
export default Avatar;
