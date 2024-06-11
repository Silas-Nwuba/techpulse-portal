import React, { useEffect } from "react";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
import Stats from "../../feature/dashboard/Stats";
const Dashboard = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-gray-200");
    dispatch({ type: "closeUserDropdown", payload: false });
    document.title = "Dashboard | TechPulse";
    return () => {
      document.title = "Dashboard | TechPulse";
      document.body.classList.remove("bg-white");
    };
  }, [dispatch]);
  return (
    <div className="mb-20 md:mb-0">
      <h2 className="text-stone-600 text-2xl font-semibold mt-[120px] md:mt-10 dark:text-[#CBD5E0]">
        Dashboard
      </h2>
      <Stats />
    </div>
  );
};

export default Dashboard;
