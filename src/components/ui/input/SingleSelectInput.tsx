import React, { ReactElement, useState } from 'react';
import Select from 'react-select';
import { SingleSelect } from './styles';
import LabelInput from './LabelInput';

interface InputFields<O> {
  fieldType: string;
  label?: string;
  cache?: string;
  initialValue?: string | null;
  options: O[];
  parentDispatch: React.Dispatch<any>;
}

export default function SingleSelectInput<O>({
  fieldType,
  label,
  cache,
  initialValue,
  options,
  parentDispatch,
}: InputFields<O>): ReactElement {
  const [value, setValue] = useState(cache || initialValue);

  const formattedOptions = options.map((option) => ({
    value: String(option),
    label: String(option),
  }));

  const formattedValue = {
    value: value,
    label: value,
  };

  return (
    <div>
      <LabelInput fieldType={fieldType} label={label} />
      <SingleSelect>
        <Select
          className='single-select-container'
          classNamePrefix='single-select'
          options={formattedOptions}
          value={formattedValue}
          isClearable={true}
          isSearchable={true}
          onChange={(event) => {
            const updatedValue = event?.value;

            setValue(updatedValue);
            parentDispatch({ type: fieldType, payload: { value: updatedValue } });
          }}
        />
      </SingleSelect>
    </div>
  );
}
