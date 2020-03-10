import React from 'react'

export default function TableRow(props){    
    let { company } = props
    return (
      <div className="table-row">
        <div className="table-cell cell-1 md-1">{company.id}</div>
        <div className="table-cell cell-2 md-2">{company.name}</div>
        <div className="table-cell cell-3 md-2">{company.city}</div>
        <div className="table-cell cell-4 md-1">{company.sum}</div>
        <div className="table-cell cell-5 md-1">{company.avg}</div>
        <div className="table-cell cell-6 md-1">{company.lastMonthIncome}</div>
      </div>
    );
}