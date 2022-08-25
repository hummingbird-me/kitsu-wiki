import { FindAnimeFieldsFragment, FindMediaCharacterFieldsFragment } from './graphql';
import { MediaChange, MediaCharacterChange } from './mediaChange';
import { ReducerAction } from './reducer';

export type ModelFragmentTypes = FindAnimeFieldsFragment | FindMediaCharacterFieldsFragment;
export type ModelCacheType = MediaChange | MediaCharacterChange;

export type ModelItemUnion = MediaCharacterItemInterface | AnimeItemInterface;

export interface ModelItemInterface {
  record: ModelFragmentTypes;
  cache: ModelCacheType;
  parentDispatch: React.Dispatch<ReducerAction>;
}

export interface MediaCharacterItemInterface extends ModelItemInterface {
  record: FindMediaCharacterFieldsFragment;
  cache: MediaCharacterChange;
}

export interface AnimeItemInterface extends ModelItemInterface {
  record: FindAnimeFieldsFragment;
  cache: MediaChange;
}
