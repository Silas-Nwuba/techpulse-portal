import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./ui/AppLayout";
import News from "./Pages/main/News";
import Contact from "./Pages/main/Contact";
import DashboardLayout from "./ui/DashboardLayout";
import Dashboard from "./Pages/admin/Dashboard";
import Post from "./Pages/admin/PostPage";
import { UserDropdownContentApi } from "./context/UserDropdownContextApi";
import CommentPage from "./Pages/admin/ComentPage";
import CommentDetail from "./Pages/admin/CommentDetail";
import CreatePostPage from "./Pages/admin/CreatePost";
import EditPostPage from "./Pages/admin/EditPostPage";
import PageNotFound from "./ui/PageNotFound";
import Login from "./Pages/admin/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
// import UserPage from "./Pages/admin/UserPage";
import Home from "./Pages/main/Home";
import Setting from "./Pages/admin/Setting";
import ResetPassword from "./Pages/admin/ResetPassword";
import UpdatePassword from "./Pages/admin/UpdatePassword";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <UserDropdownContentApi>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="news/:name" element={<News />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route path="admin/dashboard" element={<Dashboard />}></Route>
              <Route path="admin/post" element={<Post />}></Route>
              <Route
                path="admin/post/create"
                element={<CreatePostPage />}
              ></Route>
              <Route
                path="admin/post/edit/:id"
                element={<EditPostPage />}
              ></Route>
              <Route path="admin/comment" element={<CommentPage />}></Route>
              <Route
                path="admin/comment/:commentId"
                element={<CommentDetail />}
              ></Route>

              <Route path="admin/settings" element={<Setting />}></Route>
            </Route>
            <Route path="admin/login" element={<Login />}></Route>
            <Route
              path="admin/resetpassword"
              element={<ResetPassword />}
            ></Route>
            <Route
              path="admin/updatepassword"
              element={<UpdatePassword />}
            ></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </UserDropdownContentApi>
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
    </QueryClientProvider>
  );
};
export default App;
