import React from "react";
import { useSelector } from "react-redux";
import AppHeader from "../../components/todo-header";
import { getMoreValue } from "../../store/reducers/todo-reducer/selectors";
import { getDoneValue } from "../../store/reducers/todo-reducer/selectors";

const TodoHeaderContainer = () => {
  const more = useSelector(getMoreValue);
  const done = useSelector(getDoneValue);
  return <AppHeader more={more} done={done} />;
};
export default TodoHeaderContainer;
