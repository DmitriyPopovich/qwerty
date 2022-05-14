import { render, screen } from "@testing-library/react";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import TodoListItem from "./todo-list-item";
import React from "react";

describe("Component TodoListItem:", () => {
  test("TodoListItem exist on page", () => {
    const test_data_item = [{ id: 1, label: "Test" }];
    const test_data_clazz = "";
    const test_data_f = () => {};
    render(
      renderWithRedux(
        <TodoListItem
          item={test_data_item}
          clazz={test_data_clazz}
          onToggleDone={test_data_f}
          onToogleImportant={test_data_f}
          onRemove={test_data_f}
        />,
        {}
      )
    );
    const app_name = screen.queryByText(/Test/i);
    expect(app_name).toBeDefined();
  });
});
