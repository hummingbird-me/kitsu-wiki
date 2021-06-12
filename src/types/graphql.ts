import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date, expressed as an ISO8601 string */
  Date: any;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
  /** Represents untyped JSON */
  JSON: any;
  /** A loose key-value map in GraphQL */
  Map: Record<string, any>;
  Upload: any;
};

/** A user account on Kitsu */
export type Account = WithTimestamps & {
  readonly __typename?: 'Account';
  /** The country this user resides in */
  readonly country?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** The email addresses associated with this account */
  readonly email: ReadonlyArray<Scalars['String']>;
  /** Facebook account linked to the account */
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** Primary language for the account */
  readonly language?: Maybe<Scalars['String']>;
  /** Longest period an account has had a PRO subscription for in seconds */
  readonly maxProStreak?: Maybe<Scalars['Int']>;
  /** The PRO subscription for this account */
  readonly proSubscription?: Maybe<ProSubscription>;
  /** The profile for this account */
  readonly profile: Profile;
  /** Media rating system used for the account */
  readonly ratingSystem: RatingSystemEnum;
  /** Whether Not Safe For Work content is accessible */
  readonly sfwFilter?: Maybe<Scalars['Boolean']>;
  /** The site-wide permissions this user has access to */
  readonly sitePermissions: ReadonlyArray<SitePermissionEnum>;
  /** Time zone of the account */
  readonly timeZone?: Maybe<Scalars['String']>;
  /** Preferred language for media titles */
  readonly titleLanguagePreference?: Maybe<TitleLanguagePreferenceEnum>;
  /** Twitter account linked to the account */
  readonly twitterId?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};

export enum AgeRatingEnum {
  /** Acceptable for all ages */
  G = 'G',
  /** Parental guidance suggested; should be safe for preteens and older */
  Pg = 'PG',
  /** Possible lewd or intense themes; should be safe for teens and older */
  R = 'R',
  /** Contains adult content or themes; should only be viewed by adults */
  R18 = 'R18'
}

/** Generic Amount Consumed based on Media */
export type AmountConsumed = {
  /** Total media completed atleast once. */
  readonly completed: Scalars['Int'];
  readonly id: Scalars['ID'];
  /** Total amount of media. */
  readonly media: Scalars['Int'];
  /** The profile related to the user for this stat. */
  readonly profile: Profile;
  /** Last time we fully recalculated this stat. */
  readonly recalculatedAt: Scalars['ISO8601Date'];
  /** Total progress of library including reconsuming. */
  readonly units: Scalars['Int'];
};

export type Anime = Media & Episodic & WithTimestamps & {
  readonly __typename?: 'Anime';
  /** The recommended minimum age group for this media */
  readonly ageRating?: Maybe<AgeRatingEnum>;
  /** An explanation of why this received the age rating it did */
  readonly ageRatingGuide?: Maybe<Scalars['String']>;
  /** The average rating of this media amongst all Kitsu users */
  readonly averageRating?: Maybe<Scalars['Float']>;
  /** A large banner image for this media */
  readonly bannerImage: Image;
  /** A list of categories for this media */
  readonly categories: CategoryConnection;
  /** The characters who starred in this media */
  readonly characters: MediaCharacterConnection;
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** A brief (mostly spoiler free) summary or description of the media. */
  readonly description: Scalars['Map'];
  /** the day that this media made its final release */
  readonly endDate?: Maybe<Scalars['Date']>;
  /** The number of episodes in this series */
  readonly episodeCount?: Maybe<Scalars['Int']>;
  /** The general length (in seconds) of each episode */
  readonly episodeLength?: Maybe<Scalars['Int']>;
  /** Episodes for this media */
  readonly episodes: EpisodeConnection;
  /** The number of users with this in their favorites */
  readonly favoritesCount?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** A list of mappings for this media */
  readonly mappings: MappingConnection;
  /** A list of your wiki submissions for this media */
  readonly myWikiSubmissions: WikiSubmissionConnection;
  /** The time of the next release of this media */
  readonly nextRelease?: Maybe<Scalars['ISO8601DateTime']>;
  /** The country in which the media was primarily produced */
  readonly originalLocale?: Maybe<Scalars['String']>;
  /** The poster image of this media */
  readonly posterImage: Image;
  /** The companies which helped to produce this media */
  readonly productions: MediaProductionConnection;
  /** A list of quotes from this media */
  readonly quotes: QuoteConnection;
  /** A list of reactions for this media */
  readonly reactions: MediaReactionConnection;
  /** The season this was released in */
  readonly season?: Maybe<ReleaseSeasonEnum>;
  /** Whether the media is Safe-for-Work */
  readonly sfw: Scalars['Boolean'];
  /** The URL-friendly identifier of this media */
  readonly slug: Scalars['String'];
  /** The staff members who worked on this media */
  readonly staff: MediaStaffConnection;
  /** The day that this media first released */
  readonly startDate?: Maybe<Scalars['Date']>;
  /** The current releasing status of this media */
  readonly status: ReleaseStatusEnum;
  /** The stream links. */
  readonly streamingLinks: StreamingLinkConnection;
  /** A secondary type for categorizing Anime. */
  readonly subtype: AnimeSubtypeEnum;
  /** Description of when this media is expected to release */
  readonly tba?: Maybe<Scalars['String']>;
  /** The titles for this media in various locales */
  readonly titles: TitlesList;
  /** The total length (in seconds) of the entire series */
  readonly totalLength?: Maybe<Scalars['Int']>;
  /** Anime or Manga. */
  readonly type: Scalars['String'];
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** The number of users with this in their library */
  readonly userCount?: Maybe<Scalars['Int']>;
  /** Video id for a trailer on YouTube */
  readonly youtubeTrailerVideoId?: Maybe<Scalars['String']>;
};


export type AnimeCategoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type AnimeCharactersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type AnimeDescriptionArgs = {
  locales?: Maybe<ReadonlyArray<Scalars['String']>>;
};


export type AnimeEpisodesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  number?: Maybe<ReadonlyArray<Scalars['Int']>>;
};


export type AnimeMappingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type AnimeMyWikiSubmissionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<WikiSubmissionSortOption>>>;
};


export type AnimeProductionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type AnimeQuotesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type AnimeReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type AnimeStaffArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type AnimeStreamingLinksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type AnimeAmountConsumed = AmountConsumed & {
  readonly __typename?: 'AnimeAmountConsumed';
  /** Total media completed atleast once. */
  readonly completed: Scalars['Int'];
  readonly id: Scalars['ID'];
  /** Total amount of media. */
  readonly media: Scalars['Int'];
  /** The profile related to the user for this stat. */
  readonly profile: Profile;
  /** Last time we fully recalculated this stat. */
  readonly recalculatedAt: Scalars['ISO8601Date'];
  /** Total time spent in minutes. */
  readonly time: Scalars['Int'];
  /** Total progress of library including reconsuming. */
  readonly units: Scalars['Int'];
};

export type AnimeCategoryBreakdown = CategoryBreakdown & {
  readonly __typename?: 'AnimeCategoryBreakdown';
  /** A Map of category_id -> count for all categories present on the library entries */
  readonly categories: Scalars['Map'];
  readonly id: Scalars['ID'];
  /** The profile related to the user for this stat. */
  readonly profile: Profile;
  /** Last time we fully recalculated this stat. */
  readonly recalculatedAt: Scalars['ISO8601Date'];
  /** The total amount of library entries. */
  readonly total: Scalars['Int'];
};

/** The connection type for Anime. */
export type AnimeConnection = {
  readonly __typename?: 'AnimeConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<AnimeEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Anime>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

export type AnimeCreateInput = {
  readonly titles: TitlesListInput;
  readonly description: Scalars['Map'];
  readonly ageRating?: Maybe<AgeRatingEnum>;
  readonly ageRatingGuide?: Maybe<Scalars['String']>;
  readonly tba?: Maybe<Scalars['String']>;
  readonly startDate?: Maybe<Scalars['Date']>;
  readonly endDate?: Maybe<Scalars['Date']>;
  readonly posterImage?: Maybe<Scalars['Upload']>;
  readonly bannerImage?: Maybe<Scalars['Upload']>;
  readonly youtubeTrailerVideoId?: Maybe<Scalars['String']>;
  readonly episodeCount?: Maybe<Scalars['Int']>;
  readonly episodeLength?: Maybe<Scalars['Int']>;
};

/** Autogenerated return type of AnimeCreate */
export type AnimeCreatePayload = {
  readonly __typename?: 'AnimeCreatePayload';
  readonly anime?: Maybe<Anime>;
  readonly errors?: Maybe<ReadonlyArray<Error>>;
};

/** Autogenerated return type of AnimeDelete */
export type AnimeDeletePayload = {
  readonly __typename?: 'AnimeDeletePayload';
  readonly anime?: Maybe<GenericDelete>;
  readonly errors?: Maybe<ReadonlyArray<Error>>;
};

/** An edge in a connection. */
export type AnimeEdge = {
  readonly __typename?: 'AnimeEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Anime>;
};

export type AnimeMutations = {
  readonly __typename?: 'AnimeMutations';
  /** Create an Anime. */
  readonly create?: Maybe<AnimeCreatePayload>;
  /** Delete an Anime. */
  readonly delete?: Maybe<AnimeDeletePayload>;
  /** Update an Anime. */
  readonly update?: Maybe<AnimeUpdatePayload>;
};


export type AnimeMutationsCreateArgs = {
  input: AnimeCreateInput;
};


export type AnimeMutationsDeleteArgs = {
  input: GenericDeleteInput;
};


export type AnimeMutationsUpdateArgs = {
  input: AnimeUpdateInput;
};

export enum AnimeSubtypeEnum {
  Tv = 'TV',
  /** Spinoffs or Extras of the original. */
  Special = 'SPECIAL',
  /** Original Video Animation. Anime directly released to video market. */
  Ova = 'OVA',
  /** Original Net Animation (Web Anime). */
  Ona = 'ONA',
  Movie = 'MOVIE',
  Music = 'MUSIC'
}

export type AnimeUpdateInput = {
  readonly id: Scalars['ID'];
  readonly titles?: Maybe<TitlesListInput>;
  readonly description?: Maybe<Scalars['Map']>;
  readonly ageRating?: Maybe<AgeRatingEnum>;
  readonly ageRatingGuide?: Maybe<Scalars['String']>;
  readonly tba?: Maybe<Scalars['String']>;
  readonly startDate?: Maybe<Scalars['Date']>;
  readonly endDate?: Maybe<Scalars['Date']>;
  readonly posterImage?: Maybe<Scalars['Upload']>;
  readonly bannerImage?: Maybe<Scalars['Upload']>;
  readonly youtubeTrailerVideoId?: Maybe<Scalars['String']>;
  readonly episodeCount?: Maybe<Scalars['Int']>;
  readonly episodeLength?: Maybe<Scalars['Int']>;
};

/** Autogenerated return type of AnimeUpdate */
export type AnimeUpdatePayload = {
  readonly __typename?: 'AnimeUpdatePayload';
  readonly anime?: Maybe<Anime>;
  readonly errors?: Maybe<ReadonlyArray<Error>>;
};

/** Information about a specific Category */
export type Category = WithTimestamps & {
  readonly __typename?: 'Category';
  /** The child categories. */
  readonly children?: Maybe<CategoryConnection>;
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** A brief summary or description of the catgory. */
  readonly description: Scalars['Map'];
  readonly id: Scalars['ID'];
  /** Whether the category is Not-Safe-for-Work. */
  readonly isNsfw: Scalars['Boolean'];
  /** The parent category. Each category can have one parent. */
  readonly parent?: Maybe<Category>;
  /** The URL-friendly identifier of this Category. */
  readonly slug: Scalars['String'];
  /** The name of the category. */
  readonly title: Scalars['Map'];
  readonly updatedAt: Scalars['ISO8601DateTime'];
};


/** Information about a specific Category */
export type CategoryChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Information about a specific Category */
export type CategoryDescriptionArgs = {
  locales?: Maybe<ReadonlyArray<Scalars['String']>>;
};


/** Information about a specific Category */
export type CategoryTitleArgs = {
  locales?: Maybe<ReadonlyArray<Scalars['String']>>;
};

/** Generic Category Breakdown based on Media */
export type CategoryBreakdown = {
  /** A Map of category_id -> count for all categories present on the library entries */
  readonly categories: Scalars['Map'];
  readonly id: Scalars['ID'];
  /** The profile related to the user for this stat. */
  readonly profile: Profile;
  /** Last time we fully recalculated this stat. */
  readonly recalculatedAt: Scalars['ISO8601Date'];
  /** The total amount of library entries. */
  readonly total: Scalars['Int'];
};

/** The connection type for Category. */
export type CategoryConnection = {
  readonly __typename?: 'CategoryConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<CategoryEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Category>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type CategoryEdge = {
  readonly __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Category>;
};

/** A single chapter of a manga */
export type Chapter = Unit & WithTimestamps & {
  readonly __typename?: 'Chapter';
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** A brief summary or description of the unit */
  readonly description: Scalars['Map'];
  readonly id: Scalars['ID'];
  /** The manga this chapter is in. */
  readonly manga: Manga;
  /** The sequence number of this unit */
  readonly number: Scalars['Int'];
  /** When this chapter was released */
  readonly releasedAt?: Maybe<Scalars['ISO8601Date']>;
  /** A thumbnail image for the unit */
  readonly thumbnail?: Maybe<Image>;
  /** The titles for this unit in various locales */
  readonly titles: TitlesList;
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** The volume this chapter is in. */
  readonly volume?: Maybe<Volume>;
};


/** A single chapter of a manga */
export type ChapterDescriptionArgs = {
  locales?: Maybe<ReadonlyArray<Scalars['String']>>;
};

/** The connection type for Chapter. */
export type ChapterConnection = {
  readonly __typename?: 'ChapterConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<ChapterEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Chapter>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type ChapterEdge = {
  readonly __typename?: 'ChapterEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Chapter>;
};

/** Information about a Character in the Kitsu database */
export type Character = WithTimestamps & {
  readonly __typename?: 'Character';
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** A brief summary or description of the character. */
  readonly description: Scalars['Map'];
  readonly id: Scalars['ID'];
  /** An image of the character */
  readonly image?: Maybe<Image>;
  /** Media this character appears in. */
  readonly media?: Maybe<MediaCharacterConnection>;
  /** The name for this character in various locales */
  readonly names?: Maybe<TitlesList>;
  /** The original media this character showed up in */
  readonly primaryMedia?: Maybe<Media>;
  /** The URL-friendly identifier of this character */
  readonly slug: Scalars['String'];
  readonly updatedAt: Scalars['ISO8601DateTime'];
};


/** Information about a Character in the Kitsu database */
export type CharacterDescriptionArgs = {
  locales?: Maybe<ReadonlyArray<Scalars['String']>>;
};


/** Information about a Character in the Kitsu database */
export type CharacterMediaArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export enum CharacterRoleEnum {
  /** A character who appears throughout a series and is a focal point of the media */
  Main = 'MAIN',
  /** A character who appears in multiple episodes but is not a main character */
  Recurring = 'RECURRING',
  /** A background character who generally only appears in a few episodes */
  Background = 'BACKGROUND',
  /** A character from a different franchise making a (usually brief) appearance */
  Cameo = 'CAMEO'
}

/** Information about a VA (Person) voicing a Character in a Media */
export type CharacterVoice = WithTimestamps & {
  readonly __typename?: 'CharacterVoice';
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** The company who hired this voice actor to play this role */
  readonly licensor?: Maybe<Producer>;
  /** The BCP47 locale tag for the voice acting role */
  readonly locale: Scalars['String'];
  /** The MediaCharacter node */
  readonly mediaCharacter: MediaCharacter;
  /** The person who voice acted this role */
  readonly person: Person;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for CharacterVoice. */
export type CharacterVoiceConnection = {
  readonly __typename?: 'CharacterVoiceConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<CharacterVoiceEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<CharacterVoice>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type CharacterVoiceEdge = {
  readonly __typename?: 'CharacterVoiceEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<CharacterVoice>;
};

/** A comment on a post */
export type Comment = WithTimestamps & {
  readonly __typename?: 'Comment';
  /** The user who created this comment for the parent post. */
  readonly author: Profile;
  /** Unmodified content. */
  readonly content: Scalars['String'];
  /** Html formatted content. */
  readonly contentFormatted: Scalars['String'];
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** Users who liked this comment */
  readonly likes: ProfileConnection;
  /** The parent comment if this comment was a reply to another. */
  readonly parent?: Maybe<Comment>;
  /** The post that this comment is attached to. */
  readonly post: Post;
  /** Replies to this comment */
  readonly replies: CommentConnection;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};


/** A comment on a post */
export type CommentLikesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<CommentLikeSortOption>>>;
};


/** A comment on a post */
export type CommentRepliesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<CommentSortOption>>>;
};

