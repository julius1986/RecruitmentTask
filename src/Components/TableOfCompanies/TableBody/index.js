import React from "react";
import TableRow from "./TableRow";
import "./TableBody.css";
import PropTypes from "prop-types";

/**
 * This is body of table, here we have rows of table.
 * @component
 * @param {Object} props
 * @property {number} currentPage Number of curren page
 * @property {number} companiesOnPage Nmber of companies on the page.
 * @property {Array<{Object}>} companies Array of companies
 */
function TableBody(props) {
  let { currentPage, companiesOnPage, companies } = props;
  let rows = null;
  let from = currentPage * companiesOnPage - companiesOnPage;
  let to = currentPage * companiesOnPage;
  companies = companies.slice(from, to);
  if (companies.length > 0) {
    rows = companies.map(company => {
      return (
        <TableRow
          key={company.id}
          id={company.id}
          name={company.name}
          city={company.city}
          sum={company.sum}
          avg={company.avg}
          lastMonthIncome={company.lastMonthIncome}
        />
      );
    });
  }

  return <div className="table-body">{rows}</div>;
}

TableBody.propTypes = {
  currentPage: PropTypes.number,
  companiesOnPage: PropTypes.number,
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      city: PropTypes.string,
      sum: PropTypes.number,
      avg: PropTypes.number,
      lastMonthIncome: PropTypes.number
    })
  )
};

export default TableBody;
