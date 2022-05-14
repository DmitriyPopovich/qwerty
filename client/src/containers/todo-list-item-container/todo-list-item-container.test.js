import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import TodoListItemContainer from "./todo-list-item-container";
import initialState from "../../store/initial-state";
import React from "react";

describe("TodoListItemContainer:", () => {
  test("check record style", () => {
    const initial_data = {
      id: 1,
      label: "Build WebPack",
      important: false,
      done: true
    };
    let initial_data_state = initialState;
    initial_data_state.todo.filter = "done";
    render(
      renderWithRedux(
        <TodoListItemContainer key={initial_data.id} {...initial_data} />,
        initial_data_state
      )
    );
    const record_true_done = screen.getByTestId("record-item-span");
    expect(record_true_done).toHaveClass("done");
  });
});
