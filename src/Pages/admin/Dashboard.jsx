import React, { useEffect } from "react";
import { useUserDropdown } from "../../context/UserDropdownContextApi";
import Stats from "../../feature/dashboard/stats";

const Dashboard = () => {
  const { dispatch } = useUserDropdown();
  useEffect(() => {
    dispatch({ type: "closeUserDropdown", payload: false });
    document.title = "Dashboard - TechPulse";
    return () => {
      document.title = "TechPulse";
    };
  }, [dispatch]);
  return (
    <>
      <h2 className="text-stone-600 text-2xl font-semibold mt-10">Dashboard</h2>
      <Stats />
    </>
  );
};

export default Dashboard;
