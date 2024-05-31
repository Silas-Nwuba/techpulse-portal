import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback";
import App from "./App";
import "./index.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="871969682300-bdnk53t8ntsfqd86bu3n3fnioqjol7lt.apps.googleusercontent.com">
      <App />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/admin/dashboard")}
      ></ErrorBoundary>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
