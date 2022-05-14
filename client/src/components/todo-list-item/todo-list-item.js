import React from "react";
import "./todo-list-item.css";
import PropTypes from "prop-types";

const TodoListItem = (props) => {
  const {
    item: { id, label },
    clazz,
    onToogleImportant,
    onToggleDone,
    onRemove
  } = props;
  return (
    <li className="items-todo" key={id}>
      <span className={clazz} data-testid="record-item-span">
        <span className="todo-list-item-label" data-testid="record-item">
          {label}
        </span>
        <button
          onClick={onToogleImportant}
          type="button"
          className="btn btn-outline-success btn-sm float-right button-toggle-important"
        >
          <i className="fa fa-handshake-o" aria-hidden="true" />
        </button>
        <button
          onClick={onToggleDone}
          type="button"
          className="btn btn-outline-warning btn-sm float-right button-toggle-done"
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          onClick={onRemove}
          type="button"
          className="btn btn-outline-danger btn-sm float-right button-remove"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    </li>
  );
};
TodoListItem.propTypes = {
  item: PropTypes.any,
  clazz: PropTypes.string,
  onToogleImportant: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
TodoListItem.defaultProps = {
  item: { id: 1, label: "test" },
  clazz: "",
  onToogleImportant: () => console.log("onToogleImportant default"),
  onToggleDone: () => console.log("onToggleDone default"),
  onRemove: () => console.log("onRemove default")
};
export default TodoListItem;
