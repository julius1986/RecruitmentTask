import React, { Component } from "react";
import "./TableOfCompanies.css";
import { getAllReadyCompanies, sortArrayByField, filterBy } from "./funcs";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";
import TableBody from "./TableBody";
import {
  COMPANIES_URL,
  INCOME_URL,
  SORT_WAY_ASC,
  SORT_WAY_DESC
} from "./const";

/**
 * Main component of table.
 * @component
 * @param {function} props.toogleLoading Function to turn off loading screen.
 * @property {Array<companies>} state.originCompanies Original array of companies
 * @property {Array<companies>} state.companies Copy of original array of companies for manipulations
 * @property {number} state.companiesOnPage Number companies on page ( number of rows )
 * @property {number} state.currentPage Current page
 * @property {number} state.minPage Min page
 * @property {number} state.maxPage Max page
 * @property {string} state.currentSortField Name of field for sorting, example sort by Name
 * @property {string} state.sortWay Asc or desc
 *
 */
class TableOfCompanies extends Component {
  state = {
    originCompanies: [],
    companies: [],
    companiesOnPage: 20,
    currentPage: 1,
    minPage: 1,
    maxPage: 1,
    currentSortField: null,
    sortWay: null
  };
  async componentDidMount() {
    let originCompanies = await getAllReadyCompanies(COMPANIES_URL, INCOME_URL);
    let companies = [...originCompanies];
    let maxPage = Math.round(companies.length / 20);
    this.setState({
      ...this.state,
      companies,
      maxPage,
      originCompanies
    });
    this.props.toogleLoading();
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
      if (this.state.sortWay === SORT_WAY_ASC) {
        this.setState({
          ...this.state,
          companies: sortArrayByField(
            this.state.companies,
            sortField,
            SORT_WAY_DESC
          ),
          sortWay: SORT_WAY_DESC,
          currentSortField: sortField
        });
      } else {
        this.setState({
          ...this.state,
          companies: sortArrayByField(
            this.state.companies,
            sortField,
            SORT_WAY_ASC
          ),
          sortWay: SORT_WAY_ASC,
          currentSortField: sortField
        });
      }
    } else {
      this.setState({
        ...this.state,
        companies: sortArrayByField(
          this.state.companies,
          sortField,
          SORT_WAY_ASC
        ),
        sortWay: SORT_WAY_ASC,
        currentSortField: sortField
      });
    }
  };

  render() {
    return (
      this.state.companies.length>0 && (
        <div className="table-of-companies">
          <TableHeader sort={this.sortBy} />
          <TableBody
            currentPage={this.state.currentPage}
            companiesOnPage={this.state.companiesOnPage}
            companies={this.state.companies}
          />
          <TableFooter
            prevPage={this.prevPage}
            maxPage={this.state.maxPage}
            currentPage={this.state.currentPage}
            nextPage={this.nextPage}
            inputHandle={this.inputHandle}
          />
        </div>
      )
    );
  }
}

export default TableOfCompanies;
