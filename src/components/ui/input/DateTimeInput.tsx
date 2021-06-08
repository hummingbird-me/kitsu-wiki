import React, { ReactElement, useState } from 'react';
// @ts-expect-error - We need to create a declaration file for this.
import DateTimePicker from 'react-datetime-picker';
import LabelInput from './LabelInput';

interface DateInputFields {
  fieldType: string;
  label?: string;
  cache?: string;
  initialValue?: string;
  parentDispatch: React.Dispatch<any>;
}

export default function DateInput({
  fieldType,
  label,
  cache,
  initialValue = '',
  parentDispatch,
}: DateInputFields): ReactElement {
  const [value, setValue] = useState(new Date(cache || initialValue));
  // I'd like to figure out how to make this dateTime a type.
  // I know it will always be a dateTime object (or undefined).
  const handleChange = (dateTime: any) => {
    const formattedDate = dateTime?.toISOString() ?? '';

    setValue(dateTime);
    parentDispatch({ type: fieldType, payload: { value: formattedDate } });
  };

  return (
    <div>
      <LabelInput fieldType={fieldType} label={label} />
      <DateTimePicker onChange={handleChange} value={value} />
    </div>
  );
}
