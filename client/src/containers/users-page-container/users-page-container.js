import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/reducers/fakeapi-users-reducer/fakeapi-reducer";
import {
  getUserStatus,
  getUserError
} from "../../store/reducers/fakeapi-users-reducer/selectors";
import UsersPage from "../../pages/users-page";

const UsersPageContainer = () => {
  const dispatch = useDispatch();
  const status = useSelector(getUserStatus);
  const error = useSelector(getUserError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UsersPage status={status} error={error} />;
};
export default UsersPageContainer;
