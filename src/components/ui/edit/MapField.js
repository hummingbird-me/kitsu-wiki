import React, { useContext, useState } from 'react';
import EditField from './EditField';
import InputField from './InputField';
import EditProvider, { EditContext } from './EditProvider';

const KeyField = ({ readOnly, type, field, validate, onDelete }) => (
  <div className="input-group mb-2">
    <div className="input-group-prepend" style={{ width: '80px' }}>
      <span className="input-group-text w-100">{field}</span>
    </div>
    <InputField
      field={field}
      readOnly={readOnly}
      type={type}
      validate={validate}
      withField={false}
    />
    <div className="input-group-append">
      <div className="btn btn-outline-danger" onClick={onDelete}>
        -
      </div>
    </div>
  </div>
);

const defaultValidator = value =>
  !!Object.keys(value).find(key => !value[key])
    ? ['Value cannot be empty']
    : [];

const MapField = ({
  readOnly,
  type,
  field,
  keyName,
  validate = defaultValidator
}) => {
  const {
    state: {
      value: { [field]: value },
      initialValue: { [field]: initialValue }
    },
    dispatch
  } = useContext(EditContext);

  const [mapKey, setMapKey] = useState('');

  return (
    <EditField field={field}>
      <EditProvider
        field={field}
        initialValue={initialValue}
        dispatch={dispatch}
        validate={validate}>
        {Object.keys(value).map(key => (
          <KeyField
            field={key}
            type={type}
            key={key}
            onDelete={() => {
              delete value[key];
              dispatch({ field, value, validate });
            }}
            validate={value => (!value ? ['Value cannot be empty'] : [])}
          />
        ))}
      </EditProvider>
      <div className="input-group" style={{ width: '120px' }}>
        <input
          type="text"
          placeholder={keyName}
          className="form-control"
          value={mapKey}
          onChange={({ target: { value } }) => setMapKey(value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-secondary"
            disabled={!mapKey}
            onClick={() => {
              dispatch({
                field,
                value: { ...value, [mapKey]: '' },
                validate
              });
              setMapKey('');
            }}>
            +
          </button>
        </div>
      </div>
    </EditField>
  );
};

export default MapField;
