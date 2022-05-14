const todo_initialItems = [
  { id: 1, label: "Build WebPack", important: false, done: false },
  { id: 2, label: "Create React/Redux App", important: true, done: false },
  { id: 3, label: "React Testing", important: false, done: false },
  { id: 4, label: "E2E Testing", important: false, done: true }
];
const initialState = {
  todo: {
    items: todo_initialItems,
    done: 0,
    more: todo_initialItems.length,
    term: "",
    filter: "all" //all, done, active
  },
  fakeapi: {
    users: [],
    cartUsers: [],
    status: false,
    error: false
  },
  auth: {
    user: false,
    status: false,
    error: false
  }
};
export default initialState;
