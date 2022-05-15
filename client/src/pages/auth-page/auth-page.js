import React from "react";
import ErrorBoundary from "../../containers/error-boundry";
import Auth from "../../containers/auth";

const AuthPage = () => {

  return (
      <ErrorBoundary>
          <Auth />
      </ErrorBoundary>
  );
};

export default AuthPage;
