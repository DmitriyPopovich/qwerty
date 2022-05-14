import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import SearchInputContainer from "./search-input-container";
import initialState from "../../store/initial-state";

describe("SearchInputContainer:", () => {
  test("check trim and to_lower_case input", () => {
    render(renderWithRedux(<SearchInputContainer />, initialState));
    const input = screen.getByTestId("input-search");
    fireEvent.input(input, {
      target: { value: "TEST   " }
    });
    expect(input).toHaveProperty("value", "test");
  });
});
