import React from 'react'
import "./TableHeader.css"

export default function TableHeader(props){
    let {sort} = props;
    return (
      <div className="table-header">
        <div
          className="flex-1"
          onClick={sort}
          data-field-name="id"
        >
          Id
        </div>
        <div
          className="flex-3"
          onClick={sort}
          data-field-name="name"
        >
          Name
        </div>
        <div
          className="flex-3"
          onClick={sort}
          data-field-name="city"
        >
          City
        </div>
        <div
          className="flex-2"
          onClick={sort}
          data-field-name="sum"
        >
          total
        </div>
        <div
          className="flex-2"
          onClick={sort}
          data-field-name="avg"
        >
          average
        </div>
        <div
          className="flex-2"
          onClick={sort}
          data-field-name="lastMonthIncome"
        >
          last month
        </div>
      </div>
    );
}