import React from "react";
import { useSelector } from "react-redux";
import TodoList from "../../components/todo-list";
import {
  getItemsValues,
  getTermValue,
  getFilterValue
} from "../../store/reducers/todo-reducer/selectors";

const TodoListContainer = () => {
  const items = useSelector(getItemsValues);
  const term = useSelector(getTermValue);
  const filter = useSelector(getFilterValue);
  const search = (items, term) => {
    if (term === "") return items;
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term) > -1;
    });
  };
  const statusFilter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };
  const prepare_items = statusFilter(search(items, term), filter);
  return <TodoList items={prepare_items} />;
};
export default TodoListContainer;
