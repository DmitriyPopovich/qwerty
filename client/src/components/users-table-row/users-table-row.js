import React from "react";
import PropTypes from "prop-types";

const UsersTableRow = (props) => {
  const onIncrease = props.onIncrease;
  const onDecrease = props.onDecrease;
  const onRemove = props.onRemove;
  const { id, name, count } = props.item;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{count}</td>
      <td>
        <button
          onClick={() => onRemove(id)}
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
        <button
          onClick={() => onIncrease(id)}
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-plus-circle" />
        </button>
        <button
          onClick={() => onDecrease(id)}
          className="btn btn-outline-warning btn-sm float-right"
        >
          <i className="fa fa-minus-circle" />
        </button>
      </td>
    </tr>
  );
};
UsersTableRow.propTypes = {
  item: PropTypes.object,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
UsersTableRow.defaultProps = {
  items: { id: 1, name: "default", count: 0 },
  onIncrease: () => console.log("onIncrease default"),
  onDecrease: () => console.log("onDecrease default"),
  onRemove: () => console.log("onRemove default")
};

export default UsersTableRow;
