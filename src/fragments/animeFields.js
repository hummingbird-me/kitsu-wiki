import gql from 'graphql-tag.macro';

const animeFields = gql`
  fragment animeFields on AnimeConnection {
    nodes {
      ageRating
      ageRatingGuide
      averageRating
      bannerImage {
        views {
          name
          url
        }
      }
      endDate
      episodeCount
      episodeLength
      favoritesCount
      id
      nextRelease
      posterImage {
        views {
          name
          url
        }
      }
      season
      sfw
      slug
      startDate
      status
      synopsis {
        locale
        text
      }
      titles {
        canonical
      }
      totalLength
      userCount
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
`;

export default animeFields;
