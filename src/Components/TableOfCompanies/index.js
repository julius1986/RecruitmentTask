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
    this.setState({...this.state, companies})
    console.log(this.state);
       
  }

  render(){
    let rows = null;
    let companies = this.state.companies; 
    if(companies.length>0){                        
      rows = this.state.companies.map(companie => {                        
        return <TableRow key={companie.id} companie={companie} />;                        
      });
    }
    return (<div className="TableOfCompanies">
      {rows}
    </div>);
  }
}

export default TableOfCompanies;
