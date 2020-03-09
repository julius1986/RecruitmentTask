import React, { Component } from "react";
import './TableOfCompanies.css';
import { getAllReadyCompanies } from "./funcs";

class TableOfCompanies extends Component {
  state = {
    companies:[],
  }
  async componentDidMount(){
    let companies = await getAllReadyCompanies();
    this.setState({...this.state, companies})
  }

  render(){
    return (<div className="TableOfCompanies">test</div>);
  }
}

export default TableOfCompanies;
