import React, { useContext } from 'react';
import useValidation from '../../../util/validation';
import { EditContext } from './EditProvider';
import EditField from './EditField';

const SelectField = ({ readOnly, field, options, validate }) => {
  const {
    state: {
      value: { [field]: value }
    },
    dispatch
  } = useContext(EditContext);

  const { validClass } = useValidation(field);

  const onChange = readOnly
    ? undefined
    : ({ target: { value } }) => dispatch({ field, value, validate });

  return (
    <EditField field={field}>
      <select
        readOnly={readOnly}
        id={field}
        value={value !== null ? value : undefined}
        onChange={onChange}
        className={`form-control custom-select ${validClass}`}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </EditField>
  );
};

export default SelectField;
