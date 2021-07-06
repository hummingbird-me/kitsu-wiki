import { FindAnimeFieldsFragment, FindMediaCharacterFieldsFragment } from './graphql';
import { MediaChange, MediaCharacterChange } from './mediaChange';
import { ReducerAction } from './reducer';

export type ModelFragmentTypes = FindAnimeFieldsFragment | FindMediaCharacterFieldsFragment;
export type ModelCacheType = MediaChange | MediaCharacterChange;

// export type ModelEditUnion = MediaCharacterChangeEditInterface;
// NOTE: how to make this work?
export type ModelEditUnion = MediaCharacterChangeEditInterface | AnimeChangeEditInterface;

export interface ModelEditInterface {
  record: ModelFragmentTypes;
  cache: ModelCacheType;
  dispatch: React.Dispatch<ReducerAction>;
}

export interface MediaCharacterChangeEditInterface extends ModelEditInterface {
  record: FindMediaCharacterFieldsFragment;
  cache: MediaCharacterChange;
}

export interface AnimeChangeEditInterface extends ModelEditInterface {
  record: FindAnimeFieldsFragment;
  cache: MediaChange;
}
