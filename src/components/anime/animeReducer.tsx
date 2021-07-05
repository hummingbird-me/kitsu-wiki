import { MediaChange } from 'src/types/mediaChange';
import { ReducerAction } from 'src/types/reducer';
import animeState from 'src/util/reducerState/animeState';
import localizedState from 'src/util/reducerState/localizedState';
import titleState from 'src/util/reducerState/titleState';

export default function animeReducer(state: MediaChange, action: ReducerAction): MediaChange {
  return animeState(state, action);
}