/** The connection type for Comment. */
export type CommentConnection = {
  readonly __typename?: 'CommentConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<CommentEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Comment>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type CommentEdge = {
  readonly __typename?: 'CommentEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Comment>;
};

export enum CommentLikeSortEnum {
  Following = 'FOLLOWING',
  CreatedAt = 'CREATED_AT'
}

export type CommentLikeSortOption = {
  readonly on: CommentLikeSortEnum;
  readonly direction: SortDirection;
};

export enum CommentSortEnum {
  Following = 'FOLLOWING',
  CreatedAt = 'CREATED_AT',
  LikesCount = 'LIKES_COUNT'
}

export type CommentSortOption = {
  readonly on: CommentSortEnum;
  readonly direction: SortDirection;
};


/** An Episode of a Media */
export type Episode = Unit & WithTimestamps & {
  readonly __typename?: 'Episode';
  /** The anime this episode is in */
  readonly anime: Anime;
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** A brief summary or description of the unit */
  readonly description: Scalars['Map'];
  readonly id: Scalars['ID'];
  /** The length of the episode in seconds */
  readonly length?: Maybe<Scalars['Int']>;
  /** The sequence number of this unit */
  readonly number: Scalars['Int'];
  /** When this episode aired */
  readonly releasedAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** A thumbnail image for the unit */
  readonly thumbnail?: Maybe<Image>;
  /** The titles for this unit in various locales */
  readonly titles: TitlesList;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};


/** An Episode of a Media */
export type EpisodeDescriptionArgs = {
  locales?: Maybe<ReadonlyArray<Scalars['String']>>;
};

/** The connection type for Episode. */
export type EpisodeConnection = {
  readonly __typename?: 'EpisodeConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<EpisodeEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Episode>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

export type EpisodeCreateInput = {
  readonly mediaId: Scalars['ID'];
  readonly mediaType: MediaTypeEnum;
  readonly titles: TitlesListInput;
  readonly number: Scalars['Int'];
  readonly description?: Maybe<Scalars['Map']>;
  readonly length?: Maybe<Scalars['Int']>;
  readonly releasedAt?: Maybe<Scalars['Date']>;
  readonly thumbnailImage?: Maybe<Scalars['Upload']>;
};

/** Autogenerated return type of EpisodeCreate */
export type EpisodeCreatePayload = {
  readonly __typename?: 'EpisodeCreatePayload';
  readonly episode?: Maybe<Episode>;
  readonly errors?: Maybe<ReadonlyArray<Error>>;
};

/** Autogenerated return type of EpisodeDelete */
export type EpisodeDeletePayload = {
  readonly __typename?: 'EpisodeDeletePayload';
  readonly episode?: Maybe<GenericDelete>;
  readonly errors?: Maybe<ReadonlyArray<Error>>;
};

/** An edge in a connection. */
export type EpisodeEdge = {
  readonly __typename?: 'EpisodeEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Episode>;
};

export type EpisodeMutations = {
  readonly __typename?: 'EpisodeMutations';
  /** Create an Episode. */
  readonly create?: Maybe<EpisodeCreatePayload>;
  /** Delete an Episode. */
  readonly delete?: Maybe<EpisodeDeletePayload>;
  /** Update an Episode. */
  readonly update?: Maybe<EpisodeUpdatePayload>;
};


export type EpisodeMutationsCreateArgs = {
  input: EpisodeCreateInput;
};


export type EpisodeMutationsDeleteArgs = {
  input: GenericDeleteInput;
};


export type EpisodeMutationsUpdateArgs = {
  input: EpisodeUpdateInput;
};

export type EpisodeUpdateInput = {
  readonly id: Scalars['ID'];
  readonly titles?: Maybe<TitlesListInput>;
  readonly number?: Maybe<Scalars['Int']>;
  readonly description?: Maybe<Scalars['Map']>;
  readonly length?: Maybe<Scalars['Int']>;
  readonly releasedAt?: Maybe<Scalars['Date']>;
  readonly thumbnailImage?: Maybe<Scalars['Upload']>;
};

/** Autogenerated return type of EpisodeUpdate */
export type EpisodeUpdatePayload = {
  readonly __typename?: 'EpisodeUpdatePayload';
  readonly episode?: Maybe<Episode>;
  readonly errors?: Maybe<ReadonlyArray<Error>>;
};

/** An episodic media in the Kitsu database */
export type Episodic = {
  /** The number of episodes in this series */
  readonly episodeCount?: Maybe<Scalars['Int']>;
  /** The general length (in seconds) of each episode */
  readonly episodeLength?: Maybe<Scalars['Int']>;
  /** Episodes for this media */
  readonly episodes: EpisodeConnection;
  /** The total length (in seconds) of the entire series */
  readonly totalLength?: Maybe<Scalars['Int']>;
};


/** An episodic media in the Kitsu database */
export type EpisodicEpisodesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  number?: Maybe<ReadonlyArray<Scalars['Int']>>;
};

/** Generic error fields used by all errors. */
export type Error = {
  /** The error code. */
  readonly code?: Maybe<Scalars['String']>;
  /** A description of the error */
  readonly message: Scalars['String'];
  /** Which input value this error came from */
  readonly path?: Maybe<ReadonlyArray<Scalars['String']>>;
};

/** Favorite media, characters, and people for a user */
export type Favorite = WithTimestamps & {
  readonly __typename?: 'Favorite';
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** The kitsu object that is mapped */
  readonly item: FavoriteItemUnion;
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** The user who favorited this item */
  readonly user: Profile;
};

/** The connection type for Favorite. */
export type FavoriteConnection = {
  readonly __typename?: 'FavoriteConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<FavoriteEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Favorite>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type FavoriteEdge = {
  readonly __typename?: 'FavoriteEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Favorite>;
};

/** Objects which are Favoritable */
export type FavoriteItemUnion = Anime | Character | Manga | Person;

export enum FollowSortEnum {
  FollowingFollowed = 'FOLLOWING_FOLLOWED',
  FollowingFollower = 'FOLLOWING_FOLLOWER',
  CreatedAt = 'CREATED_AT'
}

export type FollowSortOption = {
  readonly on: FollowSortEnum;
  readonly direction: SortDirection;
};

/** Related media grouped together */
export type Franchise = WithTimestamps & {
  readonly __typename?: 'Franchise';
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** All media related to a franchise */
  readonly installments?: Maybe<InstallmentConnection>;
  /** The name of this franchise in various languages */
  readonly titles: TitlesList;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};


/** Related media grouped together */
export type FranchiseInstallmentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<InstallmentSortOption>>>;
};

/** The connection type for Franchise. */
export type FranchiseConnection = {
  readonly __typename?: 'FranchiseConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<FranchiseEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Franchise>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type FranchiseEdge = {
  readonly __typename?: 'FranchiseEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Franchise>;
};

export type Generic = Error & {
  readonly __typename?: 'Generic';
  /** The error code. */
  readonly code?: Maybe<Scalars['String']>;
  /** A description of the error */
  readonly message: Scalars['String'];
  /** Which input value this error came from */
  readonly path?: Maybe<ReadonlyArray<Scalars['String']>>;
};

export type GenericDelete = {
  readonly __typename?: 'GenericDelete';
  readonly id: Scalars['ID'];
};

export type GenericDeleteInput = {
  readonly id: Scalars['ID'];
};



export type Image = {
  readonly __typename?: 'Image';
  /** A blurhash-encoded version of this image */
  readonly blurhash?: Maybe<Scalars['String']>;
  /** The original image */
  readonly original: ImageView;
  /** The various generated views of this image */
  readonly views: ReadonlyArray<ImageView>;
};


export type ImageViewsArgs = {
  names?: Maybe<ReadonlyArray<Scalars['String']>>;
};

export type ImageView = WithTimestamps & {
  readonly __typename?: 'ImageView';
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** The height of the image */
  readonly height?: Maybe<Scalars['Int']>;
  /** The name of this view of the image */
  readonly name: Scalars['String'];
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** The URL of this view of the image */
  readonly url: Scalars['String'];
  /** The width of the image */
  readonly width?: Maybe<Scalars['Int']>;
};

/** Individual media that belongs to a franchise */
export type Installment = WithTimestamps & {
  readonly __typename?: 'Installment';
  /** Order based chronologically */
  readonly alternativeOrder?: Maybe<Scalars['Int']>;
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** The franchise related to this installment */
  readonly franchise: Franchise;
  readonly id: Scalars['ID'];
  /** The media related to this installment */
  readonly media: Media;
  /** Order based by date released */
  readonly releaseOrder?: Maybe<Scalars['Int']>;
  /** Further explains the media relationship corresponding to a franchise */
  readonly tag?: Maybe<InstallmentTagEnum>;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for Installment. */
export type InstallmentConnection = {
  readonly __typename?: 'InstallmentConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<InstallmentEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Installment>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type InstallmentEdge = {
  readonly __typename?: 'InstallmentEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Installment>;
};

export enum InstallmentSortEnum {
  ReleaseOrder = 'RELEASE_ORDER',
  AlternativeOrder = 'ALTERNATIVE_ORDER'
}

export type InstallmentSortOption = {
  readonly on: InstallmentSortEnum;
  readonly direction: SortDirection;
};

export enum InstallmentTagEnum {
  /** The main story. */
  MainStory = 'MAIN_STORY',
  /** Takes place sometime during the main storyline. */
  SideStory = 'SIDE_STORY',
  /** Uses characters of a different series, but is not an alternate setting or story. */
  Spinoff = 'SPINOFF',
  /** Characters from different media meet in the same story. */
  Crossover = 'CROSSOVER',
  /** Same universe/world/reality/timeline, completely different characters. */
  AlternateSetting = 'ALTERNATE_SETTING',
  /** Same setting, same characters, story is told differently. */
  AlternateVersion = 'ALTERNATE_VERSION'
}


/** The user library filterable by media_type and status */
export type Library = {
  readonly __typename?: 'Library';
  /** All Library Entries for a specific Media */
  readonly all: LibraryEntryConnection;
  /** Library Entries for a specific Media filtered by the completed status */
  readonly completed: LibraryEntryConnection;
  /** Library Entries for a specific Media filtered by the current status */
  readonly current: LibraryEntryConnection;
  /** Library Entries for a specific Media filtered by the dropped status */
  readonly dropped: LibraryEntryConnection;
  /** Library Entries for a specific Media filtered by the on_hold status */
  readonly onHold: LibraryEntryConnection;
  /** Library Entries for a specific Media filtered by the planned status */
  readonly planned: LibraryEntryConnection;
  /** Random anime or manga from this library */
  readonly randomMedia?: Maybe<Media>;
};


/** The user library filterable by media_type and status */
export type LibraryAllArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mediaType: MediaTypeEnum;
  status?: Maybe<ReadonlyArray<LibraryEntryStatusEnum>>;
};


