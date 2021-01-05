import React, { useContext } from 'react';
import { EditContext } from './EditProvider';
import EditField from './EditField';

const ImageField = ({ readOnly, field, validate }) => {
  const {
    state: {
      value: { [field]: value },
    },
  } = useContext(EditContext);

  const src =
    value && !value.original.url.includes('missing.')
      ? value.original.url
      : undefined;

  const imgProps = {
    id: field,
    className: 'img-thumbnail d-block',
  };

  return (
    <EditField field={field}>
      {src ? (
        <img
          src={src}
          alt={field}
          style={{ height: '300px', width: 'unset' }}
          {...imgProps}
        />
      ) : (
        <div {...imgProps}>No Image</div>
      )}
    </EditField>
  );
};

export default ImageField;
