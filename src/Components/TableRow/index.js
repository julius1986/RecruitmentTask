import React from "react";
import "./TableRow.css";

export default function TableRow(props) {
  let { company } = props;
  return (
    <div className="table-row">
      <div className="cell flex-1">{company.id}</div>
      <div className="cell flex-5">{company.name}</div>
      <div className="cell flex-4">{company.city}</div>
      <div className="cell flex-2">{company.sum}</div>
      <div className="cell flex-2">{company.avg}</div>
      <div className="cell flex-2">{company.lastMonthIncome}</div>
    </div>
  );
}
