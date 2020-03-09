import React, { Component } from "react";
import './TableOfCompanies.css';
import { fetchCompanies, fetchIncomesById } from "./funcs"

class TableOfCompanies extends Component {
  state = {
    companies:[],
  }
  componentDidMount(){
    fetchCompanies().then(res=>{
      this.setState({...this.state, companies:res})    
    })
    .catch(err=>{console.log(err);})
  }
  render(){
            return (<div className="TableOfCompanies">test</div>);
          }
}

export default TableOfCompanies;
