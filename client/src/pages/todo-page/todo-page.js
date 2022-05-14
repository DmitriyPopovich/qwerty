import React from "react";
import TodoHeaderContainer from "../../containers/todo-header-container";
import SearchBox from "../../components/search-box";
import TodoListContainer from "../../containers/todo-list-container";
import ItemAddFormContainer from "../../containers/item-add-form-container";

const TodoPage = () => {
  return (
    <div className="todo-app" data-testid="main-div-app">
      <TodoHeaderContainer />
      <SearchBox />
      <TodoListContainer />
      <ItemAddFormContainer />
    </div>
  );
};
export default TodoPage;
