import React from "react";
import "./users-list-item.css";
import PropTypes from "prop-types";

const UsersListItem = ({ id, name, email, phone, onRemove, onAdd }) => {
  return (
    <li>
      <div className="users-list-item">
        <div className="user-ldetails">
          <span className="user-ltitle">{name}</span>
          <div className="user-lauthor">{email}</div>
          <div className="user-lprice">{phone}</div>
          <button
            onClick={() => onAdd(id)}
            className="btn btn-info add-to-cart"
          >
            Add to Cart
          </button>
          <button
            onClick={() => onRemove(id)}
            className="btn btn-warning rm-rom-list"
          >
            Remove from list
          </button>
        </div>
      </div>
    </li>
  );
};
UsersListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func
};
UsersListItem.defaultProps = {
  id: 1,
  name: "default",
  email: "default",
  phone: "default",
  onRemove: () => console.log("onRemove default"),
  onAdd: () => console.log("onAdd default")
};
export default UsersListItem;
