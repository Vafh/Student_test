import "./studentsListPage.scss";
import React, { useEffect, useState } from "react";
import { fetchData, fetchSearch } from "../../service/Api";
import Table from "../../components/table/Table";
import PaginatedItems from "../../helpers/pagination";

const StudentsListPage = () => {
  const [query, setQuery] = useState("");
  const [res, setRes] = useState("");
  const [page, setPage] = useState(1);
  const [state, setstate] = useState("");
  useEffect(() => {
    fetchSearch(1, 1, query)
      .then(setRes)
      .catch((err) => console.log(err.message));
  }, [query]);
  const itemsPerPage = 10;
  useEffect(() => {
    fetchData(page, itemsPerPage)
      .then(setstate)
      .catch((err) => console.log(err.message));
  }, [itemsPerPage, page]);

  const pageChange = () =>
    setPage(() => {
      if (page === 0 || page === 1) {
        return page + 1;
      } else {
        return page - 1;
      }
    });
  const onClick = (e) => {
    setQuery(e.currentTarget.value);
    // query !== "" &&
    //   fetchSearch(1, 1, query)
    //     .then(setRes)
    //     .catch((err) => console.log(err.message));
  };
  console.log(query);
  return (
    <>
      <div className="studentsListPage__box">
        <p className="studentsListPage__text">Students</p>
        <label>
          <input className="studentsListPage__input" onChange={onClick} />
        </label>
        <button type="button" className="studentsListPage__button">
          Export CSV
        </button>
      </div>
      <Table search={res} state={state} />
      <PaginatedItems
        itemsPerPage={itemsPerPage}
        page={page}
        pageChange={pageChange}
      />
    </>
  );
};

export default StudentsListPage;
