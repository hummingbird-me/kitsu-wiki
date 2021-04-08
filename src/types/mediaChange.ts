export type ID = string;
export type NodeChange = { id?: ID; type?: string };

type HashChange = {
  set?: { [key: string]: string };
  remove?: [string];
};

export type SetChange = {
  add?: string[];
  remove?: string[];
};

export type StringChange = {
  value: string;
};

export type TitlesChange = {
  alternatives?: SetChange;
  canonical?: string;
  localized?: HashChange;
};

export type MediaChange = NodeChange & {
  titles?: TitlesChange;
  description?: HashChange;
  ageRating?: AgeRating;
  ageRatingGuide?: string;
  bannerImage?: ImageUpload;
  posterImage?: ImageUpload;
  slug?: StringChange;
  startDate?: DateString;
};

// TODO: these should be non-shitty types
type ImageUpload = string;
type DateString = string;

// Actual object types
// can grab from graphql types
enum AgeRating {
  G,
  PG,
  R,
  R18,
}
