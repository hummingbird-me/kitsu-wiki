import { startCase } from 'lodash';
import React, { ReactElement, useState } from 'react';
import DatePicker from 'react-date-picker';
import LabelInput from './LabelInput';

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
  // I'd like to figure out how to make this date a type.
  // I know it will always be a date object (or undefined).
  const handleChange = (date: any) => {
    const formattedDate = date?.toISOString()?.substring(0, 10) ?? '';

    setValue(date);
    parentDispatch({ type: fieldType, payload: { value: formattedDate } });
  };

  return (
    <div>
      <LabelInput fieldType={fieldType} label={label} />
      <DatePicker onChange={handleChange} value={value} />
    </div>
  );
}
