import React, { useEffect } from "react";
import UpdateUserData from "../../feature/user/UpdateUserData";
import UpdateUserPassword from "../../feature/user/UpdateUserPassword";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { useUserDropdown } from "../../context/UserDropdownContextApi";

const Setting = () => {
  const navigate = useNavigate();
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch({ type: "closeUserDropdown", payload: false });
    document.title = "Setting - TechPulse";
    return () => {
      document.title = "TechPulse";
    };
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center justify-between mx-2 mt-[7rem] md:mt-10">
        <span className="text-[20px] text-[#333333] font-semibold dark:text-[#E2E8F0] ">
          Admin Settings
        </span>
        <span
          className="flex items-center gap-2 justify-end text-[#007bff] text-[16px] mr-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <p>Back</p> <HiArrowRight />
        </span>
      </div>

      <UpdateUserData />
      <UpdateUserPassword />
    </>
  );
};

export default Setting;
