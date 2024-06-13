import React, { useEffect } from "react";
import LoginForm from "../../feature/authentication/LoginForm";

const Login = () => {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-[#f9fafc]");
    return () => {
      document.body.classList.remove("bg-white");
      document.documentElement.style.overflowY = "auto";
    };
  }, []);
  return <LoginForm />;
};

export default Login;
