import React, { Component } from "react";
import "./TableOfCompanies.css";
import { getAllReadyCompanies, sortArrayByField, filterBy } from "./funcs";
import TableHeader from "../TableHeader";
import TableFooter from "../TableFooter";
import TableBody from "../TableBody";

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
    let companies;
    if (value === "") {
      companies = [...this.state.originCompanies];
    } else {
      companies = filterBy(this.state.originCompanies, value);
    }
    if (companies) {
      let maxPage = Math.round(companies.length / 20);
      if (maxPage === 0) {
        maxPage = 1;
      }
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
    return (
      <div className="table-of-companies">
        <TableHeader sort={this.sortBy} />
        <TableBody state={this.state} />
        <TableFooter
          prevPage={this.prevPage}
          maxPage={this.state.maxPage}
          currentPage={this.state.currentPage}
          nextPage={this.nextPage}
          inputHandle={this.inputHandle}
        />
      </div>
    );
  }
}

export default TableOfCompanies;
