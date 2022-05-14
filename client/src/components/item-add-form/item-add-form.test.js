import React from "react";
import { render, screen } from "@testing-library/react";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import ItemAddForm from "./item-add-form";

describe("Component ItemAddForm", () => {
  test("ItemAddForm exist on page", () => {
    const text = "";
    const fn = () => {};
    render(
      renderWithRedux(
        <ItemAddForm text={text} updateTextHandler={fn} addTodoHandler={fn} />,
        {}
      )
    );
    const main_div = screen.queryByTestId("main-div-addform");
    expect(main_div).toBeDefined();
  });
});
