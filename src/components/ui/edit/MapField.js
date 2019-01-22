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
      <div className="btn btn-outline-danger" onClick={() => onDelete()}>
        -
      </div>
    </div>
  </div>
);

const MapField = ({ readOnly, type, field, validate }) => {
  const {
    state: {
      value: { [field]: value },
      initialValue: { [field]: initialValue }
    },
    dispatch
  } = useContext(EditContext);

  const [locale, setLocale] = useState(undefined);

  return (
    <EditField field={field}>
      <EditProvider
        field={field}
        initialValue={initialValue}
        dispatch={dispatch}>
        {Object.keys(value).map(key => (
          <KeyField
            field={key}
            type={type}
            key={key}
            onDelete={() => {
              delete value[key];
              dispatch({ field, payload: { value } });
            }}
          />
        ))}
      </EditProvider>
      <div className="input-group" style={{ width: '120px' }}>
        <input
          type="text"
          placeholder="Locale"
          className="form-control"
          onChange={({ target: { value } }) => setLocale(value)}
        />
        <div className="input-group-append">
          <div
            className="btn btn-secondary"
            onClick={() => {
              dispatch({
                field,
                payload: { value: { ...value, [locale]: '' } }
              });
              setLocale('');
            }}>
            +
          </div>
        </div>
      </div>
    </EditField>
  );
};

export default MapField;
