import React, { ReactElement, useState } from 'react';
import { HashChange } from 'src/types/mediaChange';
import LabelInput from './LabelInput';
import { TextArea, InputGroup } from './styles';

interface TextAreaInputFields {
  fieldType: string;
  label?: string;
  cache?: HashChange;
  initialValue?: string;
  parentDispatch: React.Dispatch<any>;
}

export default function TextAreaInput({
  fieldType,
  label,
  cache,
  initialValue = '',
  parentDispatch,
}: TextAreaInputFields): ReactElement {
  const [value, setValue] = useState(InitialValue(cache, initialValue));
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedValue = event.target.value;

    setValue(updatedValue);
    parentDispatch({ type: fieldType, payload: { value: updatedValue } });
  };

  return (
    <InputGroup>
      <LabelInput fieldType={fieldType} label={label} />
      <TextArea key={fieldType} value={value} onChange={handleChange} rows={10} cols={50} />
    </InputGroup>
  );
}

function InitialValue(cache: HashChange | undefined, value: string): string {
  if (cache == null) return value;

  if (cache.remove) {
    value = '';
  }

  if (cache.set) {
    value = cache.set.en;
  }

  return value;
}
