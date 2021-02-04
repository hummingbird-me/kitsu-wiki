import { startCase } from 'lodash';
import React, { ReactElement, useState } from 'react';
import Select from 'react-select';

interface InputFields<O> {
  fieldType: string;
  label?: string;
  initialValue?: string | null;
  options: O[];
  parentDispatch: React.Dispatch<any>;
}

export default function SingleSelectInput<O>({
  fieldType,
  label,
  initialValue,
  options,
  parentDispatch,
}: InputFields<O>): ReactElement {
  const [value, setValue] = useState(initialValue);

  // Move this formatter to some type of method. Splitting fieldType seems to be common.
  const formattedLabel = label ?? startCase(fieldType.split('.').slice(-1)[0]);
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
      <label htmlFor={fieldType}>{formattedLabel}</label>
      <Select
        options={formattedOptions}
        value={formattedValue}
        isClearable={true}
        isSearchable={true}
        onChange={(event) => {
          const updatedValue = event?.value;

          setValue(updatedValue);
          parentDispatch({ type: fieldType, payload: updatedValue });
        }}
      />
    </div>
  );
}
