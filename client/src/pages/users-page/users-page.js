import React from "react";
import ErrorBoundary from "../../containers/error-boundry";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";
import UsersListContainer from "../../containers/users-list-container";
import PropTypes from "prop-types";
import UsersTableContainer from "../../containers/users-table-container";

const UsersPage = ({ status, error }) => {
  return (
    <div className="todo-app" data-testid="users_div_app">
      <ErrorBoundary>
        {status === "loading" && <Spinner />}
        {error && <ErrorIndicator />}
        <UsersListContainer />
        <UsersTableContainer />
      </ErrorBoundary>
    </div>
  );
};
UsersPage.propTypes = {
  status: PropTypes.any.isRequired,
  error: PropTypes.any.isRequired
};

export default UsersPage;
