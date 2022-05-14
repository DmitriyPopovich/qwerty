import todoReducer, {
  addTodo,
  removeTodo,
  toggleMain,
  setTerm,
  setFilter
} from "./todo-reducer";

describe("TodoReducer-actions:", () => {
  test("setTerm", () => {
    expect(todoReducer({ term: "" }, setTerm("test"))).toEqual({
      term: "test"
    });
  });
  test("setFilter", () => {
    expect(todoReducer({ filter: "all" }, setFilter("done"))).toEqual({
      filter: "done"
    });
  });
  test("addTodo", () => {
    const state = { items: [], more: 0 };
    const data = {
      id: 1,
      label: "Build WebPack",
      important: false,
      done: false
    };
    const data_expect = {
      items: [{ id: 1, label: "Build WebPack", important: false, done: false }],
      more: 1
    };
    expect(todoReducer(state, addTodo(data))).toEqual(data_expect);
  });
  test("removeTodo", () => {
    const state = {
      items: [{ id: 1, label: "Build WebPack", important: false, done: false }],
      more: 1,
      done: 0
    };
    const data = 1;
    const data_expect = { items: [], more: 0, done: 0 };
    expect(todoReducer(state, removeTodo(data))).toEqual(data_expect);
  });
  test("toggleMain-done", () => {
    const field = { field: "done", id: 1 };
    const data = {
      items: [{ id: 1, label: "Build WebPack", important: false, done: false }],
      more: 1,
      done: 0
    };
    const data_expect = {
      items: [{ id: 1, label: "Build WebPack", important: false, done: true }],
      more: 0,
      done: 1
    };
    expect(todoReducer(data, toggleMain(field))).toEqual(data_expect);
  });
  test("toggleMain-important", () => {
    const field = { field: "important", id: 1 };
    const data = {
      items: [{ id: 1, label: "Build WebPack", important: true, done: false }]
    };
    const data_expect = {
      items: [{ id: 1, label: "Build WebPack", important: false, done: false }]
    };
    expect(todoReducer(data, toggleMain(field))).toEqual(data_expect);
  });
});
