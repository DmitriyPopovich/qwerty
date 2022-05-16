import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsPage from "../pages/posts-page/posts-page";
import PostPage from "../pages/post-page";
import ErrorPage from "../pages/error-page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<PostsPage />} />
        <Route path="/post/:id" element={<PostPage/>} />
        <Route path="/post" element={<PostPage />} />
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
};
export default AppRouter;
