import React from "react";
import "./TableFooter.css";
import PropTypes from "prop-types";

/**
 * Table footer, here we have paginatiion and filter.
 * 
 * @component
 * @property {Object} props
 * @param {number} currentPage Current page.
 * @param {number} maxPage Max page.
 * @param {function} prevPage Previous page.
 * @param {function} nextPage Next page.
 * @param {function} inputHandle Change list on input.
 *
 */
function TableFooter(props) {
  let { currentPage, maxPage, prevPage, nextPage, inputHandle } = props;
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

export default TableFooter;
