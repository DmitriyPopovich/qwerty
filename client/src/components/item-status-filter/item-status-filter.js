import React from "react";
import "./item-status-filter.css";
import PropTypes from "prop-types";

const ItemStatusFilter = (props) => {
  const { buttons, onChangeFilter } = props;
  return (
    <div className="btn-group" data-testid="main-div-itemstatusfilter">
      {buttons?.map(({ name, label, clazz }) => {
        return (
          <button
            type="button"
            className={clazz}
            id={name}
            key={name}
            onClick={onChangeFilter}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
ItemStatusFilter.propTypes = {
  buttons: PropTypes.array.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};
ItemStatusFilter.defaultProps = {
  text: "",
  buttons: [],
  addTodoHandler: () => console.log("addTodoHandler default")
};
export default ItemStatusFilter;
