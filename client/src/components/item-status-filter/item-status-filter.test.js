import React from "react";
import { render, screen } from "@testing-library/react";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import ItemStatusFilter from "./item-status-filter";

describe("Component ItemStatusFilter", () => {
  test("ItemStatusFilter exist on page", () => {
    const test_buttons = [{ name: "all", label: "All", clazz: "btn" }];
    const test_func = () => {};
    render(
      renderWithRedux(
        <ItemStatusFilter buttons={test_buttons} onChangeFilter={test_func} />,
        {}
      )
    );
    const main_div = screen.findAllByTestId("main-div-itemstatusfilter");
    expect(main_div).toBeDefined();
    const app_name = screen.getByText(/All/i);
    expect(app_name).toBeDefined();
  });
});
