import React from "react";
import { render, screen } from "@testing-library/react";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import TodoList from "./todo-list";

describe("Component TodoList:", () => {
  test("TodoList exist on page", () => {
    const test_data = [{ id: 1, label: "Test", important: false, done: false }];
    render(renderWithRedux(<TodoList items={test_data} />, {}));
    const app_name = screen.queryByText(/Test/i);
    expect(app_name).toBeDefined();
  });
});
