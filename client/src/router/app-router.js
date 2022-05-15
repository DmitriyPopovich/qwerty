import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "../pages/posts/posts";
import NewPostContainer from "../containers/new-post/new-post-container";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Posts />} />
      <Route path="/posts" exact element={<Posts />} />
      <Route path="/new_post" exact element={<NewPostContainer />} />
      <Route path="*" element={<h3>Page not found</h3>} />
    </Routes>
  );
};
export default AppRouter;
