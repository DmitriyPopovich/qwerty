import React from "react";
import UsersTableRow from "../../components/users-table-row";
import { useDispatch } from "react-redux";
import {
  decreaseInCart,
  increaseInCart,
  removeFromCart
} from "../../store/reducers/fakeapi-users-reducer/fakeapi-reducer";
import PropTypes from "prop-types";

const UsersTableRowContainer = ({ item }) => {
  const dispatch = useDispatch();
  const onIncrease = (id) => dispatch(increaseInCart(id));
  const onDecrease = (id) => dispatch(decreaseInCart(id));
  const onRemove = (id) => dispatch(removeFromCart(id));
  return (
    <UsersTableRow
      item={item}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onRemove={onRemove}
    />
  );
};
UsersTableRowContainer.propTypes = {
  item: PropTypes.object.isRequired
};
UsersTableRowContainer.defaultProps = {
  item: {}
};
export default UsersTableRowContainer;
