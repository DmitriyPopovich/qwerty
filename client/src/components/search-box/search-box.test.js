import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBox from "./search-box";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";

describe("Component SearchBox", () => {
  test("Main div exist on page", () => {
    render(renderWithRedux(<SearchBox />, {}));
    const main_div = screen.queryByTestId("main-div-searchbox");
    expect(main_div).toBeDefined();
  });
});
