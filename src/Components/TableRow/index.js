import React from 'react'
import "./TableRow.css"

export default function TableRow(props){    
    let { company } = props
    return (
      <div className="table-row">
        <div className="flex-1">{company.id}</div>
        <div className="flex-3">{company.name}</div>
        <div className="flex-3">{company.city}</div>
        <div className="flex-2">{company.sum}</div>
        <div className="flex-2">{company.avg}</div>
        <div className="flex-2">{company.lastMonthIncome}</div>
      </div>
    );
}