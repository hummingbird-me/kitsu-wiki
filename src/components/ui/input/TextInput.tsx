import React, { ReactElement, useState } from 'react';

interface InputFields {
  fieldType: string;
  initialValue?: string;
  readOnly?: boolean;
  parentDispatch: React.Dispatch<any>;
}

export default function TextInput({
  fieldType,
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

  return (
    <input
      readOnly={readOnly}
      key={fieldType}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}
