import React from "react";
import TableRow from "../TableRow";
import "./TableBody.css";
import PropTypes from "prop-types";

export default function TableBody(props) {
  let { currentPage, companiesOnPage, companies } = props.state;
  let rows = null;
  let from = currentPage * companiesOnPage - companiesOnPage;
  let to = currentPage * companiesOnPage;
  companies = companies.slice(from, to);
  if (companies.length > 0) {
    rows = companies.map(company => {
      return <TableRow key={company.id} company={company} />;
    });
  }

  return <div className="table-body">{rows}</div>;
}

TableBody.propTypes = {
  state: PropTypes.shape({
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
  })
};