/** The user library filterable by media_type and status */
export type LibraryCompletedArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mediaType: MediaTypeEnum;
};


/** The user library filterable by media_type and status */
export type LibraryCurrentArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mediaType: MediaTypeEnum;
};


/** The user library filterable by media_type and status */
export type LibraryDroppedArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mediaType: MediaTypeEnum;
};


/** The user library filterable by media_type and status */
export type LibraryOnHoldArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mediaType: MediaTypeEnum;
};


/** The user library filterable by media_type and status */
export type LibraryPlannedArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mediaType: MediaTypeEnum;
};


/** The user library filterable by media_type and status */
export type LibraryRandomMediaArgs = {
  mediaType: MediaTypeEnum;
  status: ReadonlyArray<LibraryEntryStatusEnum>;
};

/** Information about a specific media entry for a user */
export type LibraryEntry = WithTimestamps & {
  readonly __typename?: 'LibraryEntry';
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** History of user actions for this library entry. */
  readonly events?: Maybe<LibraryEventConnection>;
  /** When the user finished this media. */
  readonly finishedAt?: Maybe<Scalars['ISO8601DateTime']>;
  readonly id: Scalars['ID'];
  /** The last unit consumed */
  readonly lastUnit?: Maybe<Unit>;
  /** The media related to this library entry. */
  readonly media: Media;
  /** The next unit to be consumed */
  readonly nextUnit?: Maybe<Unit>;
  /** Notes left by the profile related to this library entry. */
  readonly notes?: Maybe<Scalars['String']>;
  /** If the media related to the library entry is Not-Safe-for-Work. */
  readonly nsfw: Scalars['Boolean'];
  /** If this library entry is publicly visibile from their profile, or hidden. */
  readonly private: Scalars['Boolean'];
  /** The number of episodes/chapters this user has watched/read */
  readonly progress: Scalars['Int'];
  /** When the user last watched an episode or read a chapter of this media. */
  readonly progressedAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** How much you enjoyed this media (lower meaning not liking). */
  readonly rating?: Maybe<Scalars['Int']>;
  /** The reaction based on the media of this library entry. */
  readonly reaction?: Maybe<MediaReaction>;
  /** Amount of times this media has been rewatched. */
  readonly reconsumeCount: Scalars['Int'];
  /** If the profile is currently rewatching this media. */
  readonly reconsuming: Scalars['Boolean'];
  /** When the user started this media. */
  readonly startedAt?: Maybe<Scalars['ISO8601DateTime']>;
  readonly status: LibraryEntryStatusEnum;
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** The user who created this library entry. */
  readonly user: Profile;
  /** Volumes that the profile owns (physically or digital). */
  readonly volumesOwned: Scalars['Int'];
};


/** Information about a specific media entry for a user */
export type LibraryEntryEventsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mediaTypes?: Maybe<ReadonlyArray<MediaTypeEnum>>;
};

