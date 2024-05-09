import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App";
import "./index.css";
import ErrorFallback from "./ui/ErrorFallback";
=======
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";

>>>>>>> 2240043135df3e38123bbfa092520827935184bb
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="871969682300-bdnk53t8ntsfqd86bu3n3fnioqjol7lt.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
<<<<<<< HEAD
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/admin/dashboard")}
      ></ErrorBoundary>
=======
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
    </React.StrictMode>
  </GoogleOAuthProvider>
);
