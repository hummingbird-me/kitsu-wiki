import React, { useState } from 'react';
import { Link } from '@reach/router/unstable-hooks';

const ItemActions = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="btn-group">
      <Link to={'/anime/' + item.id} className="btn btn-primary btn-sm">
        Edit
      </Link>
      <button
        type="button"
        className="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split"
        onClick={() => setOpen(!open)}
      />
      <div className={`dropdown-menu${open ? ' show' : ''}`}>
        <a
          href={`https://kitsu.io/${item['__typename'].toLowerCase()}/${
            item.id
          }`}
          target="_blank"
          rel="noopener noreferrer"
          className="dropdown-item">
          View
        </a>
        <button
          type="button"
          className="dropdown-item"
          style={{ cursor: 'pointer' }}>
          Delete
        </button>
      </div>
    </div>
  );
};

const ListItem = ({ item, columns, children }) => (
  <tr key={item.id}>
    {[<ItemActions item={item} />, <>{item.id}</>, ...columns].map(
      (Column, key) => (
        <td key={key} className="align-middle text-nowrap">
          {Column}
        </td>
      )
    )}
  </tr>
);

export default ListItem;
