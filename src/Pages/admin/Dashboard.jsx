import React, { useEffect } from "react";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
import Stats from "../../feature/dashboard/Stats";
const Dashboard = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    dispatch({ type: "closeUserDropdown", payload: false });
    document.title = "Dashboard - TechPulse";
    return () => {
      document.title = "Dashboard - TechPulse";
    };
  }, [dispatch]);
  return (
    <>
      <h2 className="text-stone-600 text-2xl font-semibold mt-10 dark:text-[#CBD5E0]">
        Dashboard
      </h2>
      <Stats />
    </>
  );
};

export default Dashboard;
