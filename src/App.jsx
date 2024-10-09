import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DarkModeProvider } from "./context/DarkModeContext";
import { UserDropdownProvider } from "./context/UserDropdownContextApi";
import DashboardLayout from "./ui/DashboardLayout";
import "../src/App.css";
import Dashboard from "./Pages/Dashboard";
import CommentPage from "./Pages/ComentPage";
import CommentDetail from "./Pages/CommentDetail";
import EditPostPage from "./Pages/EditPostPage";
import PageNotFound from "./ui/PageNotFound";
import Login from "./Pages/Login";
import Setting from "./Pages/Setting";
import ResetPassword from "./Pages/ResetPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import ProtectedRoute from "../src/ui/ProtectedRoute";
import { SidebarContextProvider } from "./context/SidebarContext";
import PostPage from "./Pages/PostPage";
import AddPostPage from "./Pages/AddPostPage";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";
import "easymde/dist/easymde.min.css";
import ViewDetailsPage from "./Pages/ViewDetailsPage";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <SidebarContextProvider>
          <DarkModeProvider>
            <UserDropdownProvider>
              <BrowserRouter>
                <Routes>
                  <Route index element={<Navigate to="login" />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route
                    element={
                      <ProtectedRoute>
                        <DashboardLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="post">
                      <Route path="allpost" element={<PostPage />}></Route>
                      <Route path="add" element={<AddPostPage />}></Route>
                      <Route path="category" element={<CategoryPage />}></Route>
                      <Route path="tag" element={<TagPage />}></Route>
                      <Route
                        path="/post/edit/:id"
                        element={<EditPostPage />}
                      ></Route>

                      <Route
                        path="/post/view/:id"
                        element={<ViewDetailsPage />}
                      ></Route>
                    </Route>
                    <Route path="/comment" element={<CommentPage />}></Route>
                    <Route
                      path="/comment/view/:id"
                      element={<CommentDetail />}
                    ></Route>

                    <Route path="/settings" element={<Setting />}></Route>
                  </Route>
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
        </SidebarContextProvider>
      </QueryClientProvider>
    </>
  );
};
export default App;
