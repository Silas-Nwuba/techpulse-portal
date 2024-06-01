import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeContext";
import { UserDropdownProvider } from "./context/UserDropdownContextApi";
import AppLayout from "./ui/AppLayout";
import DashboardLayout from "./ui/DashboardLayout";
import Dashboard from "./Pages/admin/Dashboard";
import Post from "./Pages/admin/PostPage";
import CommentPage from "./Pages/admin/ComentPage";
import CommentDetail from "./Pages/admin/CommentDetail";
import CreatePostPage from "./Pages/admin/CreatePost";
import EditPostPage from "./Pages/admin/EditPostPage";
import PageNotFound from "./ui/PageNotFound";
import Login from "./Pages/admin/Login";
import Setting from "./Pages/admin/Setting";
import ResetPassword from "./Pages/admin/ResetPassword";
import UpdatePassword from "./Pages/admin/UpdatePassword";
import HomePage from "./Pages/main/HomePage";
import TechnologyPage from "./Pages/main/TechnologyPage";
import BusinessPage from "./Pages/main/BusinessPage";
import SmartphonePage from "./Pages/main/SmartphonePage";
import GadgetPage from "./Pages/main/GadgetPage";
import ArticlePage from "./Pages/main/ArticlePage";
import LatestPostPage from "./Pages/main/LatestPostPage";
import OlderPostPage from "./Pages/main/OlderPostPage";
import { Helmet } from "react-helmet";
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
      <div className="App">
        <Helmet>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2814454738676259"
            crossorigin="anonymous"
          ></script>
          {/* <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2814454738676259"
            crossorigin="anonymous"
          ></script> */}
        </Helmet>
      </div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <DarkModeProvider>
          <UserDropdownProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<AppLayout />}>
                  <Route index element={<Navigate replace to="home" />} />
                  <Route path="home" element={<HomePage />} />
                  <Route path="technology" element={<TechnologyPage />} />
                  <Route path="business" element={<BusinessPage />} />
                  <Route path="smartphone" element={<SmartphonePage />} />
                  <Route path="gadget" element={<GadgetPage />} />
                  <Route path="latest" element={<LatestPostPage />} />
                  <Route path="older" element={<OlderPostPage />} />
                  <Route
                    path="/:name/article/:postId"
                    element={<ArticlePage />}
                  />
                </Route>
                <Route
                  element={
                    // <ProtectedRoute>
                    <DashboardLayout />
                    // </ProtectedRoute>
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
          </UserDropdownProvider>
        </DarkModeProvider>
      </QueryClientProvider>
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
    </>
  );
};
export default App;
