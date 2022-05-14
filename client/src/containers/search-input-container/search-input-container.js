import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTermValue } from "../../store/reducers/todo-reducer/selectors/";
import { setTerm } from "../../store/reducers/todo-reducer/";
import SearchInput from "../../components/search-input";

const SearchInputContainer = () => {
  const dispatch = useDispatch();
  const term = useSelector(getTermValue);
  const onChange = (e) => {
    const txt = e.target.value.trim().toLowerCase();
    dispatch(setTerm(txt));
  };
  return <SearchInput term={term} onChange={onChange} />;
};
export default SearchInputContainer;
