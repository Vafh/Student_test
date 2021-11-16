import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <div className="header-box">
      <select className="select select_marginLeft">
        <option>School 1</option>
        <option>School 2</option>
      </select>
      <nav className="nav_marginLeft">
        <ul className="nav-list">
          <li className="nav-list__item">Analytics</li>
          <li className="nav-list__item">Gradebooks</li>
          <li className="nav-list__item">Tests</li>
          <li className="nav-list__item">Students</li>
          <li className="nav-list__item">Teachers</li>
          <li className="nav-list__item">Archive</li>
        </ul>
      </nav>
      <select className="select select__avatar">
        <option>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; </option>
      </select>
    </div>
  );
};

export default Header;
