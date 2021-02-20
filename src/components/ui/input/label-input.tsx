import { startCase } from 'lodash';
import { ReactElement } from 'react';

interface LabelInputFields {
  fieldType: string;
  label?: string;
}

export default function LabelInput({ fieldType, label }: LabelInputFields): ReactElement {
  const formattedLabel = label ?? startCase(fieldType.split('.').slice(-1)[0]);

  return <label htmlFor={fieldType}>{formattedLabel}</label>;
}
