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
          | ({ __typename?: 'Anime' } & Pick<
              Types.Anime,
              'id' | 'type' | 'description' | 'startDate' | 'tba'
            > & {
                titles: { __typename?: 'TitlesList' } & Pick<
                  Types.TitlesList,
                  'canonical'
                >;
                posterImage: { __typename?: 'Image' } & {
                  original: { __typename?: 'ImageView' } & Pick<
                    Types.ImageView,
                    'url'
                  >;
                };
              })
          | ({ __typename?: 'Manga' } & Pick<
              Types.Manga,
              'id' | 'type' | 'description' | 'startDate' | 'tba'
            > & {
                titles: { __typename?: 'TitlesList' } & Pick<
                  Types.TitlesList,
                  'canonical'
                >;
                posterImage: { __typename?: 'Image' } & {
                  original: { __typename?: 'ImageView' } & Pick<
                    Types.ImageView,
                    'url'
                  >;
                };
              })
        >
      >
    >;
  };
};
