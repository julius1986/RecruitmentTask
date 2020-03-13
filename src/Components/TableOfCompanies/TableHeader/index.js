import React from "react";
import "./TableHeader.css";
import PropTypes from "prop-types";
/**
 * Table header component.
 * @component
 * @param {Object} props
 * @property {function} sort
 */
function TableHeader(props) {
  let { sort } = props;
  return (
    <div className="table-header">
      <div className="sm-1" onClick={sort} data-field-name="id">
        Id
      </div>
      <div className="sm-3" onClick={sort} data-field-name="name">
        Name
      </div>
      <div className="sm-2" onClick={sort} data-field-name="city">
        City
      </div>
      <div className="sm-2" onClick={sort} data-field-name="sum">
        total
      </div>
      <div className="sm-2" onClick={sort} data-field-name="avg">
        average
      </div>
      <div className="sm-2" onClick={sort} data-field-name="lastMonthIncome">
        last month
      </div>
    </div>
  );
}

TableHeader.propTypes = {
  sort: PropTypes.func
};

export default TableHeader;
