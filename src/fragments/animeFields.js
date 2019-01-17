import gql from 'graphql-tag.macro';

const animeFields = gql`
  fragment animeFields on AnimeConnection {
    nodes {
      ageRating
      ageRatingGuide
      averageRating
      bannerImage {
        original {
          url
        }
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
        original {
          url
        }
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
      synopsis
      titles {
        canonical
        alternatives
        localized
      }
      totalLength
      userCount
      characters(first: 5) {
        nodes {
          character {
            id
            slug
            image {
              original {
                url
              }
              views {
                name
                url
              }
            }
          }
        }
      }
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
