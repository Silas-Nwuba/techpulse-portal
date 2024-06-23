import React, { useEffect } from "react";
import LoginForm from "../feature/authentication/LoginForm";
import { Toaster } from "react-hot-toast";
const Login = () => {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, []);
  return (
    <>
      <LoginForm />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "15px",
            padding: "16px 24px",
            top: 0,
          },
        }}
      />
    </>
  );
};
export default Login;
