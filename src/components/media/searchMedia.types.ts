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
          | ({ __typename?: 'Anime' } & Media_Anime_Fragment)
          | ({ __typename?: 'Manga' } & Media_Manga_Fragment)
        >
      >
    >;
  };
};

export type Media_Anime_Fragment = { __typename?: 'Anime' } & Pick<
  Types.Anime,
  | 'id'
  | 'slug'
  | 'type'
  | 'description'
  | 'startDate'
  | 'tba'
  | 'favoritesCount'
> & {
    titles: { __typename?: 'TitlesList' } & Pick<Types.TitlesList, 'canonical'>;
    posterImage: { __typename?: 'Image' } & Pick<Types.Image, 'blurhash'> & {
        original: { __typename?: 'ImageView' } & Pick<Types.ImageView, 'url'>;
      };
  };

export type Media_Manga_Fragment = { __typename?: 'Manga' } & Pick<
  Types.Manga,
  | 'id'
  | 'slug'
  | 'type'
  | 'description'
  | 'startDate'
  | 'tba'
  | 'favoritesCount'
> & {
    titles: { __typename?: 'TitlesList' } & Pick<Types.TitlesList, 'canonical'>;
    posterImage: { __typename?: 'Image' } & Pick<Types.Image, 'blurhash'> & {
        original: { __typename?: 'ImageView' } & Pick<Types.ImageView, 'url'>;
      };
  };

export type MediaFragment = Media_Anime_Fragment | Media_Manga_Fragment;
