import * as Types from '../../types/graphql';

export type FindAnimeByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type FindAnimeByIdQuery = { __typename?: 'Query' } & {
  findAnimeById?: Types.Maybe<
    { __typename?: 'Anime' } & FindAnimeFieldsFragment
  >;
};

export type FindAnimeFieldsFragment = { __typename?: 'Anime' } & Pick<
  Types.Anime,
  'id'
>;
