import {
  FindMediaCharacterFieldsFragment,
  FindAnimeFieldsFragment,
  WikiSubmissionFieldsFragment,
} from './graphql';
import { ModelCacheType, ModelFragmentTypes } from './itemTypes';
import { MediaCharacterChange, MediaChange } from './mediaChange';
import { ReducerAction } from './reducer';

export interface ModelEditInterface {
  record: ModelFragmentTypes;
  cache: ModelCacheType;
  wikiSubmission: WikiSubmissionFieldsFragment;
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
