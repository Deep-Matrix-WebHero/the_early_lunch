import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "green",
  };
  return (
    <div className="header">
      <NavLink to="/home" activeStyle={activeStyle}>
        Home
      </NavLink>

      <NavLink to="/restaurant" activeStyle={activeStyle}>
        Restaurant
      </NavLink>
    </div>
  );
};

export default Header;
