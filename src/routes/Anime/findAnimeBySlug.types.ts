import * as Types from '../../types/graphql';

export type FindAnimeBySlugQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
}>;

export type FindAnimeBySlugQuery = { __typename?: 'Query' } & {
  findAnimeBySlug?: Types.Maybe<
    { __typename?: 'Anime' } & FindAnimeFieldsFragment
  >;
};

export type FindAnimeFieldsFragment = { __typename?: 'Anime' } & Pick<
  Types.Anime,
  'id'
>;
