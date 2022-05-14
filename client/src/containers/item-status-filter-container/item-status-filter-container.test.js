import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import ItemStatusFilterContainer from "./item-status-filter-container";
import initialState from "../../store/initial-state";

describe("ItemStatusFilterContainer:", () => {
  test("check change style after click filter", () => {
    render(renderWithRedux(<ItemStatusFilterContainer />, initialState));
    const btn_all = screen.getByText(/All/i);
    const btn_done = screen.getByText(/Done/i);
    expect(btn_done).not.toHaveClass("btn-info");
    expect(btn_all).toHaveClass("btn-info");
    fireEvent.click(btn_done);
    expect(btn_all).not.toHaveClass("btn-info");
    expect(btn_done).not.toHaveClass("btn-outline-secondary");
  });
});
