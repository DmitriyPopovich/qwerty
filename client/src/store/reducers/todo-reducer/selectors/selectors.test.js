import {
  getMoreValue,
  getDoneValue,
  getItemsValues,
  getTermValue,
  getFilterValue
} from "./selectors";

describe("getMoreValue-selector:", () => {
  test("work with empty state", () => {
    expect(getMoreValue({})).toBe(0);
  });
  test("work with filled state", () => {
    expect(
      getMoreValue({
        todo: {
          more: 100
        }
      })
    ).toBe(100);
  });
});
describe("getDoneValue-selector:", () => {
  test("work with empty state", () => {
    expect(getDoneValue({})).toBe(0);
  });
  test("work with filled state", () => {
    expect(
      getDoneValue({
        todo: {
          done: 100
        }
      })
    ).toBe(100);
  });
});
describe("getTermValue-selector:", () => {
  test("work with empty state", () => {
    expect(getTermValue({})).toBe("");
  });
  test("work with filled state", () => {
    expect(
      getTermValue({
        todo: {
          term: "test"
        }
      })
    ).toBe("test");
  });
});
describe("getFilterValue-selector:", () => {
  test("work with empty state", () => {
    expect(getFilterValue({})).toBe("all");
  });
  test("work with filled state", () => {
    expect(
      getFilterValue({
        todo: {
          filter: "test"
        }
      })
    ).toBe("test");
  });
});
describe("getItemsValues-selector:", () => {
  test("work with empty state", () => {
    expect(getItemsValues({})).toEqual([]);
  });
  test("work with filled state", () => {
    expect(
      getItemsValues({
        todo: {
          items: [{ id: "test" }]
        }
      })
    ).toEqual([{ id: "test" }]);
  });
});
