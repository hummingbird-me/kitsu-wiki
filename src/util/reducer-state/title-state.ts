import { cloneDeep } from 'lodash';
import { TitlesChange } from 'src/types/mediaChange';
import { ReducerPayload } from 'src/types/reducer';
// import { setAction } from './set-state';

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
  const titles = currentState.titles || {};

  switch (fieldName) {
    case 'alternatives': {
      break;
    }
    default:
      currentState.titles = {
        ...titles,
        [fieldName]: payload.value,
      };
      break;
  }

  return currentState;
}
