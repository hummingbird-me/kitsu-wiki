import React, { useContext } from 'react';
import { EditContext } from './EditProvider';
import EditField from './EditField';
import EditProvider from './EditProvider';

const ElementField = ({
  readOnly,
  type,
  field,
  validate,
  value,
  onChange,
  onDelete
}) => (
  <div className="input-group mb-2">
    <input
      readOnly={readOnly}
      type={type}
      id={field}
      className="form-control"
      value={value}
      onChange={onChange}
    />
    <div className="input-group-append">
      <div className="btn btn-outline-danger" onClick={() => onDelete()}>
        -
      </div>
    </div>
  </div>
);

const ArrayField = ({ readOnly, type, field, validate }) => {
  const {
    state: {
      value: { [field]: value }
    },
    dispatch
  } = useContext(EditContext);

  return (
    <EditField field={field}>
      <EditProvider value={value}>
        {value.map((element, index) => (
          <ElementField
            readOnly={readOnly}
            type={type}
            field={index}
            key={index}
            value={value[index]}
            onChange={({ target: { value: newValue } }) =>
              dispatch({
                field,
                value: [
                  ...value.slice(0, index),
                  newValue,
                  ...value.slice(index + 1)
                ],
                validate
              })
            }
            onDelete={() =>
              dispatch({
                field,
                value: [...value.slice(0, index), ...value.slice(index + 1)],
                validate
              })
            }
          />
        ))}
      </EditProvider>
      {!readOnly && (
        <div
          className="btn btn-secondary"
          onClick={() => dispatch({ field, value: [...value, ''], validate })}>
          Add
        </div>
      )}
    </EditField>
  );
};

export default ArrayField;
