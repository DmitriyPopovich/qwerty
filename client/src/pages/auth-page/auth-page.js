import React from "react";
import ErrorBoundary from "../../containers/error-boundry";
import AuthFormContainer from "../../containers/auth-form/auth-form-container";

const AuthPage = () => {

  return (
      <ErrorBoundary>
          <AuthFormContainer />
      </ErrorBoundary>
  );
};

export default AuthPage;
