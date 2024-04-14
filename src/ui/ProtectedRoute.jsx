import React, { useEffect } from "react";
import { useUser } from "../feature/authentication/useUser";
import { useNavigate } from "react-router-dom";
import FullPageLoaderSpinner from "./FullPageLoaderSpinner";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, isLoading, isAuthenticated } = useUser();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/admin/login");
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading)
    return (
      <FullPageLoaderSpinner>
        <p className="mt-1">Loading...</p>
      </FullPageLoaderSpinner>
    );
  if (isAuthenticated && user.user_metadata.role === "Administrator")
    return children;
};

export default ProtectedRoute;
