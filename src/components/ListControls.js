import React, { useState } from 'react';

const ListControls = ({ columns, setColumns }) => {
  const [columnsDropdownOpen, setColumnsDropdownOpen] = useState(false);

  return (
    <div className="row justify-content-between mb-3">
      <div className="col-md-auto">
        <button type="button" className="btn btn-primary">
          Add New
        </button>
      </div>
      <div className="col-md-auto">
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            onClick={() => setColumnsDropdownOpen(!columnsDropdownOpen)}>
            Displayed Columns
          </button>
          <div className={`dropdown-menu${columnsDropdownOpen ? ' show' : ''}`}>
            {Object.keys(columns).map(key => (
              <button
                type="button"
                className={`dropdown-item${columns[key] ? ' active' : ''}`}
                onClick={() =>
                  setColumns({ ...columns, [key]: !columns[key] })
                }>
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListControls;
