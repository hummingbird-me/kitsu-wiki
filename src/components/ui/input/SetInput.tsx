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
    let updatedItems = [...items.slice(0, index), updatedValue, ...items.slice(index + 1)];

    if (items.slice(-1)[0] !== '') {
      updatedItems = [...updatedItems, ''];
    }

    setItems(updatedItems);
  };

  const handleDelete = (index: number) => (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const updatedValue = items.find((_, i) => i === index);
    const updatedItems = items.filter((_, i) => i !== index);

    setItems(updatedItems);

    parentDispatch({
      type: fieldType,
      payload: { value: updatedValue },
      action: 'remove',
    });
  };

  const handleEdit = () => (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.currentTarget === event.target) {
      console.log('unfocused self');
    }
  };

  return (
    <InputGroup>
      <LabelInput fieldType={fieldType} label={label} />

      <AltTitles>
        {items.map((item, index) => {
          return (
            <div>
              <Input
                key={index}
                type='text'
                value={item}
                onChange={handleChange(index)}
                onBlur={handleEdit}
              />

              <button onClick={handleDelete(index)}>X</button>
            </div>
          );
        })}
      </AltTitles>
    </InputGroup>
  );
}
