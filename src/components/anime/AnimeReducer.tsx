import { LocalizedState } from 'src/logic/reducer_state/localizedState';
import { TitleState } from 'src/logic/reducer_state/titleState';
import { MediaChange } from 'src/types/mediaChange';
import { ReducerAction } from 'src/types/reducer';

export default function AnimeReducer(state: MediaChange, action: ReducerAction): MediaChange {
  const splitActions = action.type.split('.');

  switch (splitActions[0]) {
    case 'titles': {
      const fieldName = splitActions.slice(-1)[0];
      const titleState = new TitleState<MediaChange>(
        state,
        fieldName,
        action.payload,
        action.action
      );

      return titleState.update();
    }
    case 'description': {
      const [fieldName, language] = splitActions;
      const descriptionState = new LocalizedState<MediaChange>(
        state,
        fieldName,
        language,
        action.payload
      );
      return descriptionState.update();
    }
    default:
      return {
        ...state,
        [action.type]: action.payload,
      };
  }
}
