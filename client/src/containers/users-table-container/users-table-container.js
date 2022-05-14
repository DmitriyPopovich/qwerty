import React from "react";
import UsersTable from "../../components/users-table";
import { useSelector } from "react-redux";
import {
  getCartData,
  getCartTotal
} from "../../store/reducers/fakeapi-users-reducer/selectors";

const UsersTableContainer = () => {
  const cartUsers = useSelector(getCartData);
  const total = useSelector(getCartTotal);

  return cartUsers.length ? (
    <UsersTable items={cartUsers} total={total} />
  ) : (
    <h3>No data in cart</h3>
  );
};
export default UsersTableContainer;
