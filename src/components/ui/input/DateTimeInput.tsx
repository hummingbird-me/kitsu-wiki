import { startCase } from 'lodash';
import React, { ReactElement, useState } from 'react';
// @ts-expect-error - We need to create a declaration file for this.
import DateTimePicker from 'react-datetime-picker';

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
  // I'd like to figure out how to make this dateTime a type.
  // I know it will always be a dateTime object (or undefined).
  const handleChange = (dateTime: any) => {
    const formattedDate = dateTime?.toISOString() ?? '';

    setValue(dateTime);
    parentDispatch({ type: fieldType, payload: formattedDate });
  };

  return (
    <div>
      <label htmlFor={fieldType}>{formattedLabel}</label>
      <DateTimePicker onChange={handleChange} value={value} />
    </div>
  );
}