/** The connection type for LibraryEntry. */
export type LibraryEntryConnection = {
  readonly __typename?: 'LibraryEntryConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<LibraryEntryEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<LibraryEntry>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

export type LibraryEntryCreateInput = {
  readonly userId: Scalars['ID'];
  readonly mediaId: Scalars['ID'];
  readonly mediaType: MediaTypeEnum;
  readonly status: LibraryEntryStatusEnum;
  readonly progress?: Maybe<Scalars['Int']>;
  readonly private?: Maybe<Scalars['Boolean']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly reconsumeCount?: Maybe<Scalars['Int']>;
  readonly reconsuming?: Maybe<Scalars['Boolean']>;
  readonly volumesOwned?: Maybe<Scalars['Int']>;
  readonly rating?: Maybe<Scalars['Int']>;
  readonly startedAt?: Maybe<Scalars['ISO8601DateTime']>;
  readonly finishedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

/** Autogenerated return type of LibraryEntryCreate */
export type LibraryEntryCreatePayload = {
  readonly __typename?: 'LibraryEntryCreatePayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly libraryEntry?: Maybe<LibraryEntry>;
};

/** Autogenerated return type of LibraryEntryDelete */
export type LibraryEntryDeletePayload = {
  readonly __typename?: 'LibraryEntryDeletePayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly libraryEntry?: Maybe<GenericDelete>;
};

/** An edge in a connection. */
export type LibraryEntryEdge = {
  readonly __typename?: 'LibraryEntryEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<LibraryEntry>;
};

export type LibraryEntryMutations = {
  readonly __typename?: 'LibraryEntryMutations';
  /** Create a library entry */
  readonly create?: Maybe<LibraryEntryCreatePayload>;
  /** Delete a library entry */
  readonly delete?: Maybe<LibraryEntryDeletePayload>;
  /** Update a library entry */
  readonly update?: Maybe<LibraryEntryUpdatePayload>;
  /** Update library entry progress by id */
  readonly updateProgressById?: Maybe<LibraryEntryUpdateProgressByIdPayload>;
  /** Update library entry progress by media */
  readonly updateProgressByMedia?: Maybe<LibraryEntryUpdateProgressByMediaPayload>;
  /** Update library entry rating by id */
  readonly updateRatingById?: Maybe<LibraryEntryUpdateRatingByIdPayload>;
  /** Update library entry rating by media */
  readonly updateRatingByMedia?: Maybe<LibraryEntryUpdateRatingByMediaPayload>;
  /** Update library entry status by id */
  readonly updateStatusById?: Maybe<LibraryEntryUpdateStatusByIdPayload>;
  /** Update library entry status by media */
  readonly updateStatusByMedia?: Maybe<LibraryEntryUpdateStatusByMediaPayload>;
};


export type LibraryEntryMutationsCreateArgs = {
  input: LibraryEntryCreateInput;
};


export type LibraryEntryMutationsDeleteArgs = {
  input: GenericDeleteInput;
};


export type LibraryEntryMutationsUpdateArgs = {
  input: LibraryEntryUpdateInput;
};


export type LibraryEntryMutationsUpdateProgressByIdArgs = {
  input: LibraryEntryUpdateProgressByIdInput;
};


export type LibraryEntryMutationsUpdateProgressByMediaArgs = {
  input: LibraryEntryUpdateProgressByMediaInput;
};


export type LibraryEntryMutationsUpdateRatingByIdArgs = {
  input: LibraryEntryUpdateRatingByIdInput;
};


export type LibraryEntryMutationsUpdateRatingByMediaArgs = {
  input: LibraryEntryUpdateRatingByMediaInput;
};


export type LibraryEntryMutationsUpdateStatusByIdArgs = {
  input: LibraryEntryUpdateStatusByIdInput;
};


export type LibraryEntryMutationsUpdateStatusByMediaArgs = {
  input: LibraryEntryUpdateStatusByMediaInput;
};

export enum LibraryEntryStatusEnum {
  /** The user is currently reading or watching this media. */
  Current = 'CURRENT',
  /** The user plans to read or watch this media in future. */
  Planned = 'PLANNED',
  /** The user completed this media. */
  Completed = 'COMPLETED',
  /** The user started but paused reading or watching this media. */
  OnHold = 'ON_HOLD',
  /** The user started but chose not to finish this media. */
  Dropped = 'DROPPED'
}

export type LibraryEntryUpdateInput = {
  readonly id: Scalars['ID'];
  readonly status?: Maybe<LibraryEntryStatusEnum>;
  readonly progress?: Maybe<Scalars['Int']>;
  readonly private?: Maybe<Scalars['Boolean']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly reconsumeCount?: Maybe<Scalars['Int']>;
  readonly reconsuming?: Maybe<Scalars['Boolean']>;
  readonly volumesOwned?: Maybe<Scalars['Int']>;
  readonly rating?: Maybe<Scalars['Int']>;
  readonly startedAt?: Maybe<Scalars['ISO8601DateTime']>;
  readonly finishedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

/** Autogenerated return type of LibraryEntryUpdate */
export type LibraryEntryUpdatePayload = {
  readonly __typename?: 'LibraryEntryUpdatePayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly libraryEntry?: Maybe<LibraryEntry>;
};

export type LibraryEntryUpdateProgressByIdInput = {
  readonly id: Scalars['ID'];
  readonly progress: Scalars['Int'];
};

/** Autogenerated return type of LibraryEntryUpdateProgressById */
export type LibraryEntryUpdateProgressByIdPayload = {
  readonly __typename?: 'LibraryEntryUpdateProgressByIdPayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly libraryEntry?: Maybe<LibraryEntry>;
};

export type LibraryEntryUpdateProgressByMediaInput = {
  readonly mediaId: Scalars['ID'];
  readonly mediaType: MediaTypeEnum;
  readonly progress: Scalars['Int'];
};

/** Autogenerated return type of LibraryEntryUpdateProgressByMedia */
export type LibraryEntryUpdateProgressByMediaPayload = {
  readonly __typename?: 'LibraryEntryUpdateProgressByMediaPayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly libraryEntry?: Maybe<LibraryEntry>;
};

export type LibraryEntryUpdateRatingByIdInput = {
  readonly id: Scalars['ID'];
  /** A number between 2 - 20 */
  readonly rating: Scalars['Int'];
};

/** Autogenerated return type of LibraryEntryUpdateRatingById */
export type LibraryEntryUpdateRatingByIdPayload = {
  readonly __typename?: 'LibraryEntryUpdateRatingByIdPayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly libraryEntry?: Maybe<LibraryEntry>;
};

export type LibraryEntryUpdateRatingByMediaInput = {
  readonly mediaId: Scalars['ID'];
  readonly mediaType: MediaTypeEnum;
  /** A number between 2 - 20 */
  readonly rating: Scalars['Int'];
};

/** Autogenerated return type of LibraryEntryUpdateRatingByMedia */
export type LibraryEntryUpdateRatingByMediaPayload = {
  readonly __typename?: 'LibraryEntryUpdateRatingByMediaPayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly libraryEntry?: Maybe<LibraryEntry>;
};

export type LibraryEntryUpdateStatusByIdInput = {
  readonly id: Scalars['ID'];
  readonly status: LibraryEntryStatusEnum;
};

/** Autogenerated return type of LibraryEntryUpdateStatusById */
export type LibraryEntryUpdateStatusByIdPayload = {
  readonly __typename?: 'LibraryEntryUpdateStatusByIdPayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly libraryEntry?: Maybe<LibraryEntry>;
};

export type LibraryEntryUpdateStatusByMediaInput = {
  readonly mediaId: Scalars['ID'];
  readonly mediaType: MediaTypeEnum;
  readonly status: LibraryEntryStatusEnum;
};

/** Autogenerated return type of LibraryEntryUpdateStatusByMedia */
export type LibraryEntryUpdateStatusByMediaPayload = {
  readonly __typename?: 'LibraryEntryUpdateStatusByMediaPayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly libraryEntry?: Maybe<LibraryEntry>;
};

/** History of user actions for a library entry. */
export type LibraryEvent = WithTimestamps & {
  readonly __typename?: 'LibraryEvent';
  /** The data that was changed for this library event. */
  readonly changedData: Scalars['Map'];
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** The type of library event. */
  readonly kind: LibraryEventKindEnum;
  /** The library entry related to this library event. */
  readonly libraryEntry: LibraryEntry;
  /** The media related to this library event. */
  readonly media: Media;
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** The user who created this library event */
  readonly user: Profile;
};

/** The connection type for LibraryEvent. */
export type LibraryEventConnection = {
  readonly __typename?: 'LibraryEventConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<LibraryEventEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<LibraryEvent>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type LibraryEventEdge = {
  readonly __typename?: 'LibraryEventEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<LibraryEvent>;
};

export enum LibraryEventKindEnum {
  /** Progress or Time Spent was added/updated. */
  Progressed = 'PROGRESSED',
  /** Status or Reconsuming was added/updated. */
  Updated = 'UPDATED',
  /** Reaction was added/updated. */
  Reacted = 'REACTED',
  /** Rating was added/updated. */
  Rated = 'RATED',
  /** Notes were added/updated. */
  Annotated = 'ANNOTATED'
}

export enum LockedReasonEnum {
  Spam = 'SPAM',
  TooHeated = 'TOO_HEATED',
  Closed = 'CLOSED'
}

export type Manga = Media & WithTimestamps & {
  readonly __typename?: 'Manga';
  /** The recommended minimum age group for this media */
  readonly ageRating?: Maybe<AgeRatingEnum>;
  /** An explanation of why this received the age rating it did */
  readonly ageRatingGuide?: Maybe<Scalars['String']>;
  /** The average rating of this media amongst all Kitsu users */
  readonly averageRating?: Maybe<Scalars['Float']>;
  /** A large banner image for this media */
  readonly bannerImage: Image;
  /** A list of categories for this media */
  readonly categories: CategoryConnection;
  /** The number of chapters in this manga. */
  readonly chapterCount?: Maybe<Scalars['Int']>;
  /** The estimated number of chapters in this manga. */
  readonly chapterCountGuess?: Maybe<Scalars['Int']>;
  /** The chapters in the manga. */
  readonly chapters?: Maybe<ChapterConnection>;
  /** The characters who starred in this media */
  readonly characters: MediaCharacterConnection;
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** A brief (mostly spoiler free) summary or description of the media. */
  readonly description: Scalars['Map'];
  /** the day that this media made its final release */
  readonly endDate?: Maybe<Scalars['Date']>;
  /** The number of users with this in their favorites */
  readonly favoritesCount?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** A list of mappings for this media */
  readonly mappings: MappingConnection;
  /** A list of your wiki submissions for this media */
  readonly myWikiSubmissions: WikiSubmissionConnection;
  /** The time of the next release of this media */
  readonly nextRelease?: Maybe<Scalars['ISO8601DateTime']>;
  /** The country in which the media was primarily produced */
  readonly originalLocale?: Maybe<Scalars['String']>;
  /** The poster image of this media */
  readonly posterImage: Image;
  /** The companies which helped to produce this media */
  readonly productions: MediaProductionConnection;
  /** A list of quotes from this media */
  readonly quotes: QuoteConnection;
  /** A list of reactions for this media */
  readonly reactions: MediaReactionConnection;
  /** Whether the media is Safe-for-Work */
  readonly sfw: Scalars['Boolean'];
  /** The URL-friendly identifier of this media */
  readonly slug: Scalars['String'];
  /** The staff members who worked on this media */
  readonly staff: MediaStaffConnection;
  /** The day that this media first released */
  readonly startDate?: Maybe<Scalars['Date']>;
  /** The current releasing status of this media */
  readonly status: ReleaseStatusEnum;
  /** A secondary type for categorizing Manga. */
  readonly subtype: MangaSubtypeEnum;
  /** Description of when this media is expected to release */
  readonly tba?: Maybe<Scalars['String']>;
  /** The titles for this media in various locales */
  readonly titles: TitlesList;
  /** Anime or Manga. */
  readonly type: Scalars['String'];
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** The number of users with this in their library */
  readonly userCount?: Maybe<Scalars['Int']>;
  /** The number of volumes in this manga. */
  readonly volumeCount?: Maybe<Scalars['Int']>;
};


export type MangaCategoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type MangaChaptersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type MangaCharactersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type MangaDescriptionArgs = {
  locales?: Maybe<ReadonlyArray<Scalars['String']>>;
};


export type MangaMappingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type MangaMyWikiSubmissionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<WikiSubmissionSortOption>>>;
};


export type MangaProductionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type MangaQuotesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type MangaReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type MangaStaffArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type MangaAmountConsumed = AmountConsumed & {
  readonly __typename?: 'MangaAmountConsumed';
  /** Total media completed atleast once. */
  readonly completed: Scalars['Int'];
  readonly id: Scalars['ID'];
  /** Total amount of media. */
  readonly media: Scalars['Int'];
  /** The profile related to the user for this stat. */
  readonly profile: Profile;
  /** Last time we fully recalculated this stat. */
  readonly recalculatedAt: Scalars['ISO8601Date'];
  /** Total progress of library including reconsuming. */
  readonly units: Scalars['Int'];
};

export type MangaCategoryBreakdown = CategoryBreakdown & {
  readonly __typename?: 'MangaCategoryBreakdown';
  /** A Map of category_id -> count for all categories present on the library entries */
  readonly categories: Scalars['Map'];
  readonly id: Scalars['ID'];
  /** The profile related to the user for this stat. */
  readonly profile: Profile;
  /** Last time we fully recalculated this stat. */
  readonly recalculatedAt: Scalars['ISO8601Date'];
  /** The total amount of library entries. */
  readonly total: Scalars['Int'];
};

/** The connection type for Manga. */
export type MangaConnection = {
  readonly __typename?: 'MangaConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<MangaEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Manga>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type MangaEdge = {
  readonly __typename?: 'MangaEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Manga>;
};

export enum MangaSubtypeEnum {
  Manga = 'MANGA',
  Novel = 'NOVEL',
  /** Chinese comics produced in China and in the Greater China region. */
  Manhua = 'MANHUA',
  Oneshot = 'ONESHOT',
  /** Self published work. */
  Doujin = 'DOUJIN',
  /** A style of South Korean comic books and graphic novels */
  Manhwa = 'MANHWA',
  /** Original English Language. */
  Oel = 'OEL'
}


/** Media Mappings from External Sites (MAL, Anilist, etc..) to Kitsu. */
export type Mapping = WithTimestamps & {
  readonly __typename?: 'Mapping';
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** The ID of the media from the external site. */
  readonly externalId: Scalars['ID'];
  /** The name of the site which kitsu media is being linked from. */
  readonly externalSite: MappingExternalSiteEnum;
  readonly id: Scalars['ID'];
  /** The kitsu object that is mapped. */
  readonly item: MappingItemUnion;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for Mapping. */
export type MappingConnection = {
  readonly __typename?: 'MappingConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<MappingEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Mapping>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

export type MappingCreateInput = {
  readonly externalSite: MappingExternalSiteEnum;
  readonly externalId: Scalars['ID'];
  readonly itemId: Scalars['ID'];
  readonly itemType: MappingItemEnum;
};

/** Autogenerated return type of MappingCreate */
export type MappingCreatePayload = {
  readonly __typename?: 'MappingCreatePayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly mapping?: Maybe<Mapping>;
};

/** Autogenerated return type of MappingDelete */
export type MappingDeletePayload = {
  readonly __typename?: 'MappingDeletePayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly mapping?: Maybe<GenericDelete>;
};

/** An edge in a connection. */
export type MappingEdge = {
  readonly __typename?: 'MappingEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Mapping>;
};

export enum MappingExternalSiteEnum {
  MyanimelistAnime = 'MYANIMELIST_ANIME',
  MyanimelistManga = 'MYANIMELIST_MANGA',
  MyanimelistCharacters = 'MYANIMELIST_CHARACTERS',
  MyanimelistPeople = 'MYANIMELIST_PEOPLE',
  MyanimelistProducers = 'MYANIMELIST_PRODUCERS',
  AnilistAnime = 'ANILIST_ANIME',
  AnilistManga = 'ANILIST_MANGA',
  Thetvdb = 'THETVDB',
  ThetvdbSeries = 'THETVDB_SERIES',
  ThetvdbSeason = 'THETVDB_SEASON',
  Anidb = 'ANIDB',
  Animenewsnetwork = 'ANIMENEWSNETWORK',
  Mangaupdates = 'MANGAUPDATES',
  Hulu = 'HULU',
  ImdbEpisodes = 'IMDB_EPISODES',
  Aozora = 'AOZORA',
  Trakt = 'TRAKT',
  Mydramalist = 'MYDRAMALIST'
}

export enum MappingItemEnum {
  Anime = 'ANIME',
  Manga = 'MANGA',
  Category = 'CATEGORY',
  Character = 'CHARACTER',
  Episode = 'EPISODE',
  Person = 'PERSON',
  Producer = 'PRODUCER'
}

/** Objects which are Mappable */
export type MappingItemUnion = Anime | Category | Character | Episode | Manga | Person | Producer;

export type MappingMutations = {
  readonly __typename?: 'MappingMutations';
  /** Create a Mapping */
  readonly create?: Maybe<MappingCreatePayload>;
  /** Delete a Mapping */
  readonly delete?: Maybe<MappingDeletePayload>;
  /** Update a Mapping */
  readonly update?: Maybe<MappingUpdatePayload>;
};


export type MappingMutationsCreateArgs = {
  input: MappingCreateInput;
};


export type MappingMutationsDeleteArgs = {
  input: GenericDeleteInput;
};


export type MappingMutationsUpdateArgs = {
  input: MappingUpdateInput;
};

export type MappingUpdateInput = {
  readonly id: Scalars['ID'];
  readonly externalSite?: Maybe<MappingExternalSiteEnum>;
  readonly externalId?: Maybe<Scalars['ID']>;
  readonly itemId?: Maybe<Scalars['ID']>;
  readonly itemType?: Maybe<MappingItemEnum>;
};

/** Autogenerated return type of MappingUpdate */
export type MappingUpdatePayload = {
  readonly __typename?: 'MappingUpdatePayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly mapping?: Maybe<Mapping>;
};

/** A media in the Kitsu database */
export type Media = {
  /** The recommended minimum age group for this media */
  readonly ageRating?: Maybe<AgeRatingEnum>;
  /** An explanation of why this received the age rating it did */
  readonly ageRatingGuide?: Maybe<Scalars['String']>;
  /** The average rating of this media amongst all Kitsu users */
  readonly averageRating?: Maybe<Scalars['Float']>;
  /** A large banner image for this media */
  readonly bannerImage: Image;
  /** A list of categories for this media */
  readonly categories: CategoryConnection;
  /** The characters who starred in this media */
  readonly characters: MediaCharacterConnection;
  /** A brief (mostly spoiler free) summary or description of the media. */
  readonly description: Scalars['Map'];
  /** the day that this media made its final release */
  readonly endDate?: Maybe<Scalars['Date']>;
  /** The number of users with this in their favorites */
  readonly favoritesCount?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** A list of mappings for this media */
  readonly mappings: MappingConnection;
  /** A list of your wiki submissions for this media */
  readonly myWikiSubmissions: WikiSubmissionConnection;
  /** The time of the next release of this media */
  readonly nextRelease?: Maybe<Scalars['ISO8601DateTime']>;
  /** The country in which the media was primarily produced */
  readonly originalLocale?: Maybe<Scalars['String']>;
  /** The poster image of this media */
  readonly posterImage: Image;
  /** The companies which helped to produce this media */
  readonly productions: MediaProductionConnection;
  /** A list of quotes from this media */
  readonly quotes: QuoteConnection;
  /** A list of reactions for this media */
  readonly reactions: MediaReactionConnection;
  /** Whether the media is Safe-for-Work */
  readonly sfw: Scalars['Boolean'];
  /** The URL-friendly identifier of this media */
  readonly slug: Scalars['String'];
  /** The staff members who worked on this media */
  readonly staff: MediaStaffConnection;
  /** The day that this media first released */
  readonly startDate?: Maybe<Scalars['Date']>;
  /** The current releasing status of this media */
  readonly status: ReleaseStatusEnum;
  /** Description of when this media is expected to release */
  readonly tba?: Maybe<Scalars['String']>;
  /** The titles for this media in various locales */
  readonly titles: TitlesList;
  /** Anime or Manga. */
  readonly type: Scalars['String'];
  /** The number of users with this in their library */
  readonly userCount?: Maybe<Scalars['Int']>;
};


/** A media in the Kitsu database */
export type MediaCategoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A media in the Kitsu database */
export type MediaCharactersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A media in the Kitsu database */
export type MediaDescriptionArgs = {
  locales?: Maybe<ReadonlyArray<Scalars['String']>>;
};


/** A media in the Kitsu database */
export type MediaMappingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A media in the Kitsu database */
export type MediaMyWikiSubmissionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<WikiSubmissionSortOption>>>;
};


/** A media in the Kitsu database */
export type MediaProductionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A media in the Kitsu database */
export type MediaQuotesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A media in the Kitsu database */
export type MediaReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A media in the Kitsu database */
export type MediaStaffArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Information about a Character starring in a Media */
export type MediaCharacter = WithTimestamps & {
  readonly __typename?: 'MediaCharacter';
  /** The character */
  readonly character: Character;
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** The media */
  readonly media: Media;
  /** The role this character had in the media */
  readonly role: CharacterRoleEnum;
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** The voices of this character */
  readonly voices?: Maybe<CharacterVoiceConnection>;
};


/** Information about a Character starring in a Media */
export type MediaCharacterVoicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locale?: Maybe<ReadonlyArray<Scalars['String']>>;
};

/** The connection type for MediaCharacter. */
export type MediaCharacterConnection = {
  readonly __typename?: 'MediaCharacterConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<MediaCharacterEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<MediaCharacter>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type MediaCharacterEdge = {
  readonly __typename?: 'MediaCharacterEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<MediaCharacter>;
};

/** The connection type for Media. */
export type MediaConnection = {
  readonly __typename?: 'MediaConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<MediaEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Media>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MediaEdge = {
  readonly __typename?: 'MediaEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Media>;
};

/** The role a company played in the creation or localization of a media */
export type MediaProduction = WithTimestamps & {
  readonly __typename?: 'MediaProduction';
  /** The production company */
  readonly company: Producer;
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** The media */
  readonly media: Media;
  /** The role this company played */
  readonly role: MediaProductionRoleEnum;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for MediaProduction. */
export type MediaProductionConnection = {
  readonly __typename?: 'MediaProductionConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<MediaProductionEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<MediaProduction>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type MediaProductionEdge = {
  readonly __typename?: 'MediaProductionEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<MediaProduction>;
};

export enum MediaProductionRoleEnum {
  Producer = 'PRODUCER',
  Licensor = 'LICENSOR',
  Studio = 'STUDIO',
  Serialization = 'SERIALIZATION'
}

/** A simple review that is 140 characters long expressing how you felt about a media */
export type MediaReaction = WithTimestamps & {
  readonly __typename?: 'MediaReaction';
  /** The author who wrote this reaction. */
  readonly author: Profile;
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** The library entry related to this reaction. */
  readonly libraryEntry: LibraryEntry;
  /** Users who liked this reaction. */
  readonly likes: ProfileConnection;
  /** The media related to this reaction. */
  readonly media: Media;
  /** When this media reaction was written based on media progress. */
  readonly progress: Scalars['Int'];
  /** The reaction text related to a media. */
  readonly reaction: Scalars['String'];
  readonly updatedAt: Scalars['ISO8601DateTime'];
};


/** A simple review that is 140 characters long expressing how you felt about a media */
export type MediaReactionLikesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for MediaReaction. */
export type MediaReactionConnection = {
  readonly __typename?: 'MediaReactionConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<MediaReactionEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<MediaReaction>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type MediaReactionEdge = {
  readonly __typename?: 'MediaReactionEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<MediaReaction>;
};

/** Information about a person working on an anime */
export type MediaStaff = WithTimestamps & {
  readonly __typename?: 'MediaStaff';
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** The media */
  readonly media: Media;
  /** The person */
  readonly person: Person;
  /** The role this person had in the creation of this media */
  readonly role: Scalars['String'];
  readonly updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for MediaStaff. */
export type MediaStaffConnection = {
  readonly __typename?: 'MediaStaffConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<MediaStaffEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<MediaStaff>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type MediaStaffEdge = {
  readonly __typename?: 'MediaStaffEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<MediaStaff>;
};

/** これはアニメやマンガです */
export enum MediaTypeEnum {
  Anime = 'ANIME',
  Manga = 'MANGA'
}

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly anime: AnimeMutations;
  readonly episode: EpisodeMutations;
  readonly libraryEntry: LibraryEntryMutations;
  readonly mapping: MappingMutations;
  readonly post: PostMutations;
  readonly pro: ProMutations;
  readonly wikiSubmission: WikiSubmissionMutations;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  readonly __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['String']>;
};

/** A Voice Actor, Director, Animator, or other person who works in the creation and localization of media */
export type Person = WithTimestamps & {
  readonly __typename?: 'Person';
  /** The day when this person was born */
  readonly birthday?: Maybe<Scalars['Date']>;
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** A brief biography or description of the person. */
  readonly description: Scalars['Map'];
  readonly id: Scalars['ID'];
  /** An image of the person */
  readonly image?: Maybe<Image>;
  /** Information about the person working on specific media */
  readonly mediaStaff?: Maybe<MediaStaffConnection>;
  /** The primary name of this person. */
  readonly name: Scalars['String'];
  /** The name of this person in various languages */
  readonly names: TitlesList;
  /** The URL-friendly identifier of this person. */
  readonly slug: Scalars['String'];
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** The voice-acting roles this person has had. */
  readonly voices?: Maybe<CharacterVoiceConnection>;
};


/** A Voice Actor, Director, Animator, or other person who works in the creation and localization of media */
export type PersonDescriptionArgs = {
  locales?: Maybe<ReadonlyArray<Scalars['String']>>;
};


/** A Voice Actor, Director, Animator, or other person who works in the creation and localization of media */
export type PersonMediaStaffArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A Voice Actor, Director, Animator, or other person who works in the creation and localization of media */
export type PersonVoicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A post that is visible to your followers and globally in the news-feed. */
export type Post = WithTimestamps & {
  readonly __typename?: 'Post';
  /** The user who created this post. */
  readonly author: Profile;
  /** All comments on this post */
  readonly comments: CommentConnection;
  /** Unmodified content. */
  readonly content: Scalars['String'];
  /** Html formatted content. */
  readonly contentFormatted: Scalars['String'];
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** Users that are watching this post */
  readonly follows: ProfileConnection;
  readonly id: Scalars['ID'];
  /** If a post is Not-Safe-for-Work. */
  readonly isNsfw: Scalars['Boolean'];
  /** If this post spoils the tagged media. */
  readonly isSpoiler: Scalars['Boolean'];
  /** Users that have liked this post */
  readonly likes: ProfileConnection;
  /** When this post was locked. */
  readonly lockedAt?: Maybe<Scalars['ISO8601DateTime']>;
  /** The user who locked this post. */
  readonly lockedBy?: Maybe<Profile>;
  /** The reason why this post was locked. */
  readonly lockedReason?: Maybe<LockedReasonEnum>;
  /** The media tagged in this post. */
  readonly media?: Maybe<Media>;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};


/** A post that is visible to your followers and globally in the news-feed. */
export type PostCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<CommentSortOption>>>;
};


/** A post that is visible to your followers and globally in the news-feed. */
export type PostFollowsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A post that is visible to your followers and globally in the news-feed. */
export type PostLikesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<PostLikeSortOption>>>;
};

/** The connection type for Post. */
export type PostConnection = {
  readonly __typename?: 'PostConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<PostEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Post>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type PostEdge = {
  readonly __typename?: 'PostEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Post>;
};

export enum PostLikeSortEnum {
  Following = 'FOLLOWING',
  CreatedAt = 'CREATED_AT'
}

export type PostLikeSortOption = {
  readonly on: PostLikeSortEnum;
  readonly direction: SortDirection;
};

export type PostLockInput = {
  readonly id: Scalars['ID'];
  readonly lockedReason: LockedReasonEnum;
};

/** Autogenerated return type of PostLock */
export type PostLockPayload = {
  readonly __typename?: 'PostLockPayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly post?: Maybe<Post>;
};

export type PostMutations = {
  readonly __typename?: 'PostMutations';
  /** Lock a Post. */
  readonly lock?: Maybe<PostLockPayload>;
  /** Unlock a Post. */
  readonly unlock?: Maybe<PostUnlockPayload>;
};


export type PostMutationsLockArgs = {
  input: PostLockInput;
};


export type PostMutationsUnlockArgs = {
  input: PostUnlockInput;
};

export enum PostSortEnum {
  CreatedAt = 'CREATED_AT'
}

export type PostSortOption = {
  readonly on: PostSortEnum;
  readonly direction: SortDirection;
};

export type PostUnlockInput = {
  readonly id: Scalars['ID'];
};

/** Autogenerated return type of PostUnlock */
export type PostUnlockPayload = {
  readonly __typename?: 'PostUnlockPayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly post?: Maybe<Post>;
};

export type ProMutations = {
  readonly __typename?: 'ProMutations';
  /** Set the user's discord tag */
  readonly setDiscord?: Maybe<ProSetDiscordPayload>;
  /** Set the user's Hall-of-Fame message */
  readonly setMessage?: Maybe<ProSetMessagePayload>;
  /** End the user's pro subscription */
  readonly unsubscribe?: Maybe<ProUnsubscribePayload>;
};


export type ProMutationsSetDiscordArgs = {
  discord: Scalars['String'];
};


export type ProMutationsSetMessageArgs = {
  message: Scalars['String'];
};

/** Autogenerated return type of ProSetDiscord */
export type ProSetDiscordPayload = {
  readonly __typename?: 'ProSetDiscordPayload';
  readonly discord: Scalars['String'];
};

/** Autogenerated return type of ProSetMessage */
export type ProSetMessagePayload = {
  readonly __typename?: 'ProSetMessagePayload';
  readonly message: Scalars['String'];
};

/** A subscription to Kitsu PRO */
export type ProSubscription = WithTimestamps & {
  readonly __typename?: 'ProSubscription';
  /** The account which is subscribed to Pro benefits */
  readonly account: Account;
  /** The billing service used for this subscription */
  readonly billingService: RecurringBillingServiceEnum;
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** The tier of Pro the account is subscribed to */
  readonly tier: ProTierEnum;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};

export enum ProTierEnum {
  /** Aozora Pro (only hides ads) */
  AoPro = 'AO_PRO',
  /** Aozora Pro+ (only hides ads) */
  AoProPlus = 'AO_PRO_PLUS',
  /** Basic tier of Kitsu Pro */
  Pro = 'PRO',
  /** Top tier of Kitsu Pro */
  Patron = 'PATRON'
}

/** Autogenerated return type of ProUnsubscribe */
export type ProUnsubscribePayload = {
  readonly __typename?: 'ProUnsubscribePayload';
  readonly expiresAt?: Maybe<Scalars['ISO8601DateTime']>;
};

/** A company involved in the creation or localization of media */
export type Producer = WithTimestamps & {
  readonly __typename?: 'Producer';
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** The name of this production company */
  readonly name: Scalars['String'];
  readonly updatedAt: Scalars['ISO8601DateTime'];
};

/** A user profile on Kitsu */
export type Profile = WithTimestamps & {
  readonly __typename?: 'Profile';
  /** A short biographical blurb about this profile */
  readonly about?: Maybe<Scalars['String']>;
  /** An avatar image to easily identify this profile */
  readonly avatarImage?: Maybe<Image>;
  /** A banner to display at the top of the profile */
  readonly bannerImage?: Maybe<Image>;
  /** When the user was born */
  readonly birthday?: Maybe<Scalars['ISO8601Date']>;
  /** All comments to any post this user has made. */
  readonly comments: CommentConnection;
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** Favorite media, characters, and people */
  readonly favorites: FavoriteConnection;
  /** People that follow the user */
  readonly followers: ProfileConnection;
  /** People the user is following */
  readonly following: ProfileConnection;
  /** What the user identifies as */
  readonly gender?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The user library of their media */
  readonly library: Library;
  /** A list of library events for this user */
  readonly libraryEvents: LibraryEventConnection;
  /** The user's general location */
  readonly location?: Maybe<Scalars['String']>;
  /** Media reactions written by this user. */
  readonly mediaReactions: MediaReactionConnection;
  /** A non-unique publicly visible name for the profile. Minimum of 3 characters and any valid Unicode character */
  readonly name: Scalars['String'];
  /** Post pinned to the user profile */
  readonly pinnedPost?: Maybe<Post>;
  /** All posts this profile has made. */
  readonly posts: PostConnection;
  /** The message this user has submitted to the Hall of Fame */
  readonly proMessage?: Maybe<Scalars['String']>;
  /** The PRO level the user currently has */
  readonly proTier?: Maybe<ProTierEnum>;
  /** Links to the user on other (social media) sites. */
  readonly siteLinks?: Maybe<SiteLinkConnection>;
  /** The URL-friendly identifier for this profile */
  readonly slug?: Maybe<Scalars['String']>;
  /** The different stats we calculate for this user. */
  readonly stats: ProfileStats;
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** A fully qualified URL to the profile */
  readonly url?: Maybe<Scalars['String']>;
  /** The character this profile has declared as their waifu or husbando */
  readonly waifu?: Maybe<Character>;
  /** The properly-gendered term for the user's waifu. This should normally only be 'Waifu' or 'Husbando' but some people are jerks, including the person who wrote this... */
  readonly waifuOrHusbando?: Maybe<Scalars['String']>;
  /** Wiki submissions created by this user */
  readonly wikiSubmissions: WikiSubmissionConnection;
};


/** A user profile on Kitsu */
export type ProfileCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user profile on Kitsu */
export type ProfileFavoritesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user profile on Kitsu */
export type ProfileFollowersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<FollowSortOption>>>;
};


