import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import ItemAddFormContainer from "./item-add-form-container";
import initialState from "../../store/initial-state";

describe("ItemAddFormContainer:", () => {
  test("check clear input after add record", () => {
    render(renderWithRedux(<ItemAddFormContainer />, initialState));
    const btn = screen.getByTestId("btn-addform");
    const input = screen.getByTestId("input-addform");
    fireEvent.input(input, {
      target: { value: "test" }
    });
    expect(input).toHaveProperty("value", "test");
    fireEvent.click(btn);
    expect(input).toHaveProperty("value", "");
  });
});
