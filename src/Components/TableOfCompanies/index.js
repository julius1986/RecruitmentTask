import React, { Component } from "react";
import './TableOfCompanies.css';
import { getAllReadyCompanies } from "./funcs";
import TableRow from "../TableRow"

class TableOfCompanies extends Component {
  state = {
    companies:[],
  }
  async componentDidMount(){
    let companies = await getAllReadyCompanies();
    this.setState({...this.state, companies});       
  }

  render(){
    let rows = null;
    let companies = this.state.companies; 
    if(companies.length>0){                        
      rows = this.state.companies.map(company => {                        
        return <TableRow key={company.id} company={company} />;                        
      });
    }
    return (<div className="table-of-companies">
      {rows}
    </div>);
  }
}

export default TableOfCompanies;
