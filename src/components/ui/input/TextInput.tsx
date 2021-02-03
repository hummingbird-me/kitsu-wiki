import { startCase } from 'lodash';
import React, { ReactElement, useState } from 'react';

interface InputFields {
  fieldType: string;
  label?: string;
  initialValue?: string | null;
  readOnly?: boolean;
  parentDispatch: React.Dispatch<any>;
}

export default function TextInput({
  fieldType,
  label,
  initialValue,
  readOnly = false,
  parentDispatch,
}: InputFields): ReactElement {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;

    setValue(updatedValue);
    parentDispatch({ type: fieldType, payload: updatedValue });
  };
  const onChange = readOnly ? undefined : handleChange;
  // Move this formatter to some type of method. Splitting fieldType seems to be common.
  const formattedLabel = label ?? startCase(fieldType.split('.').slice(-1)[0]);

  return (
    <div>
      <label htmlFor={fieldType}>{formattedLabel}:</label>
      <input
        readOnly={readOnly}
        key={fieldType}
        type='text'
        value={value || ''}
        onChange={onChange}
      />
    </div>
  );
}
