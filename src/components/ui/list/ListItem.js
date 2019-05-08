import React, { useState } from 'react';
import { Link } from '@reach/router/unstable-hooks';

const ItemActions = ({ item, inlineEdit, onEdit, onRemove }) => {
  const [open, setOpen] = useState(false);

  const path = `/${item.__typename.toLowerCase()}/${item.id}`;

  return (
    <div className="btn-group">
      {inlineEdit ? (
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => {
            setOpen(false);
            onEdit();
          }}>
          Edit
        </button>
      ) : (
        <Link to={path} className="btn btn-primary btn-sm">
          Edit
        </Link>
      )}
      <button
        type="button"
        className="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split"
        onClick={() => setOpen(!open)}
      />
      <div className={`dropdown-menu${open ? ' show' : ''}`}>
        {inlineEdit ? (
          <button
            type="button"
            className="dropdown-item"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setOpen(false);
              onRemove();
            }}>
            Remove
          </button>
        ) : (
          <a
            href={'https://kitsu.io' + path}
            target="_blank"
            rel="noopener noreferrer"
            className="dropdown-item">
            View
          </a>
        )}
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

const ListItem = ({
  item,
  columns,
  inlineEdit,
  added,
  removed,
  edited,
  onEdit,
  onRemove,
  children
}) => (
  <tr
    key={item.id}
    style={{
      background: removed
        ? 'red'
        : added
        ? 'green'
        : edited
        ? 'yellow'
        : 'unset'
    }}>
    {[
      <ItemActions
        item={item}
        inlineEdit={inlineEdit}
        onEdit={onEdit}
        onRemove={onRemove}
      />,
      item.id,
      ...columns
    ].map((Column, key) => (
      <td key={key} className="align-middle text-nowrap">
        {Column}
      </td>
    ))}
  </tr>
);

export default ListItem;
