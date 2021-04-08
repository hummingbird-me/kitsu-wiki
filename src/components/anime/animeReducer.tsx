import { MediaChange } from 'src/types/mediaChange';
import { ReducerAction } from 'src/types/reducer';
import { updateLocalStorageRecord } from 'src/util/localStorage';
import localizedState from 'src/util/reducerState/localizedState';
import titleState from 'src/util/reducerState/titleState';

export default function animeReducer(state: MediaChange, action: ReducerAction): MediaChange {
  const splitActions = action.type.split('.');
  let updatedState: MediaChange = {};

  switch (splitActions[0]) {
    case 'titles': {
      const fieldName = splitActions.slice(-1)[0];

      updatedState = titleState<MediaChange>(state, fieldName, action.payload, action.action);
      break;
    }
    case 'description': {
      const [fieldName, language] = splitActions;

      updatedState = localizedState<MediaChange>(state, fieldName, language, action.payload);
      break;
    }
    default:
      updatedState = {
        ...state,
        [action.type]: action.payload,
      };
  }

  updateLocalStorageRecord<MediaChange>(`anime-${state.id}`, updatedState);

  return updatedState;
}
