import React from "react";
import { render, screen } from "@testing-library/react";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import TodoListContainer from "./todo-list-container";
import "@testing-library/jest-dom/extend-expect";

describe("TodoListContainer:", () => {
  let initialState = {
    todo: {
      items: [
        { id: 1, label: "Build WebPack", important: false, done: false },
        {
          id: 2,
          label: "Create React/Redux App",
          important: false,
          done: false
        },
        { id: 3, label: "React Testing", important: false, done: true },
        { id: 4, label: "E2E Testing", important: false, done: false }
      ],
      done: 0,
      more: 4,
      term: "",
      filter: "done" //all, done, active
    }
  };
  test("check status filter result", () => {
    render(renderWithRedux(<TodoListContainer />, initialState));
    const record_true = screen.getByText(/React Testing/i);
    expect(record_true).toBeInTheDocument();
    const record_false = screen.queryByText(/E2E Testing/i);
    expect(record_false).not.toBeInTheDocument();
  });
  test("check find filter result", () => {
    initialState.todo.filter = "all";
    initialState.todo.term = "react";
    render(renderWithRedux(<TodoListContainer />, initialState));
    const record_true = screen.getByText(/React Testing/i);
    expect(record_true).toBeInTheDocument();
    const record_false = screen.queryByText(/E2E Testing/i);
    expect(record_false).not.toBeInTheDocument();
  });
});
