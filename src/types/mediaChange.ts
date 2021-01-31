export type ID = string;
export type NodeChange = { id?: ID };

export type MediaChange = NodeChange & {
  titles?: TitlesChange;
  ageRating?: AgeRating;
  ageRatingGuide?: string;
  bannerImage?: ImageUpload;
  posterImage?: ImageUpload;
  slug?: string;
  startDate?: DateString;
};

type SetChange = {
  add?: [string];
  remove?: [string];
};

// TODO: these should be non-shitty types
type ImageUpload = string;
type DateString = string;

export type TitlesChange = {
  alternatives?: SetChange;
  canonical?: string;
  // localized?: HashChange;
};

// Actual object types
// can grab from graphql types
enum AgeRating {
  G,
  PG,
  R,
  R18,
}
