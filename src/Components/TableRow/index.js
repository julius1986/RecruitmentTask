import React from 'react'

export default function TableRow(props){    
    let { company } = props
    return (
      <div className="table-row">
        <div className="table-cell cell-1">{company.id}</div>
        <div className="table-cell cell-2">{company.name}</div>
        <div className="table-cell cell-3">{company.city}</div>
        <div className="table-cell cell-4">{company.sum}</div>
        <div className="table-cell cell-5">{company.avg}</div>
      </div>
    );
}