/** A user profile on Kitsu */
export type ProfileFollowingArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<FollowSortOption>>>;
};


/** A user profile on Kitsu */
export type ProfileLibraryEventsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  kind?: Maybe<ReadonlyArray<LibraryEventKindEnum>>;
};


/** A user profile on Kitsu */
export type ProfileMediaReactionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user profile on Kitsu */
export type ProfilePostsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<PostSortOption>>>;
};


/** A user profile on Kitsu */
export type ProfileSiteLinksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A user profile on Kitsu */
export type ProfileWikiSubmissionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<WikiSubmissionSortOption>>>;
  statuses?: Maybe<ReadonlyArray<WikiSubmissionStatusEnum>>;
};

/** The connection type for Profile. */
export type ProfileConnection = {
  readonly __typename?: 'ProfileConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<ProfileEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Profile>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type ProfileEdge = {
  readonly __typename?: 'ProfileEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Profile>;
};

/** The different types of user stats that we calculate. */
export type ProfileStats = {
  readonly __typename?: 'ProfileStats';
  /** The total amount of anime you have watched over your whole life. */
  readonly animeAmountConsumed: AnimeAmountConsumed;
  /** The breakdown of the different categories related to the anime you have completed */
  readonly animeCategoryBreakdown: AnimeCategoryBreakdown;
  /** The total amount of manga you ahve read over your whole life. */
  readonly mangaAmountConsumed: MangaAmountConsumed;
  /** The breakdown of the different categories related to the manga you have completed */
  readonly mangaCategoryBreakdown: MangaCategoryBreakdown;
};

