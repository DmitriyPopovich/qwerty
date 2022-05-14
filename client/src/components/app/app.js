import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppRouter from "../../router";
import AppHeader from "../app-header";
import "./app.scss";

const App = () => {
  return (
    <>
      <AppHeader />
      <AppRouter />
    </>
  );
};
export default App;
