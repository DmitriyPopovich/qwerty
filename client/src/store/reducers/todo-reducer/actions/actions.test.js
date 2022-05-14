import { recountMore, recountDone, getFilter } from "./actions";

describe("TodoReducer-help-reducer-actions:", () => {
  test("getFilter-correct", () => {
    const data = "done";
    const data_expect = "done";
    expect(getFilter(data)).toBe(data_expect);
  });
  test("getFilter-incorrect", () => {
    const data = "test";
    const data_expect = "all";
    expect(getFilter(data)).toBe(data_expect);
  });
  test("recountDone", () => {
    const data = { items: [{ done: true }, { done: true }, { done: false }] };
    const data_expect = 2;
    const filter = "done";
    expect(recountDone(data, filter)).toBe(data_expect);
  });
  test("recountMore", () => {
    const data = { items: [{ done: false }, { done: true }, { done: true }] };
    const data_expect = 1;
    const filter = "done";
    expect(recountMore(data, filter)).toBe(data_expect);
  });
});
