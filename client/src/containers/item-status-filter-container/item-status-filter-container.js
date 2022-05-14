import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterValue } from "../../store/reducers/todo-reducer/selectors";
import { setFilter } from "../../store/reducers/todo-reducer";
import ItemStatusFilter from "../../components/item-status-filter";

const ItemStatusFilterContainer = () => {
  const buttons_data = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const onChangeFilter = (e) => {
    dispatch(setFilter(e.target.id));
  };
  const buttonsMode = (data, filter) => {
    let clazz;
    return data.map((item) => {
      if (item.name === filter) clazz = "btn btn-info";
      else clazz = "btn btn-outline-secondary";
      return { ...item, clazz };
    });
  };
  const mod_button = buttonsMode(buttons_data, filter);
  return (
    <ItemStatusFilter buttons={mod_button} onChangeFilter={onChangeFilter} />
  );
};
export default ItemStatusFilterContainer;
