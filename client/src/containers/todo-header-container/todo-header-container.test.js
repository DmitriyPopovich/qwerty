import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import TodoHeaderContainer from "./todo-header-container";
import initialState from "../../store/initial-state";

describe("TodoHeaderContainer:", () => {
  test("Header exist on page", () => {
    render(renderWithRedux(<TodoHeaderContainer />, initialState));
    const more_container = screen.getByTestId("span-header-more");
    expect(more_container).toContainHTML("4");
  });
});
