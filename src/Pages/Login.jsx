import React, { useEffect } from "react";
import LoginForm from "../feature/authentication/LoginForm";

const Login = () => {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, []);
  return <LoginForm />;
};

export default Login;
