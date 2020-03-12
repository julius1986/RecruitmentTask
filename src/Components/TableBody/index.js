import React from "react";
import TableRow from "../TableRow";
import "./TableBody.css";

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
