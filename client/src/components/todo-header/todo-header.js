import React from "react";
import "./todo-header.css";
import PropTypes from "prop-types";

const TodoHeader = ({ more, done }) => {
  return (
    <div className="app-header d-flex" data-testid="main-div-header">
      <h2>Todo List</h2>
      <h3 className="list-done">
        <span data-testid="span-header-more">{more}</span> more to do, {done}{" "}
        done
      </h3>
    </div>
  );
};
TodoHeader.propTypes = {
  more: PropTypes.number,
  done: PropTypes.number
};
TodoHeader.defaultProps = {
  more: 0,
  done: 0
};
export default TodoHeader;
