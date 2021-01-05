import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ListControlsInterface {
  type: string;
  columns: any;
  setColumns: any;
}

const ListControls = ({ type, columns, setColumns }: ListControlsInterface) => {
  const [columnsDropdownOpen, setColumnsDropdownOpen] = useState(false);

  return (
    <div className="row justify-content-between mb-3">
      <div className="col-md-auto">
        <Link to={`/${type}/add`} type="button" className="btn btn-primary">
          Add New
        </Link>
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
            {Object.keys(columns).map((key) => (
              <button
                key={key}
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
