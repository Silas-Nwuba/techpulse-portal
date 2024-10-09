import React, { useEffect } from "react";
import UpdateUserData from "../feature/user/UpdateUserData";
import UpdateUserPassword from "../feature/user/UpdateUserPassword";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { useUserDropdown } from "../context/UserDropdownContextApi";

const Setting = () => {
  const navigate = useNavigate();
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch({ type: "closeUserDropdown", payload: false });
    document.title = "TekMatas | Settings";
    //  ;
  }, [dispatch]);

  return (
    <>
      <div className="flex item-center gap-2 mx-2 mt-[7rem] md:mt-10">
        <span
          className="flex items-center gap-2 text-[#768191] dark:text-[#768191] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </span>

        <h1 className="text-[20px] text-[#333333] font-medium dark:text-[#d0d6e1]">
          Update User
        </h1>
      </div>

      <UpdateUserData />
      <UpdateUserPassword />
    </>
  );
};

export default Setting;
