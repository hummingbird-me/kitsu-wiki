import * as Types from '../../types/graphql';

export type SearchMediaByTitleQueryVariables = Types.Exact<{
  first: Types.Scalars['Int'];
  title: Types.Scalars['String'];
  media_type?: Types.Maybe<Types.MediaTypeEnum>;
}>;

export type SearchMediaByTitleQuery = { __typename?: 'Query' } & {
  searchMediaByTitle: { __typename?: 'MediaConnection' } & {
    nodes?: Types.Maybe<
      Array<
        Types.Maybe<
          | ({ __typename?: 'Anime' } & SearchMediaFields_Anime_Fragment)
          | ({ __typename?: 'Manga' } & SearchMediaFields_Manga_Fragment)
        >
      >
    >;
  };
};

export type SearchMediaFields_Anime_Fragment = { __typename?: 'Anime' } & Pick<
  Types.Anime,
  'id' | 'type'
> & {
    titles: { __typename?: 'TitlesList' } & Pick<Types.TitlesList, 'canonical'>;
  };

export type SearchMediaFields_Manga_Fragment = { __typename?: 'Manga' } & Pick<
  Types.Manga,
  'id' | 'type'
> & {
    titles: { __typename?: 'TitlesList' } & Pick<Types.TitlesList, 'canonical'>;
  };

export type SearchMediaFieldsFragment =
  | SearchMediaFields_Anime_Fragment
  | SearchMediaFields_Manga_Fragment;
