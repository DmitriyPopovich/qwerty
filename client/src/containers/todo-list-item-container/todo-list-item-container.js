import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleMain } from "../../store/reducers/todo-reducer";
import TodoListItem from "../../components/todo-list-item";
import PropTypes from "prop-types";

const TodoListItemContainer = ({ important, done, id, ...props }) => {
  const dispatch = useDispatch();
  const onToggleDone = () => dispatch(toggleMain({ id, field: "done" }));
  const onToogleImportant = () =>
    dispatch(toggleMain({ id, field: "important" }));
  const onRemove = () => dispatch(removeTodo(id));
  let clazz = "todo-list-item";
  if (done) clazz += " done";
  if (important) clazz += " important";
  return (
    <TodoListItem
      item={props}
      clazz={clazz}
      onToggleDone={onToggleDone}
      onToogleImportant={onToogleImportant}
      onRemove={onRemove}
    />
  );
};
TodoListItemContainer.propTypes = {
  important: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.any.isRequired
};
TodoListItemContainer.defaultProps = {
  important: false,
  done: false,
  id: 1
};
export default TodoListItemContainer;
