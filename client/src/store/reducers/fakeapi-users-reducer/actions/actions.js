export const onUserRemove = (state, action) => {
  state.users = state.users.filter((item) => item.id !== action.payload);
};
const getUserFromIdUsers = (state, action) => {
  return state.users.find((item) => item.id === action.payload);
};
const getUserFromIdCart = (state, action) => {
  return state.cartUsers.find((item) => item.id === action.payload);
};
export const onAddInCart = (state, action) => {
  const cart_list = state.cartUsers;
  const user_for_add = getUserFromIdUsers(state, action);
  const active_cart_item = getUserFromIdCart(state, action);
  if (active_cart_item) onIncreaseInCart(state, action);
  else {
    const data = {
      id: user_for_add.id,
      name: user_for_add.name,
      count: 1
    };
    cart_list.push(data);
  }
};
export const onIncreaseInCart = (state, action) => {
  const user_in_cart = getUserFromIdCart(state, action);
  if (user_in_cart) user_in_cart.count += 1;
};
export const onDecreaseInCart = (state, action) => {
  const user_in_cart = getUserFromIdCart(state, action);
  if (user_in_cart.count !== 1) user_in_cart.count -= 1;
  else onRemoveFromCart(state, action);
};
export const onRemoveFromCart = (state, action) => {
  state.cartUsers = state.cartUsers.filter(
    (item) => item.id !== action.payload
  );
};
