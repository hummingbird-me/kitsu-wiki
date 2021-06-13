import { FindMediaCharacterFieldsFragment, ReleaseStatusEnum } from './graphql';

export type ID = string;
export type NodeChange = { id?: ID };

export type HashChange = {
  set?: { [key: string]: string };
  remove?: [string];
};

export type SetChange = {
  add?: string[];
  remove?: string[];
};

export type TitlesChange = {
  alternatives?: SetChange;
  canonical?: string;
  localized?: HashChange;
};

export type MediaChange = NodeChange & {
  type: string;
  titles?: TitlesChange;
  description?: HashChange;
  ageRating?: AgeRating;
  ageRatingGuide?: string;
  bannerImage?: ImageUpload;
  posterImage?: ImageUpload;
  slug?: string;
  startDate?: DateString;
  endDate?: DateString;
  nextRelease?: DateTimeString;
  tba?: string;
  status: ReleaseStatusEnum;
};

// TODO: these should be non-shitty types
type ImageUpload = string;
type DateString = string;
type DateTimeString = string;

// Actual object types
// can grab from graphql types
enum AgeRating {
  G,
  PG,
  R,
  R18,
}

export type ModelFragmentTypes = FindMediaCharacterFieldsFragment;
export type ModelEditInterface = {
  record: ModelFragmentTypes;
  cache: MediaChange;
  dispatch: React.Dispatch<any>;
};
