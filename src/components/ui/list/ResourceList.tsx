import React, { ReactElement } from 'react';

const ResourceList = ({
  columns = [],
  children,
}: {
  columns: Array<any>;
  children: any;
}): ReactElement => (
  <table className="table" style={{ marginBottom: 0 }}>
    <thead className="thead-light">
      <tr>
        {['Action', 'ID', ...columns].map((col) => (
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
