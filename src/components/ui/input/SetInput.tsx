import React, { ReactElement, useEffect, useState } from 'react';
import LabelInput from './LabelInput';
import { Input, InputGroup, AltTitles } from './styles';

interface SetInputFields {
  fieldType: string;
  label?: string;
  initialValue?: Array<string>;
  parentDispatch: React.Dispatch<any>;
}

export default function SetInput({
  fieldType,
  label,
  initialValue = [],
  parentDispatch,
}: SetInputFields): ReactElement {
  const [items, setItems] = useState(initialValue);
  useEffect(() => {
    let updatedItems = items;

    if (items.slice(-1)[0] !== '') {
      updatedItems = [...items, ''];
    }

    setItems(updatedItems);
  }, [items]);

  const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;
    let updatedItems: string[];
    let action: string;

    if (updatedValue === '') {
      updatedItems = items.filter((_, i) => i !== index);
      action = 'remove';
    } else {
      updatedItems = [...items.slice(0, index), updatedValue, ...items.slice(index + 1)];
      action = 'add';
    }

    if (items.slice(-1)[0] !== '') {
      updatedItems = [...updatedItems, ''];
    }

    setItems(updatedItems);
    parentDispatch({ type: fieldType, payload: updatedValue, action: action });
  };

  return (
    <InputGroup>
      <LabelInput fieldType={fieldType} label={label} />

      <AltTitles>
        {items.map((item, index) => {
          return (
            <Input key={index} type='text' value={item} onChange={handleChange(index)}></Input>
          );
        })}
      </AltTitles>
    </InputGroup>
  );
}