export type Query = {
  readonly __typename?: 'Query';
  /** All Anime in the Kitsu database */
  readonly anime: AnimeConnection;
  /** All Anime with specific Status */
  readonly animeByStatus?: Maybe<AnimeConnection>;
  /** All Categories in the Kitsu Database */
  readonly categories?: Maybe<CategoryConnection>;
  /** Kitsu account details. You must supply an Authorization token in header. */
  readonly currentAccount?: Maybe<Account>;
  /** Find a single Anime by ID */
  readonly findAnimeById?: Maybe<Anime>;
  /** Find a single Anime by Slug */
  readonly findAnimeBySlug?: Maybe<Anime>;
  /** Find a single Category by ID */
  readonly findCategoryById?: Maybe<Category>;
  /** Find a single Category by Slug */
  readonly findCategoryBySlug?: Maybe<Category>;
  /** Find a single Character by ID */
  readonly findCharacterById?: Maybe<Character>;
  /** Find a single Character by Slug */
  readonly findCharacterBySlug?: Maybe<Character>;
  /** Find a single Library Entry by ID */
  readonly findLibraryEntryById?: Maybe<LibraryEntry>;
  /** Find a single Library Event by ID */
  readonly findLibraryEventById?: Maybe<LibraryEvent>;
  /** Find a single Manga by ID */
  readonly findMangaById?: Maybe<Manga>;
  /** Find a single Manga by Slug */
  readonly findMangaBySlug?: Maybe<Manga>;
  /** Find a single Person by ID */
  readonly findPersonById?: Maybe<Person>;
  /** Find a single Person by Slug */
  readonly findPersonBySlug?: Maybe<Person>;
  /** Find a single Post by ID */
  readonly findPostById?: Maybe<Post>;
  /** Find a single User by ID */
  readonly findProfileById?: Maybe<Profile>;
  /** Find a single User by Slug */
  readonly findProfileBySlug?: Maybe<Profile>;
  /** Find a single Wiki Submission by ID */
  readonly findWikiSubmissionById?: Maybe<WikiSubmission>;
  /** All Franchise in the Kitsu database */
  readonly franchises?: Maybe<FranchiseConnection>;
  /** List trending media on Kitsu */
  readonly globalTrending: MediaConnection;
  /** List of Library Entries by MediaType and MediaId */
  readonly libraryEntriesByMedia?: Maybe<LibraryEntryConnection>;
  /** List of Library Entries by MediaType */
  readonly libraryEntriesByMediaType?: Maybe<LibraryEntryConnection>;
  /** List trending media within your network */
  readonly localTrending: MediaConnection;
  /** Find a specific Mapping Item by External ID and External Site. */
  readonly lookupMapping?: Maybe<MappingItemUnion>;
  /** All Manga in the Kitsu database */
  readonly manga: MangaConnection;
  /** All Manga with specific Status */
  readonly mangaByStatus?: Maybe<MangaConnection>;
  /** Patrons sorted by a Proprietary Magic Algorithm */
  readonly patrons: ProfileConnection;
  /** Random anime or manga */
  readonly randomMedia: Media;
  /** Search for Anime by title using Algolia. The most relevant results will be at the top. */
  readonly searchAnimeByTitle: AnimeConnection;
  /** Search for Manga by title using Algolia. The most relevant results will be at the top. */
  readonly searchMangaByTitle: MangaConnection;
  /** Search for any media (Anime, Manga) by title using Algolia. If no media_type is supplied, it will search for both. The most relevant results will be at the top. */
  readonly searchMediaByTitle: MediaConnection;
  /** Search for User by username using Algolia. The most relevant results will be at the top. */
  readonly searchProfileByUsername?: Maybe<ProfileConnection>;
  /** Get your current session info */
  readonly session: Session;
  /** Select all Wiki Submissions that match with a supplied status. */
  readonly wikiSubmissionsByStatuses?: Maybe<WikiSubmissionConnection>;
};


export type QueryAnimeArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAnimeByStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  status: ReleaseStatusEnum;
};


export type QueryCategoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryFindAnimeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindAnimeBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryFindCategoryByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindCategoryBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryFindCharacterByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindCharacterBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryFindLibraryEntryByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindLibraryEventByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindMangaByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindMangaBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryFindPersonByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindPersonBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryFindPostByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindProfileByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindProfileBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryFindWikiSubmissionByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFranchisesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGlobalTrendingArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mediaType: MediaTypeEnum;
};


export type QueryLibraryEntriesByMediaArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mediaType: MediaTypeEnum;
  mediaId: Scalars['ID'];
};


export type QueryLibraryEntriesByMediaTypeArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mediaType: MediaTypeEnum;
};


export type QueryLocalTrendingArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  mediaType: MediaTypeEnum;
};


export type QueryLookupMappingArgs = {
  externalId: Scalars['ID'];
  externalSite: MappingExternalSiteEnum;
};


export type QueryMangaArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryMangaByStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  status: ReleaseStatusEnum;
};


export type QueryPatronsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRandomMediaArgs = {
  mediaType: MediaTypeEnum;
  ageRatings: ReadonlyArray<AgeRatingEnum>;
};


export type QuerySearchAnimeByTitleArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};


export type QuerySearchMangaByTitleArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};


export type QuerySearchMediaByTitleArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  mediaType?: Maybe<MediaTypeEnum>;
};


export type QuerySearchProfileByUsernameArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};


export type QueryWikiSubmissionsByStatusesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ReadonlyArray<Maybe<WikiSubmissionSortOption>>>;
  statuses?: Maybe<ReadonlyArray<WikiSubmissionStatusEnum>>;
};

/** A quote from a media */
export type Quote = WithTimestamps & {
  readonly __typename?: 'Quote';
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** The lines of the quote */
  readonly lines: QuoteLineConnection;
  /** The media this quote is excerpted from */
  readonly media: Media;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};


/** A quote from a media */
export type QuoteLinesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for Quote. */
export type QuoteConnection = {
  readonly __typename?: 'QuoteConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<QuoteEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Quote>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type QuoteEdge = {
  readonly __typename?: 'QuoteEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Quote>;
};

