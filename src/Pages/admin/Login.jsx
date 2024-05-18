import React, { useEffect } from "react";
import LoginForm from "../../feature/authentication/LoginForm";

const Login = () => {
  useEffect(() => {
    document.body.classList.add("bg-slate-50");
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, []);
  return <LoginForm />;
};

export default Login;
