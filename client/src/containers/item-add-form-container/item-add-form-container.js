import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import ItemAddForm from "../../components/item-add-form";
import { addTodo } from "../../store/reducers/todo-reducer";

const ItemAddFormContainer = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onAdd = () => {
    const txt = text.trim();
    if (txt) {
      dispatch(
        addTodo({
          id: uuid(),
          label: txt,
          important: false,
          done: false
        })
      );
      setText("");
    }
  };
  return (
    <ItemAddForm
      text={text}
      updateTextHandler={setText}
      addTodoHandler={onAdd}
    />
  );
};
export default ItemAddFormContainer;
