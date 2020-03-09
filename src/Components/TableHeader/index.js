import React from 'react'

export default function TableHeader(){
    return (
      <div className="table-header">
        <div className="table-cell cell-1 md-1">Id</div>
        <div className="table-cell cell-2 md-2">Name</div>
        <div className="table-cell cell-3 md-2">City</div>
        <div className="table-cell cell-4 md-2">total income</div>
        <div className="table-cell cell-5 md-1">average income</div>
      </div>
    );
}