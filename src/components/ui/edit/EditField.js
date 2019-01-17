import React from 'react';
import useValidation from '../../../util/validation';

const EditField = ({ field, children }) => {
  const { dirty, valid, errors } = useValidation(field);

  return (
    <div className="form-group">
      <label htmlFor={field} className="mr-3">
        {field}
      </label>
      {children}
      <small className="form-text text-muted">Help text.</small>
      {dirty && !valid && (
        <div className="invalid-feedback">
          {errors.map((e, key) => (
            <div key={key} className="text-right">
              {e}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditField;
