import React, { ReactElement, useState } from 'react';
import LabelInput from './LabelInput';
import { Input, InputGroup } from './styles';

interface InputFields {
  fieldType: string;
  label?: string;
  cache?: string | null;
  initialValue?: string | null;
  readOnly?: boolean;
  parentDispatch: React.Dispatch<any>;
}

export default function TextInput({
  fieldType,
  label,
  cache = null,
  initialValue = '',
  readOnly = false,
  parentDispatch,
}: InputFields): ReactElement {
  const [value, setValue] = useState(cache || initialValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;

    setValue(updatedValue);
    parentDispatch({ type: fieldType, payload: { value: updatedValue } });
  };
  const onChange = readOnly ? undefined : handleChange;

  return (
    <InputGroup>
      <LabelInput fieldType={fieldType} label={label} />

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
