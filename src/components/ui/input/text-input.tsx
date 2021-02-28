import React, { ReactElement, useState } from 'react';
import LabelInput from './label-input';
import { Input, InputGroup } from './styles';

interface InputFields {
  fieldTitle?: string;
  fieldType: string;
  label?: string;
  initialValue?: string | null;
  readOnly?: boolean;
  parentDispatch: React.Dispatch<any>;
}

export default function TextInput({
  fieldTitle,
  fieldType,
  label,
  initialValue = '',
  readOnly = false,
  parentDispatch,
}: InputFields): ReactElement {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;

    setValue(updatedValue);
    parentDispatch({ type: fieldType, payload: { value: updatedValue } });
  };
  const onChange = readOnly ? undefined : handleChange;

  return (
    <InputGroup>
      <LabelInput fieldType={fieldTitle ?? fieldType} label={label} />

      <Input
        readOnly={readOnly}
        key={fieldType}
        type='text'
        value={value || ''}
        onChange={onChange}
      />
    </InputGroup>
  );
}
