import React from "react";
import PropTypes from "prop-types";

const UsersLoadButton = ({ fetchFunc }) => {
  return (
    <button
      onClick={fetchFunc}
      className="btn btn-danger add-to-cart"
      data-testid="users_load_btn"
    >
      Load Users
    </button>
  );
};
UsersLoadButton.propTypes = {
  fetchFunc: PropTypes.func
};
UsersLoadButton.defaultProps = {
  fetchFunc: () => console.log("fetchFunc default")
};
export default UsersLoadButton;
