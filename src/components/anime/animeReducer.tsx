import { MediaChange } from 'src/types/mediaChange';
import { ReducerAction } from 'src/types/reducer';
import localizedState from 'src/util/reducerState/localizedState';
import titleState from 'src/util/reducerState/titleState';

export default function animeReducer(state: MediaChange, action: ReducerAction): MediaChange {
  const splitActions = action.type.split('.');

  switch (splitActions[0]) {
    case 'titles': {
      const fieldName = splitActions.slice(-1)[0];
      return titleState<MediaChange>(state, fieldName, action.payload, action.action);
    }
    case 'description': {
      const [fieldName, language] = splitActions;

      return localizedState<MediaChange>(state, fieldName, language, action.payload);
    }
    default:
      return {
        ...state,
        [action.type]: action.payload,
      };
  }
}
