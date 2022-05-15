import React from "react";
import ErrorBoundary from "../../containers/error-boundry";
import AuthContainer from "../../containers/auth-container";

const AuthPage = () => {

  return (
      <ErrorBoundary>
          <AuthContainer />
      </ErrorBoundary>
  );
};

export default AuthPage;
