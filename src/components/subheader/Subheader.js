import React from "react";
import "./subheader.scss";
const Subheader = () => {
  return (
    <div className="subheader-box">
      <ul className="nav-list">
        <li className="nav-list__item">
          <select className="select">
            <option>show all</option>
          </select>
        </li>
        <li className="nav-list__item">
          <select className="select">
            <option>All grades</option>
          </select>
        </li>
        <li className="nav-list__item">
          <select className="select">
            <option>All classes</option>
          </select>
        </li>
        <li className="nav-list__item">
          <select className="select">
            <option>Av.Score</option>
          </select>
        </li>
        <li className="nav-list__item">
          <select className="select">
            <option>Av.Speed</option>
          </select>
        </li>
        <li className="nav-list__item">
          <select className="select">
            <option>All Classes</option>
          </select>
        </li>
        <li className="nav-list__item">
          <button type="button" className="button__subheader">
            clear all
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Subheader;