/** A line in a quote */
export type QuoteLine = WithTimestamps & {
  readonly __typename?: 'QuoteLine';
  /** The character who said this line */
  readonly character: Character;
  /** The line that was spoken */
  readonly content: Scalars['String'];
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** The quote this line is in */
  readonly quote: Quote;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for QuoteLine. */
export type QuoteLineConnection = {
  readonly __typename?: 'QuoteLineConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<QuoteLineEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<QuoteLine>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type QuoteLineEdge = {
  readonly __typename?: 'QuoteLineEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<QuoteLine>;
};

export enum RatingSystemEnum {
  /** 1-20 displayed as 4 smileys - Awful (1), Meh (8), Good (14) and Great (20) */
  Simple = 'SIMPLE',
  /** 1-20 in increments of 2 displayed as 5 stars in 0.5 star increments */
  Regular = 'REGULAR',
  /** 1-20 in increments of 1 displayed as 1-10 in 0.5 increments */
  Advanced = 'ADVANCED'
}

export enum RecurringBillingServiceEnum {
  /** Bill a credit card via Stripe */
  Stripe = 'STRIPE',
  /** Bill a PayPal account */
  Paypal = 'PAYPAL',
  /** Billed through Apple In-App Subscription */
  Apple = 'APPLE',
  /** Billed through Google Play Subscription */
  GooglePlay = 'GOOGLE_PLAY'
}

export enum ReleaseSeasonEnum {
  /** Released during the Winter season */
  Winter = 'WINTER',
  /** Released during the Spring season */
  Spring = 'SPRING',
  /** Released during the Summer season */
  Summer = 'SUMMER',
  /** Released during the Fall season */
  Fall = 'FALL'
}

export enum ReleaseStatusEnum {
  /** The release date has not been announced yet */
  Tba = 'TBA',
  /** This media is no longer releasing */
  Finished = 'FINISHED',
  /** This media is currently releasing */
  Current = 'CURRENT',
  /** This media is releasing soon */
  Upcoming = 'UPCOMING',
  /** This media is not released yet */
  Unreleased = 'UNRELEASED'
}

/** Information about a user session */
export type Session = {
  readonly __typename?: 'Session';
  /** The account associated with this session */
  readonly account?: Maybe<Account>;
  /** Single sign-on token for Nolt */
  readonly noltToken: Scalars['String'];
  /** The profile associated with this session */
  readonly profile?: Maybe<Profile>;
};

/** A link to a user's profile on an external site. */
export type SiteLink = WithTimestamps & {
  readonly __typename?: 'SiteLink';
  /** The user profile the site is linked to. */
  readonly author: Profile;
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** A fully qualified URL of the user profile on an external site. */
  readonly url: Scalars['String'];
};

/** The connection type for SiteLink. */
export type SiteLinkConnection = {
  readonly __typename?: 'SiteLinkConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<SiteLinkEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<SiteLink>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type SiteLinkEdge = {
  readonly __typename?: 'SiteLinkEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<SiteLink>;
};

export enum SitePermissionEnum {
  /** Administrator/staff member of Kitsu */
  Admin = 'ADMIN',
  /** Moderator of community behavior */
  CommunityMod = 'COMMUNITY_MOD',
  /** Maintainer of the Kitsu media database */
  DatabaseMod = 'DATABASE_MOD'
}

export enum SortDirection {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

/** Media that is streamable. */
export type Streamable = {
  /** Spoken language is replaced by language of choice. */
  readonly dubs: ReadonlyArray<Scalars['String']>;
  /** Which regions this video is available in. */
  readonly regions: ReadonlyArray<Scalars['String']>;
  /** The site that is streaming this media. */
  readonly streamer: Streamer;
  /** Languages this is translated to. Usually placed at bottom of media. */
  readonly subs: ReadonlyArray<Scalars['String']>;
};

/** The streaming company. */
export type Streamer = WithTimestamps & {
  readonly __typename?: 'Streamer';
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** The name of the site that is streaming this media. */
  readonly siteName: Scalars['String'];
  /** Additional media this site is streaming. */
  readonly streamingLinks: StreamingLinkConnection;
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** Videos of the media being streamed. */
  readonly videos: VideoConnection;
};


/** The streaming company. */
export type StreamerStreamingLinksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** The streaming company. */
export type StreamerVideosArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The stream link. */
export type StreamingLink = Streamable & WithTimestamps & {
  readonly __typename?: 'StreamingLink';
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** Spoken language is replaced by language of choice. */
  readonly dubs: ReadonlyArray<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The media being streamed */
  readonly media: Media;
  /** Which regions this video is available in. */
  readonly regions: ReadonlyArray<Scalars['String']>;
  /** The site that is streaming this media. */
  readonly streamer: Streamer;
  /** Languages this is translated to. Usually placed at bottom of media. */
  readonly subs: ReadonlyArray<Scalars['String']>;
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** Fully qualified URL for the streaming link. */
  readonly url: Scalars['String'];
};

/** The connection type for StreamingLink. */
export type StreamingLinkConnection = {
  readonly __typename?: 'StreamingLinkConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<StreamingLinkEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<StreamingLink>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type StreamingLinkEdge = {
  readonly __typename?: 'StreamingLinkEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<StreamingLink>;
};

export enum TitleLanguagePreferenceEnum {
  /** Prefer the most commonly-used title for media */
  Canonical = 'CANONICAL',
  /** Prefer the romanized title for media */
  Romanized = 'ROMANIZED',
  /** Prefer the localized title for media */
  Localized = 'LOCALIZED'
}

export type TitlesList = {
  readonly __typename?: 'TitlesList';
  /** A list of additional, alternative, abbreviated, or unofficial titles */
  readonly alternatives?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The official or de facto international title */
  readonly canonical?: Maybe<Scalars['String']>;
  /** The locale code that identifies which title is used as the canonical title */
  readonly canonicalLocale?: Maybe<Scalars['String']>;
  /** The list of localized titles keyed by locale */
  readonly localized: Scalars['Map'];
};


export type TitlesListLocalizedArgs = {
  locales?: Maybe<ReadonlyArray<Scalars['String']>>;
};

export type TitlesListInput = {
  readonly canonical?: Maybe<Scalars['String']>;
  readonly localized?: Maybe<Scalars['Map']>;
  readonly alternatives?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly canonicalLocale?: Maybe<Scalars['String']>;
};

/** Media units such as episodes or chapters */
export type Unit = {
  /** A brief summary or description of the unit */
  readonly description: Scalars['Map'];
  readonly id: Scalars['ID'];
  /** The sequence number of this unit */
  readonly number: Scalars['Int'];
  /** A thumbnail image for the unit */
  readonly thumbnail?: Maybe<Image>;
  /** The titles for this unit in various locales */
  readonly titles: TitlesList;
};


/** Media units such as episodes or chapters */
export type UnitDescriptionArgs = {
  locales?: Maybe<ReadonlyArray<Scalars['String']>>;
};


/** The media video. */
export type Video = Streamable & WithTimestamps & {
  readonly __typename?: 'Video';
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** Spoken language is replaced by language of choice. */
  readonly dubs: ReadonlyArray<Scalars['String']>;
  /** The episode of this video */
  readonly episode: Episode;
  readonly id: Scalars['ID'];
  /** Which regions this video is available in. */
  readonly regions: ReadonlyArray<Scalars['String']>;
  /** The site that is streaming this media. */
  readonly streamer: Streamer;
  /** Languages this is translated to. Usually placed at bottom of media. */
  readonly subs: ReadonlyArray<Scalars['String']>;
  readonly updatedAt: Scalars['ISO8601DateTime'];
  /** The url of the video. */
  readonly url: Scalars['String'];
};

/** The connection type for Video. */
export type VideoConnection = {
  readonly __typename?: 'VideoConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<VideoEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<Video>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type VideoEdge = {
  readonly __typename?: 'VideoEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<Video>;
};

/** A manga volume which can contain multiple chapters. */
export type Volume = WithTimestamps & {
  readonly __typename?: 'Volume';
  /** The chapters in this volume. */
  readonly chapters?: Maybe<ChapterConnection>;
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly id: Scalars['ID'];
  /** The isbn number of this volume. */
  readonly isbn: ReadonlyArray<Scalars['String']>;
  /** The manga this volume is in. */
  readonly manga: Manga;
  /** The volume number. */
  readonly number: Scalars['Int'];
  /** The date when this chapter was released. */
  readonly published?: Maybe<Scalars['ISO8601Date']>;
  /** The titles for this chapter in various locales */
  readonly titles: TitlesList;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};


/** A manga volume which can contain multiple chapters. */
export type VolumeChaptersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A Wiki Submission is used to either create or edit existing data in our database. This will allow a simple and convient way for users to submit issues/corrections without all the work being left to the mods. */
export type WikiSubmission = WithTimestamps & {
  readonly __typename?: 'WikiSubmission';
  /** The user who created this draft */
  readonly author: Profile;
  readonly createdAt: Scalars['ISO8601DateTime'];
  /** The full object that holds all the details for any modifications/additions/deletions made to the entity you are editing. This will be validated using JSON Schema. */
  readonly data?: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  /** Any additional information that may need to be provided related to the Wiki Submission */
  readonly notes?: Maybe<Scalars['String']>;
  /** The status of the Wiki Submission */
  readonly status: WikiSubmissionStatusEnum;
  /** The title given to the Wiki Submission. This will default to the title of what is being edited. */
  readonly title?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for WikiSubmission. */
export type WikiSubmissionConnection = {
  readonly __typename?: 'WikiSubmissionConnection';
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<Maybe<WikiSubmissionEdge>>>;
  /** A list of nodes. */
  readonly nodes?: Maybe<ReadonlyArray<Maybe<WikiSubmission>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The total amount of nodes. */
  readonly totalCount: Scalars['Int'];
};

export type WikiSubmissionCreateDraftInput = {
  readonly data: Scalars['JSON'];
  readonly title?: Maybe<Scalars['String']>;
  readonly notes?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of WikiSubmissionCreateDraft */
export type WikiSubmissionCreateDraftPayload = {
  readonly __typename?: 'WikiSubmissionCreateDraftPayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly wikiSubmission?: Maybe<WikiSubmission>;
};

/** An edge in a connection. */
export type WikiSubmissionEdge = {
  readonly __typename?: 'WikiSubmissionEdge';
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node?: Maybe<WikiSubmission>;
};

export type WikiSubmissionMutations = {
  readonly __typename?: 'WikiSubmissionMutations';
  /** Create a wiki submission draft */
  readonly createDraft?: Maybe<WikiSubmissionCreateDraftPayload>;
  /** Submit a wiki submission draft */
  readonly submitDraft?: Maybe<WikiSubmissionSubmitDraftPayload>;
  /** Update a wiki submission draft */
  readonly updateDraft?: Maybe<WikiSubmissionUpdateDraftPayload>;
};


export type WikiSubmissionMutationsCreateDraftArgs = {
  input: WikiSubmissionCreateDraftInput;
};


export type WikiSubmissionMutationsSubmitDraftArgs = {
  input: WikiSubmissionSubmitDraftInput;
};


export type WikiSubmissionMutationsUpdateDraftArgs = {
  input: WikiSubmissionUpdateDraftInput;
};

export enum WikiSubmissionSortEnum {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type WikiSubmissionSortOption = {
  readonly on: WikiSubmissionSortEnum;
  readonly direction: SortDirection;
};

export enum WikiSubmissionStatusEnum {
  Draft = 'DRAFT',
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Rejected = 'REJECTED'
}

export type WikiSubmissionSubmitDraftInput = {
  readonly id: Scalars['ID'];
  readonly data: Scalars['JSON'];
  readonly title?: Maybe<Scalars['String']>;
  readonly notes?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of WikiSubmissionSubmitDraft */
export type WikiSubmissionSubmitDraftPayload = {
  readonly __typename?: 'WikiSubmissionSubmitDraftPayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly wikiSubmission?: Maybe<WikiSubmission>;
};

export type WikiSubmissionUpdateDraftInput = {
  readonly id: Scalars['ID'];
  readonly data: Scalars['JSON'];
  readonly notes?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of WikiSubmissionUpdateDraft */
export type WikiSubmissionUpdateDraftPayload = {
  readonly __typename?: 'WikiSubmissionUpdateDraftPayload';
  readonly errors?: Maybe<ReadonlyArray<Error>>;
  readonly wikiSubmission?: Maybe<WikiSubmission>;
};

export type WithTimestamps = {
  readonly createdAt: Scalars['ISO8601DateTime'];
  readonly updatedAt: Scalars['ISO8601DateTime'];
};

export type AnimeTitlesFragment = (
  { readonly __typename?: 'TitlesList' }
  & Pick<TitlesList, 'canonical' | 'alternatives' | 'canonicalLocale' | 'localized'>
);

export type FindAnimeFieldsFragment = (
  { readonly __typename: 'Anime' }
  & Pick<Anime, 'id' | 'slug' | 'description' | 'ageRating' | 'ageRatingGuide' | 'sfw' | 'startDate' | 'endDate' | 'nextRelease' | 'status' | 'tba'>
  & { readonly titles: (
    { readonly __typename?: 'TitlesList' }
    & AnimeTitlesFragment
  ), readonly characters: (
    { readonly __typename?: 'MediaCharacterConnection' }
    & { readonly nodes?: Maybe<ReadonlyArray<Maybe<(
      { readonly __typename?: 'MediaCharacter' }
      & FindMediaCharacterFieldsFragment
    )>>> }
  ) }
);

export type FindMediaCharacterFieldsFragment = (
  { readonly __typename?: 'MediaCharacter' }
  & Pick<MediaCharacter, 'id'>
);

type FindMediaFields_Anime_Fragment = (
  { readonly __typename: 'Anime' }
  & Pick<Anime, 'id' | 'slug' | 'description' | 'ageRating' | 'ageRatingGuide' | 'sfw' | 'startDate' | 'endDate' | 'nextRelease' | 'status' | 'tba'>
  & { readonly titles: (
    { readonly __typename?: 'TitlesList' }
    & AnimeTitlesFragment
  ) }
);

type FindMediaFields_Manga_Fragment = (
  { readonly __typename: 'Manga' }
  & Pick<Manga, 'id' | 'slug' | 'description' | 'ageRating' | 'ageRatingGuide' | 'sfw' | 'startDate' | 'endDate' | 'nextRelease' | 'status' | 'tba'>
  & { readonly titles: (
    { readonly __typename?: 'TitlesList' }
    & AnimeTitlesFragment
  ) }
);

export type FindMediaFieldsFragment = FindMediaFields_Anime_Fragment | FindMediaFields_Manga_Fragment;

type MediaSearchFields_Anime_Fragment = (
  { readonly __typename?: 'Anime' }
  & Pick<Anime, 'id' | 'slug' | 'type' | 'description' | 'startDate' | 'tba'>
  & { readonly titles: (
    { readonly __typename?: 'TitlesList' }
    & Pick<TitlesList, 'canonical'>
  ), readonly posterImage: (
    { readonly __typename?: 'Image' }
    & Pick<Image, 'blurhash'>
    & { readonly original: (
      { readonly __typename?: 'ImageView' }
      & Pick<ImageView, 'url'>
    ) }
  ) }
);

type MediaSearchFields_Manga_Fragment = (
  { readonly __typename?: 'Manga' }
  & Pick<Manga, 'id' | 'slug' | 'type' | 'description' | 'startDate' | 'tba'>
  & { readonly titles: (
    { readonly __typename?: 'TitlesList' }
    & Pick<TitlesList, 'canonical'>
  ), readonly posterImage: (
    { readonly __typename?: 'Image' }
    & Pick<Image, 'blurhash'>
    & { readonly original: (
      { readonly __typename?: 'ImageView' }
      & Pick<ImageView, 'url'>
    ) }
  ) }
);

export type MediaSearchFieldsFragment = MediaSearchFields_Anime_Fragment | MediaSearchFields_Manga_Fragment;

export type WikiSubmissionFieldsFragment = (
  { readonly __typename?: 'WikiSubmission' }
  & Pick<WikiSubmission, 'id' | 'title' | 'status' | 'data'>
);

export type CreateDraftMutationMutationVariables = Exact<{
  input: WikiSubmissionCreateDraftInput;
}>;


export type CreateDraftMutationMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly wikiSubmission: (
    { readonly __typename?: 'WikiSubmissionMutations' }
    & { readonly createDraft?: Maybe<(
      { readonly __typename?: 'WikiSubmissionCreateDraftPayload' }
      & { readonly wikiSubmission?: Maybe<(
        { readonly __typename?: 'WikiSubmission' }
        & WikiSubmissionFieldsFragment
      )> }
    )> }
  ) }
);

export type SubmitDraftMutationMutationVariables = Exact<{
  input: WikiSubmissionSubmitDraftInput;
}>;


export type SubmitDraftMutationMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly wikiSubmission: (
    { readonly __typename?: 'WikiSubmissionMutations' }
    & { readonly submitDraft?: Maybe<(
      { readonly __typename?: 'WikiSubmissionSubmitDraftPayload' }
      & { readonly wikiSubmission?: Maybe<(
        { readonly __typename?: 'WikiSubmission' }
        & Pick<WikiSubmission, 'id'>
      )> }
    )> }
  ) }
);

export type UpdateDraftMutationMutationVariables = Exact<{
  input: WikiSubmissionUpdateDraftInput;
}>;


export type UpdateDraftMutationMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly wikiSubmission: (
    { readonly __typename?: 'WikiSubmissionMutations' }
    & { readonly updateDraft?: Maybe<(
      { readonly __typename?: 'WikiSubmissionUpdateDraftPayload' }
      & { readonly wikiSubmission?: Maybe<(
        { readonly __typename?: 'WikiSubmission' }
        & Pick<WikiSubmission, 'data'>
      )> }
    )> }
  ) }
);

export type FindAnimeByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindAnimeByIdQuery = (
  { readonly __typename?: 'Query' }
  & { readonly findAnimeById?: Maybe<(
    { readonly __typename?: 'Anime' }
    & FindAnimeFieldsFragment
  )> }
);

export type FindAnimeBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type FindAnimeBySlugQuery = (
  { readonly __typename?: 'Query' }
  & { readonly findAnimeBySlug?: Maybe<(
    { readonly __typename?: 'Anime' }
    & FindAnimeFieldsFragment
  )> }
);

export type FindMangaByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindMangaByIdQuery = (
  { readonly __typename?: 'Query' }
  & { readonly findMangaById?: Maybe<(
    { readonly __typename?: 'Manga' }
    & FindMediaFields_Manga_Fragment
  )> }
);

export type FindWikiSubmissionByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindWikiSubmissionByIdQuery = (
  { readonly __typename?: 'Query' }
  & { readonly findWikiSubmissionById?: Maybe<(
    { readonly __typename?: 'WikiSubmission' }
    & WikiSubmissionFieldsFragment
  )> }
);

export type SearchMediaByTitleQueryVariables = Exact<{
  first: Scalars['Int'];
  title: Scalars['String'];
  media_type?: Maybe<MediaTypeEnum>;
  cursor?: Maybe<Scalars['String']>;
}>;


export type SearchMediaByTitleQuery = (
  { readonly __typename?: 'Query' }
  & { readonly searchMediaByTitle: (
    { readonly __typename?: 'MediaConnection' }
    & { readonly edges?: Maybe<ReadonlyArray<Maybe<(
      { readonly __typename?: 'MediaEdge' }
      & Pick<MediaEdge, 'cursor'>
      & { readonly node?: Maybe<(
        { readonly __typename?: 'Anime' }
        & MediaSearchFields_Anime_Fragment
      ) | (
        { readonly __typename?: 'Manga' }
        & MediaSearchFields_Manga_Fragment
      )> }
    )>>>, readonly pageInfo: (
      { readonly __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ) }
  ) }
);

export type UserWikiSubmissionsQueryVariables = Exact<{
  first: Scalars['Int'];
  statuses?: Maybe<ReadonlyArray<WikiSubmissionStatusEnum> | WikiSubmissionStatusEnum>;
}>;


export type UserWikiSubmissionsQuery = (
  { readonly __typename?: 'Query' }
  & { readonly currentAccount?: Maybe<(
    { readonly __typename?: 'Account' }
    & { readonly profile: (
      { readonly __typename?: 'Profile' }
      & { readonly wikiSubmissions: (
        { readonly __typename?: 'WikiSubmissionConnection' }
        & { readonly nodes?: Maybe<ReadonlyArray<Maybe<(
          { readonly __typename?: 'WikiSubmission' }
          & WikiSubmissionFieldsFragment
        )>>> }
      ) }
    ) }
  )> }
);

export const AnimeTitlesFragmentDoc = gql`
    fragment animeTitles on TitlesList {
  canonical
  alternatives
  canonicalLocale
  localized
}
    `;
export const FindMediaCharacterFieldsFragmentDoc = gql`
    fragment findMediaCharacterFields on MediaCharacter {
  id
}
    `;
export const FindAnimeFieldsFragmentDoc = gql`
    fragment findAnimeFields on Anime {
  __typename
  id
  slug
  titles {
    ...animeTitles
  }
  description
  ageRating
  ageRatingGuide
  sfw
  startDate
  endDate
  nextRelease
  status
  tba
  characters(first: 1) {
    nodes {
      ...findMediaCharacterFields
    }
  }
}
    ${AnimeTitlesFragmentDoc}
${FindMediaCharacterFieldsFragmentDoc}`;
export const FindMediaFieldsFragmentDoc = gql`
    fragment findMediaFields on Media {
  __typename
  id
  slug
  titles {
    ...animeTitles
  }
  description
  ageRating
  ageRatingGuide
  sfw
  startDate
  endDate
  nextRelease
  status
  tba
}
    ${AnimeTitlesFragmentDoc}`;
export const MediaSearchFieldsFragmentDoc = gql`
    fragment mediaSearchFields on Media {
  id
  slug
  type
  titles {
    canonical
  }
  description(locales: "en")
  startDate
  tba
  posterImage {
    blurhash
    original {
      url
    }
  }
}
    `;
export const WikiSubmissionFieldsFragmentDoc = gql`
    fragment wikiSubmissionFields on WikiSubmission {
  id
  title
  status
  data
}
    `;
export const CreateDraftMutationDocument = gql`
    mutation CreateDraftMutation($input: WikiSubmissionCreateDraftInput!) {
  wikiSubmission {
    createDraft(input: $input) {
      wikiSubmission {
        ...wikiSubmissionFields
      }
    }
  }
}
    ${WikiSubmissionFieldsFragmentDoc}`;
export type CreateDraftMutationMutationFn = Apollo.MutationFunction<CreateDraftMutationMutation, CreateDraftMutationMutationVariables>;

/**
 * __useCreateDraftMutationMutation__
 *
 * To run a mutation, you first call `useCreateDraftMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDraftMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDraftMutationMutation, { data, loading, error }] = useCreateDraftMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDraftMutationMutation(baseOptions?: Apollo.MutationHookOptions<CreateDraftMutationMutation, CreateDraftMutationMutationVariables>) {
        return Apollo.useMutation<CreateDraftMutationMutation, CreateDraftMutationMutationVariables>(CreateDraftMutationDocument, baseOptions);
      }
export type CreateDraftMutationMutationHookResult = ReturnType<typeof useCreateDraftMutationMutation>;
export type CreateDraftMutationMutationResult = Apollo.MutationResult<CreateDraftMutationMutation>;
export type CreateDraftMutationMutationOptions = Apollo.BaseMutationOptions<CreateDraftMutationMutation, CreateDraftMutationMutationVariables>;
export const SubmitDraftMutationDocument = gql`
    mutation SubmitDraftMutation($input: WikiSubmissionSubmitDraftInput!) {
  wikiSubmission {
    submitDraft(input: $input) {
      wikiSubmission {
        id
      }
    }
  }
}
    `;
export type SubmitDraftMutationMutationFn = Apollo.MutationFunction<SubmitDraftMutationMutation, SubmitDraftMutationMutationVariables>;

/**
 * __useSubmitDraftMutationMutation__
 *
 * To run a mutation, you first call `useSubmitDraftMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitDraftMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitDraftMutationMutation, { data, loading, error }] = useSubmitDraftMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitDraftMutationMutation(baseOptions?: Apollo.MutationHookOptions<SubmitDraftMutationMutation, SubmitDraftMutationMutationVariables>) {
        return Apollo.useMutation<SubmitDraftMutationMutation, SubmitDraftMutationMutationVariables>(SubmitDraftMutationDocument, baseOptions);
      }
export type SubmitDraftMutationMutationHookResult = ReturnType<typeof useSubmitDraftMutationMutation>;
export type SubmitDraftMutationMutationResult = Apollo.MutationResult<SubmitDraftMutationMutation>;
export type SubmitDraftMutationMutationOptions = Apollo.BaseMutationOptions<SubmitDraftMutationMutation, SubmitDraftMutationMutationVariables>;
export const UpdateDraftMutationDocument = gql`
    mutation UpdateDraftMutation($input: WikiSubmissionUpdateDraftInput!) {
  wikiSubmission {
    updateDraft(input: $input) {
      wikiSubmission {
        data
      }
    }
  }
}
    `;
export type UpdateDraftMutationMutationFn = Apollo.MutationFunction<UpdateDraftMutationMutation, UpdateDraftMutationMutationVariables>;

/**
 * __useUpdateDraftMutationMutation__
 *
 * To run a mutation, you first call `useUpdateDraftMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDraftMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDraftMutationMutation, { data, loading, error }] = useUpdateDraftMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDraftMutationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDraftMutationMutation, UpdateDraftMutationMutationVariables>) {
        return Apollo.useMutation<UpdateDraftMutationMutation, UpdateDraftMutationMutationVariables>(UpdateDraftMutationDocument, baseOptions);
      }
export type UpdateDraftMutationMutationHookResult = ReturnType<typeof useUpdateDraftMutationMutation>;
export type UpdateDraftMutationMutationResult = Apollo.MutationResult<UpdateDraftMutationMutation>;
export type UpdateDraftMutationMutationOptions = Apollo.BaseMutationOptions<UpdateDraftMutationMutation, UpdateDraftMutationMutationVariables>;
export const FindAnimeByIdDocument = gql`
    query FindAnimeById($id: ID!) {
  findAnimeById(id: $id) {
    ...findAnimeFields
  }
}
    ${FindAnimeFieldsFragmentDoc}`;

/**
 * __useFindAnimeByIdQuery__
 *
 * To run a query within a React component, call `useFindAnimeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAnimeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAnimeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindAnimeByIdQuery(baseOptions: Apollo.QueryHookOptions<FindAnimeByIdQuery, FindAnimeByIdQueryVariables>) {
        return Apollo.useQuery<FindAnimeByIdQuery, FindAnimeByIdQueryVariables>(FindAnimeByIdDocument, baseOptions);
      }
export function useFindAnimeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAnimeByIdQuery, FindAnimeByIdQueryVariables>) {
          return Apollo.useLazyQuery<FindAnimeByIdQuery, FindAnimeByIdQueryVariables>(FindAnimeByIdDocument, baseOptions);
        }
export type FindAnimeByIdQueryHookResult = ReturnType<typeof useFindAnimeByIdQuery>;
export type FindAnimeByIdLazyQueryHookResult = ReturnType<typeof useFindAnimeByIdLazyQuery>;
export type FindAnimeByIdQueryResult = Apollo.QueryResult<FindAnimeByIdQuery, FindAnimeByIdQueryVariables>;
export const FindAnimeBySlugDocument = gql`
    query FindAnimeBySlug($slug: String!) {
  findAnimeBySlug(slug: $slug) {
    ...findAnimeFields
  }
}
    ${FindAnimeFieldsFragmentDoc}`;

/**
 * __useFindAnimeBySlugQuery__
 *
 * To run a query within a React component, call `useFindAnimeBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAnimeBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAnimeBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindAnimeBySlugQuery(baseOptions: Apollo.QueryHookOptions<FindAnimeBySlugQuery, FindAnimeBySlugQueryVariables>) {
        return Apollo.useQuery<FindAnimeBySlugQuery, FindAnimeBySlugQueryVariables>(FindAnimeBySlugDocument, baseOptions);
      }
export function useFindAnimeBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAnimeBySlugQuery, FindAnimeBySlugQueryVariables>) {
          return Apollo.useLazyQuery<FindAnimeBySlugQuery, FindAnimeBySlugQueryVariables>(FindAnimeBySlugDocument, baseOptions);
        }
export type FindAnimeBySlugQueryHookResult = ReturnType<typeof useFindAnimeBySlugQuery>;
export type FindAnimeBySlugLazyQueryHookResult = ReturnType<typeof useFindAnimeBySlugLazyQuery>;
export type FindAnimeBySlugQueryResult = Apollo.QueryResult<FindAnimeBySlugQuery, FindAnimeBySlugQueryVariables>;
export const FindMangaByIdDocument = gql`
    query FindMangaById($id: ID!) {
  findMangaById(id: $id) {
    ...findMediaFields
  }
}
    ${FindMediaFieldsFragmentDoc}`;

/**
 * __useFindMangaByIdQuery__
 *
 * To run a query within a React component, call `useFindMangaByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMangaByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMangaByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindMangaByIdQuery(baseOptions: Apollo.QueryHookOptions<FindMangaByIdQuery, FindMangaByIdQueryVariables>) {
        return Apollo.useQuery<FindMangaByIdQuery, FindMangaByIdQueryVariables>(FindMangaByIdDocument, baseOptions);
      }
export function useFindMangaByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMangaByIdQuery, FindMangaByIdQueryVariables>) {
          return Apollo.useLazyQuery<FindMangaByIdQuery, FindMangaByIdQueryVariables>(FindMangaByIdDocument, baseOptions);
        }
export type FindMangaByIdQueryHookResult = ReturnType<typeof useFindMangaByIdQuery>;
export type FindMangaByIdLazyQueryHookResult = ReturnType<typeof useFindMangaByIdLazyQuery>;
export type FindMangaByIdQueryResult = Apollo.QueryResult<FindMangaByIdQuery, FindMangaByIdQueryVariables>;
export const FindWikiSubmissionByIdDocument = gql`
    query FindWikiSubmissionById($id: ID!) {
  findWikiSubmissionById(id: $id) {
    ...wikiSubmissionFields
  }
}
    ${WikiSubmissionFieldsFragmentDoc}`;

/**
 * __useFindWikiSubmissionByIdQuery__
 *
 * To run a query within a React component, call `useFindWikiSubmissionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindWikiSubmissionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindWikiSubmissionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindWikiSubmissionByIdQuery(baseOptions: Apollo.QueryHookOptions<FindWikiSubmissionByIdQuery, FindWikiSubmissionByIdQueryVariables>) {
        return Apollo.useQuery<FindWikiSubmissionByIdQuery, FindWikiSubmissionByIdQueryVariables>(FindWikiSubmissionByIdDocument, baseOptions);
      }
export function useFindWikiSubmissionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindWikiSubmissionByIdQuery, FindWikiSubmissionByIdQueryVariables>) {
          return Apollo.useLazyQuery<FindWikiSubmissionByIdQuery, FindWikiSubmissionByIdQueryVariables>(FindWikiSubmissionByIdDocument, baseOptions);
        }
export type FindWikiSubmissionByIdQueryHookResult = ReturnType<typeof useFindWikiSubmissionByIdQuery>;
export type FindWikiSubmissionByIdLazyQueryHookResult = ReturnType<typeof useFindWikiSubmissionByIdLazyQuery>;
export type FindWikiSubmissionByIdQueryResult = Apollo.QueryResult<FindWikiSubmissionByIdQuery, FindWikiSubmissionByIdQueryVariables>;
export const SearchMediaByTitleDocument = gql`
    query SearchMediaByTitle($first: Int!, $title: String!, $media_type: MediaTypeEnum, $cursor: String) {
  searchMediaByTitle(
    first: $first
    title: $title
    mediaType: $media_type
    after: $cursor
  ) @connection(key: "search") {
    edges {
      node {
        ...mediaSearchFields
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${MediaSearchFieldsFragmentDoc}`;

/**
 * __useSearchMediaByTitleQuery__
 *
 * To run a query within a React component, call `useSearchMediaByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMediaByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMediaByTitleQuery({
 *   variables: {
 *      first: // value for 'first'
 *      title: // value for 'title'
 *      media_type: // value for 'media_type'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useSearchMediaByTitleQuery(baseOptions: Apollo.QueryHookOptions<SearchMediaByTitleQuery, SearchMediaByTitleQueryVariables>) {
        return Apollo.useQuery<SearchMediaByTitleQuery, SearchMediaByTitleQueryVariables>(SearchMediaByTitleDocument, baseOptions);
      }
export function useSearchMediaByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMediaByTitleQuery, SearchMediaByTitleQueryVariables>) {
          return Apollo.useLazyQuery<SearchMediaByTitleQuery, SearchMediaByTitleQueryVariables>(SearchMediaByTitleDocument, baseOptions);
        }
export type SearchMediaByTitleQueryHookResult = ReturnType<typeof useSearchMediaByTitleQuery>;
export type SearchMediaByTitleLazyQueryHookResult = ReturnType<typeof useSearchMediaByTitleLazyQuery>;
export type SearchMediaByTitleQueryResult = Apollo.QueryResult<SearchMediaByTitleQuery, SearchMediaByTitleQueryVariables>;
export const UserWikiSubmissionsDocument = gql`
    query UserWikiSubmissions($first: Int!, $statuses: [WikiSubmissionStatusEnum!]) {
  currentAccount {
    profile {
      wikiSubmissions(first: $first, statuses: $statuses) {
        nodes {
          ...wikiSubmissionFields
        }
      }
    }
  }
}
    ${WikiSubmissionFieldsFragmentDoc}`;

/**
 * __useUserWikiSubmissionsQuery__
 *
 * To run a query within a React component, call `useUserWikiSubmissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserWikiSubmissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserWikiSubmissionsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      statuses: // value for 'statuses'
 *   },
 * });
 */
export function useUserWikiSubmissionsQuery(baseOptions: Apollo.QueryHookOptions<UserWikiSubmissionsQuery, UserWikiSubmissionsQueryVariables>) {
        return Apollo.useQuery<UserWikiSubmissionsQuery, UserWikiSubmissionsQueryVariables>(UserWikiSubmissionsDocument, baseOptions);
      }
export function useUserWikiSubmissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserWikiSubmissionsQuery, UserWikiSubmissionsQueryVariables>) {
          return Apollo.useLazyQuery<UserWikiSubmissionsQuery, UserWikiSubmissionsQueryVariables>(UserWikiSubmissionsDocument, baseOptions);
        }
export type UserWikiSubmissionsQueryHookResult = ReturnType<typeof useUserWikiSubmissionsQuery>;
export type UserWikiSubmissionsLazyQueryHookResult = ReturnType<typeof useUserWikiSubmissionsLazyQuery>;
export type UserWikiSubmissionsQueryResult = Apollo.QueryResult<UserWikiSubmissionsQuery, UserWikiSubmissionsQueryVariables>;