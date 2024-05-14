import { cloneDeep, merge } from 'lodash';
import { Reducer } from 'react';
import { MediaChange } from 'src/types/mediaChange';
import { ReducerAction, ReducerPayload } from 'src/types/reducer';
import localizedState from './localizedState';
import titleState from './titleState';

export default function animeState(currentState: MediaChange, action: ReducerAction): MediaChange {
  currentState = cloneDeep(currentState);
  const splitActions = action.type.split('.');

  // const arrayField = null;
  // const arrayIndex = null;

  // if (splitActions.length === 4) {
  //   const [arrayField, arrayIndex, fieldName, language] = splitActions;
  // } else {
  //   const [fieldName, language] = splitActions;
  // }

  let data;

  switch (splitActions[0]) {
    case 'titles': {
      const fieldName = splitActions.slice(-1)[0];
      data = titleState<MediaChange>(currentState, fieldName, action.payload, action.action);

      break;
    }
    case 'description': {
      const [fieldName, language] = splitActions;
      data = localizedState<MediaChange>(currentState, fieldName, language, action.payload);

      break;
    }
    default:
      data = {
        ...currentState,
        [action.type]: action.payload.value,
      };
      break;
  }

  return data;
  // if (arrayField !== null) {
  // }
}
