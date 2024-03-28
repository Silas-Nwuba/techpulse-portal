import React from "react";
import { GoogleLogin } from "@react-oauth/google";
// const client_secret_key = "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"
const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  return <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} />;
};
export default GoogleLoginButton;
