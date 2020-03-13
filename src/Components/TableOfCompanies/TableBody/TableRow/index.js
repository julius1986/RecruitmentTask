import React from "react";
import "./TableRow.css";
import PropTypes from "prop-types";

/**
 * Row of the table.
 * @component
 * @param {Object} props
 * @property {number} id id of company
 * @property {string} name name of company
 * @property {string} city name of city
 * @property {number} sum total income (sum of company incomes)
 * @property {number} avg average income (average of company incomes)
 * @property {number} lastMonthIncome last month income (sum of last month incomes) columns.
 */
function TableRow(props) {
  let { id, name, city, sum, avg, lastMonthIncome } = props;
  return (
    <div className="table-row">
      <div className="cell sm-1">{id}</div>
      <div className="cell sm-3">{name}</div>
      <div className="cell sm-2">{city}</div>
      <div className="cell sm-2">{sum}</div>
      <div className="cell sm-2">{avg}</div>
      <div className="cell sm-2">{lastMonthIncome}</div>
    </div>
  );
}

TableRow.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    city: PropTypes.string,
    sum: PropTypes.number,
    avg: PropTypes.number,
    lastMonthIncome: PropTypes.number
};

export default TableRow;