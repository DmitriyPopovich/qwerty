import React from "react";
import ErrorBoundary from "../../containers/error-boundry";
import AuthContainer from "../../containers/auth-container";

const AuthPage = () => {

  return (
    <div className="todo-app" data-testid="users_div_app">
      <ErrorBoundary>
          <AuthContainer />
      </ErrorBoundary>
    </div>
  );
};

export default AuthPage;
