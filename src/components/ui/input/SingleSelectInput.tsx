import { startCase } from 'lodash';
import React, { ReactElement, useState } from 'react';

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
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedValue = event.target.value;

    setValue(updatedValue);
    parentDispatch({ type: fieldType, payload: updatedValue });
  };

  // Move this formatter to some type of method. Splitting fieldType seems to be common.
  const formattedLabel = label ?? startCase(fieldType.split('.').slice(-1)[0]);

  return (
    <div>
      <label htmlFor={fieldType}>{formattedLabel}</label>
      <select key={fieldType} value={value || undefined} onChange={handleChange}>
        {options.map((option) => (
          <option key={String(option)} value={String(option)}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
