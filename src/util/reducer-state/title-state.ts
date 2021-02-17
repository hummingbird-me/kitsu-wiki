import { cloneDeep } from 'lodash';
import { TitlesChange } from 'src/types/mediaChange';
import { ReducerPayload } from 'src/types/reducer';
import { chosenAction } from './set-state';

interface RequiredKeys {
  titles?: TitlesChange;
}

export default function titleState<T extends RequiredKeys>(
  currentState: T,
  // fieldName: keyof TitlesChange,
  fieldName: string,
  payload: ReducerPayload,
  action = 'add'
): T {
  currentState = cloneDeep(currentState);
  currentState.titles ??= {};

  switch (fieldName) {
    case 'alternatives': {
      const updatedAlternatives = chosenAction(
        action,
        currentState.titles.alternatives,
        fieldName,
        payload
      );

      currentState.titles.alternatives = updatedAlternatives;
      break;
    }
    default:
      currentState.titles = {
        ...currentState.titles,
        [fieldName]: payload.value,
      };
      break;
  }

  return currentState;
}
