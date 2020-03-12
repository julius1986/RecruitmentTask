import React from "react";
import "./TableFooter.css";

export default function TableFooter(props) {
  return (
    <div className="table-footer">
      <div className="pagination-group">
        <div className="btn" onClick={props.prevPage}>
          prev
        </div>
        <div className="curren-page">
          {props.currentPage}/{props.maxPage}
        </div>
        <div className="btn" onClick={props.nextPage}>
          next
        </div>
      </div>
      <div className="filter-group">
        Fillter:{" "}
        <input
          onChange={props.inputHandle}
          placeholder="filter all columns"
        ></input>
      </div>
    </div>
  );
}
