import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "../pages/posts/posts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Posts />} />
      <Route path="*" element={<h3>Page not found</h3>} />
    </Routes>
  );
};
export default AppRouter;
