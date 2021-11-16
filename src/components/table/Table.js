import "./table.scss";
import React from "react";
import select from "../../images/select.png";
import nextId from "react-id-generator";

const Table = ({ search, state }) => {
  const onClick = () => {};
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>ID</th>
            <th>ZIP</th>
            <th>Class</th>
            <th>Av. Score, %</th>
            <th>Av. Speed</th>
            <th>Parents</th>
          </tr>
        </thead>
        {search?.data?.length !== 1
          ? state &&
            state.data.map((data) => (
              <tbody key={nextId()}>
                <tr>
                  <td className="table__checkbox">
                    <input type="checkbox" />
                  </td>
                  <td>{data.name}</td>
                  <td>Reeves</td>
                  <td>67439</td>
                  <td>10/18/1985</td>
                  <td>4</td>
                  <td>0.1</td>
                  <td>$50</td>
                  <td>
                    <button className="table__btn" onClick={onClick}>
                      <img src={select} alt="select" width="10" height="5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          : search.data?.map((search) => (
              <tbody key={nextId()}>
                <tr>
                  <td className="table__checkbox">
                    <input type="checkbox" />
                  </td>
                  <td>{search.name}</td>
                  <td>Reeves</td>
                  <td>67439</td>
                  <td>10/18/1985</td>
                  <td>4</td>
                  <td>0.1</td>
                  <td>$50</td>
                </tr>
              </tbody>
            ))}
      </table>
      <p className="text">Archived</p>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__checkbox">
              <input type="checkbox" />
            </td>
            <td>Gloria</td>
            <td>Reeves</td>
            <td>67439</td>
            <td>10/18/1985</td>
            <td>4</td>
            <td>0.1</td>
            <td>$50</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
