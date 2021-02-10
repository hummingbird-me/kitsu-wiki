import React, { ReactElement, useState } from 'react';
import LabelInput from './LabelInput';
import { TextArea, InputGroup } from './styles';

interface TextAreaInputFields {
  fieldType: string;
  label?: string;
  initialValue?: string;
  parentDispatch: React.Dispatch<any>;
}

export default function TextAreaInput({
  fieldType,
  label,
  initialValue = '',
  parentDispatch,
}: TextAreaInputFields): ReactElement {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;

    setValue(updatedValue);
    parentDispatch({ type: fieldType, payload: updatedValue });
  };

  return (
    <InputGroup>
      <LabelInput fieldType={fieldType} label={label} />
      <TextArea key={fieldType} value={value} onChange={() => handleChange} rows={10} cols={50} />
    </InputGroup>
  );
}
