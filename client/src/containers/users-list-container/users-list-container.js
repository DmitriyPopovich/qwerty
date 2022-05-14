import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "../../store/reducers/fakeapi-users-reducer/selectors";
import { fetchUsers } from "../../store/reducers/fakeapi-users-reducer/fakeapi-reducer";
import UsersLoadButton from "../../components/users-load-button";
import UsersRowContainer from "../users-row-container";

const UsersListContainer = () => {
  const users = useSelector(getUsersData);
  const dispatch = useDispatch();
  const buttonFetchUsers = () => dispatch(fetchUsers());

  return users.length ? (
    <UsersRowContainer users={users} />
  ) : (
    <UsersLoadButton fetchFunc={buttonFetchUsers} />
  );
};
export default UsersListContainer;
