import React from 'react'

export default function TableHeader(props){
    let {sort} = props;
    return (
      <div className="table-header">
        <div
          className="table-cell cell-1 md-1"
          onClick={sort}
          data-field-name="id"
        >
          Id
        </div>
        <div
          className="table-cell cell-2 md-2"
          onClick={sort}
          data-field-name="name"
        >
          Name
        </div>
        <div
          className="table-cell cell-3 md-2"
          onClick={sort}
          data-field-name="city"
        >
          City
        </div>
        <div
          className="table-cell cell-4 md-1"
          onClick={sort}
          data-field-name="sum"
        >
          total income
        </div>
        <div
          className="table-cell cell-5 md-1"
          onClick={sort}
          data-field-name="avg"
        >
          average income
        </div>
        <div
          className="table-cell cell-6 md-1"
          onClick={sort}
          data-field-name="lastMonthIncome"
        >
          last month income
        </div>
      </div>
    );
}