import { cloneDeep, merge } from 'lodash';

export default function localizedState<T>(
  currentState: T,
  fieldName: string,
  language: string,
  newValue: any
): T {
  currentState = cloneDeep(currentState);
  const formattedKey = fieldName as keyof T;

  // how to use fieldName instead of hardcoded description.
  currentState[formattedKey] = merge(currentState[formattedKey], {
    set: { [language]: newValue },
  });

  return currentState;
}
