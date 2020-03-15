import React, { Component } from "react";
import TableOfCompanies from "../TableOfCompanies";
import LoadingScreen from "../LoadingScreen";

class App extends Component {
  state = { isLoading: true };
  toogleLoading = () => {
    this.setState(state=>{
      return {
        ...state,
        isLoading: !state.isLoading
      }
    })
  }
  render() {
    return (
      <div>
        <LoadingScreen isLoading={this.state.isLoading}></LoadingScreen>
        <TableOfCompanies toogleLoading={this.toogleLoading}></TableOfCompanies>
      </div>
    );
  }
}

export default App;
