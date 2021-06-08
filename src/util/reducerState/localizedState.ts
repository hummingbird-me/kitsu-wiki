import { cloneDeep, merge } from 'lodash';
import { ReducerPayload } from 'src/types/reducer';

export default function localizedState<T>(
  currentState: T,
  fieldName: string,
  language: string,
  newValue: ReducerPayload
): T {
  currentState = cloneDeep(currentState);
  const formattedKey = fieldName as keyof T;

  currentState[formattedKey] = merge(currentState[formattedKey], {
    set: { [language]: newValue.value },
  });

  return currentState;
}
