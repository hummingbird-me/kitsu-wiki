import { startCase } from 'lodash';
import React, { ReactElement, useState } from 'react';
import DatePicker from 'react-date-picker';

interface DateInputFields {
  fieldType: string;
  label?: string;
  initialValue?: string;
  parentDispatch: React.Dispatch<any>;
}

export default function DateInput({
  fieldType,
  label,
  initialValue = '',
  parentDispatch,
}: DateInputFields): ReactElement {
  const [value, setValue] = useState(new Date(initialValue));
  const formattedLabel = label ?? startCase(fieldType.split('.').slice(-1)[0]);
  // I'd like to figure out how to make this date a type.
  // I know it will always be a date object (or undefined).
  const handleChange = (date: any) => {
    const formattedDate = date?.toISOString()?.substring(0, 10) ?? '';

    setValue(date);
    parentDispatch({ type: fieldType, payload: formattedDate });
  };

  return (
    <div>
      <label htmlFor={fieldType}>{formattedLabel}</label>
      <DatePicker onChange={handleChange} value={value} />
    </div>
  );
}
