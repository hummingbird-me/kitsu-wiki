import React, { useContext } from 'react';
import useValidation from '../../../util/validation';
import { EditContext } from './EditProvider';
import EditField from './EditField';

const InputField = ({ type, readOnly, field, validate, withField = true }) => {
  const valueKey = type === 'checkbox' ? 'checked' : 'value';

  const {
    state: {
      value: { [field]: value },
    },
    dispatch,
  } = useContext(EditContext);

  const { validClass } = useValidation(field);

  const formClass =
    type === 'checkbox' ? 'custom-control-input' : 'form-control';

  const onChange = readOnly
    ? undefined
    : ({ target: { [valueKey]: value } }) =>
        dispatch({
          field,
          value: type === 'number' ? parseInt(value) : value,
          validate,
        });

  const inputProps = {
    type,
    readOnly,
    id: field,
    className: `${formClass} ${validClass}`,
    [valueKey]: value !== null ? value : undefined,
    onChange,
  };

  let Input = <input type={type} {...inputProps} />;
  if (type === 'textarea') {
    Input = <textarea rows="4" {...inputProps} />;
  }
  if (type === 'checkbox') {
    Input = (
      <div className="custom-control custom-checkbox">
        <input type="checkbox" {...inputProps} />
        <label className="custom-control-label" htmlFor={field}>
          {field}
        </label>
      </div>
    );
  }

  return withField ? <EditField field={field}>{Input}</EditField> : Input;
};

export default InputField;
