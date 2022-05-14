import React from "react";
import { render, screen } from "@testing-library/react";
import SearchInput from "./search-input";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";

describe("Component SearchInput", () => {
  test("Main div exist on page", () => {
    render(renderWithRedux(<SearchInput />, {}));
    const input = screen.getByPlaceholderText("search");
    expect(input).toBeDefined();
  });
});
