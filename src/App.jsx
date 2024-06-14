import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeContext";
import { UserDropdownProvider } from "./context/UserDropdownContextApi";
import DashboardLayout from "./ui/DashboardLayout";
import Dashboard from "./Pages/Dashboard";
import Post from "./Pages/PostPage";
import CommentPage from "./Pages/ComentPage";
import CommentDetail from "./Pages/CommentDetail";
import CreatePostPage from "./Pages/CreatePost";
import EditPostPage from "./Pages/EditPostPage";
import PageNotFound from "./ui/PageNotFound";
import Login from "./Pages/Login";
import Setting from "./Pages/Setting";
import ResetPassword from "./Pages/ResetPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import ProtectedRoute from "../src/ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const App = () => {
  const [modeType, setModeType] = useState(null);
  useEffect(() => {
    const type = document.documentElement.classList;
    setModeType(type);
  }, [setModeType]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <DarkModeProvider>
          <UserDropdownProvider>
            <BrowserRouter>
              <Routes>
                <Route
                  element={
                    <ProtectedRoute>
                      <DashboardLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate to={"home"} />} />
                  <Route path="/dashboard" element={<Dashboard />}></Route>
                  <Route path="/post" element={<Post />}></Route>
                  <Route
                    path="/post/create"
                    element={<CreatePostPage />}
                  ></Route>
                  <Route
                    path="/post/edit/:id"
                    element={<EditPostPage />}
                  ></Route>
                  <Route path="/comment" element={<CommentPage />}></Route>
                  <Route
                    path="/comment/:commentId"
                    element={<CommentDetail />}
                  ></Route>

                  <Route path="/settings" element={<Setting />}></Route>
                </Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                  path="/resetpassword"
                  element={<ResetPassword />}
                ></Route>
                <Route
                  path="/updatepassword"
                  element={<UpdatePassword />}
                ></Route>
                <Route path="*" element={<PageNotFound />}></Route>
              </Routes>
            </BrowserRouter>
          </UserDropdownProvider>
        </DarkModeProvider>
      </QueryClientProvider>
      {modeType?.[0] === "dark" && (
        <Toaster
          position="top-center"
          gutter={12}
          toastOptions={{
            error: {
              duration: 5000,
            },
            style: {
              zIndex: 30000,
              backgroundColor: "#2D3748",
              color: "#eeeeee",
            },
          }}
        />
      )}
      {modeType?.[0] === "light" && (
        <Toaster
          position="top-center"
          gutter={12}
          toastOptions={{
            error: {
              duration: 5000,
            },
            style: {
              zIndex: 30000,
            },
          }}
        />
      )}
    </>
  );
};
export default App;
