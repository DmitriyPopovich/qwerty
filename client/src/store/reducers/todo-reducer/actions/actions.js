export const recountMore = (state, field) => {
  return state.items.filter((item) => !item[field]).length;
};
export const recountDone = (state, field) => {
  return state.items.filter((item) => item[field]).length;
};
export const getFilter = (filter) => {
  switch (filter) {
    case "all":
    case "done":
    case "active":
      return filter;
    default:
      return "all";
  }
};

export const onItemAdd = (state, action) => {
  state.items.push(action.payload);
  state.more += 1;
};
export const onItemRemove = (state, action) => {
  state.items = state.items.filter((item) => item.id !== action.payload);
  state.more = recountMore(state, "done");
  state.done = recountDone(state, "done");
};
export const onToggleMain = (state, action) => {
  const field = action.payload.field;
  const id = action.payload.id;
  const item = state.items.find((item) => item.id === id);
  item[field] = !item[field];
  if (field === "done") {
    state.more = recountMore(state, field);
    state.done = recountDone(state, field);
  }
};
export const onSetTerm = (state, action) => {
  state.term = action.payload;
};
export const onSetFilter = (state, action) => {
  state.filter = getFilter(action.payload);
};
