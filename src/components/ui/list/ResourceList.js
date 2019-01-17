import React from 'react';

const ResourceList = ({ columns, children }) => (
  <table className="table table-hover">
    <thead className="thead-light">
      <tr>
        {['Action', 'ID', ...columns].map(col => (
          <th key={col} scope="col">
            {col}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

export default ResourceList;
