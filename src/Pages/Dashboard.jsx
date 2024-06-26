import React, { useEffect } from "react";
import { useUserDropdown } from "../context/UserDropdownContextApi";
import Stats from "../feature/dashboard/Stats";
const Dashboard = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    dispatch({ type: "closeUserDropdown", payload: false });
    document.title = "Dashboard | TechPulse";
    return () => {
      document.title = "Dashboard | TechPulse";
    };
  }, [dispatch]);
  return (
    <div className="mb-10 md:mb-0">
      <h2 className="text-stone-800 text-2xl font-semibold mt-[120px] tracking-wide md:mt-10 dark:text-[#CBD5E0]">
        Dashboard
      </h2>
      <Stats />
    </div>
  );
};

export default Dashboard;
