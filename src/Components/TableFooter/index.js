import React from "react";
import "./TableFooter.css";
import PropTypes from "prop-types";

export default function TableFooter(props) {
  const { currentPage, prevPage, maxPage, nextPage, inputHandle } = props;
  return (
    <div className="table-footer">
      <div className="pagination-group">
        <div className="btn" onClick={prevPage}>
          prev
        </div>
        <div className="curren-page">
          {currentPage}/{maxPage}
        </div>
        <div className="btn" onClick={nextPage}>
          next
        </div>
      </div>
      <div className="filter-group">
        Fillter:{" "}
        <input onChange={inputHandle} placeholder="filter all columns"></input>
      </div>
    </div>
  );
}

TableFooter.propTypes = {
  currentPage: PropTypes.number,
  maxPage: PropTypes.number,
  prevPage: PropTypes.func,
  nextPage: PropTypes.func,
  inputHandle: PropTypes.func
};
