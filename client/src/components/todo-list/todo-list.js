import React from "react";
import TodoListItemContainer from "../../containers/todo-list-item-container/";
import "./todo-list.css";
import PropTypes from "prop-types";

const TodoList = ({ items }) => {
  return (
    <ul className="list-group todo-list" id="todo-list-records">
      {items.map((item) => {
        return <TodoListItemContainer key={item.id} {...item} />;
      })}
    </ul>
  );
};
TodoList.propTypes = {
  items: PropTypes.array
};
TodoList.defaultProps = {
  items: []
};
export default TodoList;
