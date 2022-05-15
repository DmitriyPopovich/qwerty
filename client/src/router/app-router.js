import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/auth-page";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<AuthPage />} />
      <Route path="*" element={<h3>Page not found</h3>} />
    </Routes>
  );
};
export default AppRouter;
