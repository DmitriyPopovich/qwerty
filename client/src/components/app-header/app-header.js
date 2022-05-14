import React from "react";
import "./app-header.css";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="header d-flex">
      <h3>
        <NavLink to="/">App</NavLink>
      </h3>
      <ul className="d-flex">
        <li>
          <NavLink
            to="/"
            activeclassname={"active"}
            data-testid="todo_link_nav"
          >
            Todo
          </NavLink>
        </li>
      </ul>
      <ul className="d-flex">
        <li>
          <NavLink
            to="/users"
            activeclassname={"active"}
            data-testid="users_link_nav"
          >
            Users
          </NavLink>
        </li>
      </ul>
        <ul className="d-flex">
            <li>
                <NavLink
                    to="/auth"
                    activeclassname={"active"}
                    data-testid="users_link_nav"
                >
                    Auth
                </NavLink>
            </li>
        </ul>
    </div>
  );
};

export default AppHeader;
