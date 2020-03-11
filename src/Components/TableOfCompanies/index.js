import React, { Component } from "react";
import "./TableOfCompanies.css";
import { getAllReadyCompanies, sortArrayByField, filterBy } from "./funcs";
import TableRow from "../TableRow";
import TableHeader from "../TableHeader";

class TableOfCompanies extends Component {
  state = {
    originCompanies: [],
    companies: [],
    companiesOnPage: 20,
    currentPage: 1,
    minPage: 1,
    maxPage: 1,
    currentSortField: null,
    sortWay: null,
    filterBy: null
  };
  async componentDidMount() {
    let originCompanies = await getAllReadyCompanies();
    let companies = [...originCompanies];
    let maxPage = Math.round(companies.length / 20);
    this.setState({
      ...this.state,
      companies,
      maxPage,
      originCompanies
    });
  }

  inputHandle = e => {
    let { value } = e.target;
    let companies = filterBy(this.state.originCompanies, value);
    if (companies) {
      let maxPage = Math.round(companies.length / 20);
      this.setState({
        ...this.state,
        companies,
        maxPage,
        currentPage: 1
      });
    }
  };

  nextPage = () => {
    if (this.state.currentPage < this.state.maxPage) {
      this.setState((state, props) => {
        return { ...this.setState, currentPage: state.currentPage + 1 };
      });
    }
  };

  prevPage = () => {
    if (this.state.currentPage > this.state.minPage) {
      this.setState((state, props) => {
        return { ...this.setState, currentPage: state.currentPage - 1 };
      });
    }
  };

  sortBy = e => {
    let sortField = e.target.getAttribute("data-field-name");
    if (this.state.currentSortField) {
      if (this.state.sortWay === "ASC") {
        this.setState({
          ...this.state,
          companies: sortArrayByField(this.state.companies, sortField, "DESC"),
          sortWay: "DESC",
          currentSortField: sortField
        });
      } else {
        this.setState({
          ...this.state,
          companies: sortArrayByField(this.state.companies, sortField, "ASC"),
          sortWay: "ASC",
          currentSortField: sortField
        });
      }
    } else {
      this.setState({
        ...this.state,
        companies: sortArrayByField(this.state.companies, sortField, "ASC"),
        sortWay: "ASC",
        currentSortField: sortField
      });
    }
  };

  render() {
    let rows = null;
    let from =
      this.state.currentPage * this.state.companiesOnPage -
      this.state.companiesOnPage;
    let to = this.state.currentPage * this.state.companiesOnPage;
    let companies = this.state.companies.slice(from, to);
    if (companies.length > 0) {
      rows = companies.map(company => {
        return <TableRow key={company.id} company={company} />;
      });
    }
    return (
      <div className="table-of-companies">
        <TableHeader sort={this.sortBy} />
        {rows}
        <button onClick={this.prevPage}>prev</button>
        <button onClick={this.nextPage}>next</button>
        <input onChange={this.inputHandle}></input>
      </div>
    );
  }
}

export default TableOfCompanies;
