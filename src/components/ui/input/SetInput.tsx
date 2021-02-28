import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useEffect, useState } from 'react';
import LabelInput from './LabelInput';
import { Input, InputGroup, AltTitles, RemoveButton, EditButton } from './styles';

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
  const [edit, showEdit] = useState(false);

  useEffect(() => {
    let updatedItems = items;

    if (items.slice(-1)[0] !== '') {
      updatedItems = [...items, ''];
    }

    setItems(updatedItems);
  }, [items, setItems]);

  const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const updatedValue = event.target.value;
    const updatedItems = [...items.slice(0, index), updatedValue, ...items.slice(index + 1)];

    setItems(updatedItems);
  };

  const handleDelete = (index: number) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const updatedValue = items.find((_, i) => i === index);
    const updatedItems = items.filter((_, i) => i !== index);

    setItems(updatedItems);

    if (updatedValue === '') return;

    parentDispatch({ type: fieldType, payload: { value: updatedValue }, action: 'remove' });
  };

  const handleEdit = (action: string) => (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();

    const updatedValue = event.target.value;

    if (updatedValue === '') return;

    if (event.currentTarget === event.target) {
      parentDispatch({ type: fieldType, payload: { value: updatedValue }, action: action });
    }
  };

  return (
    <InputGroup>
      <LabelInput fieldType={fieldType} label={label}>
        <EditButton onClick={() => showEdit(edit ? false : true)}>
          <FontAwesomeIcon icon={faPen} />
        </EditButton>
      </LabelInput>

      <AltTitles>
        {items.map((item, index) => {
          return (
            <div>
              <Input
                key={index}
                tabIndex={1}
                type='text'
                value={item}
                onChange={handleChange(index)}
                onFocus={handleEdit('remove')}
                onBlur={handleEdit('add')}
              />

              <RemoveButton
                key={`button-${index}`}
                onClick={handleDelete(index)}
                style={{ display: edit ? 'inline-block' : 'none' }}>
                <FontAwesomeIcon icon={faTrash} />
              </RemoveButton>
            </div>
          );
        })}
      </AltTitles>
    </InputGroup>
  );
}