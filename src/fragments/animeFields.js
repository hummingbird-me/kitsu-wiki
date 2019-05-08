import gql from 'graphql-tag.macro';

const animeFields = gql`
  fragment animeFields on Anime {
    id
    slug
    titles {
      localized
      canonical
      # alternatives
    }
    synopsis
    posterImage {
      original {
        url
      }
      views {
        name
        url
      }
    }
    bannerImage {
      original {
        url
      }
      views {
        name
        url
      }
    }
    sfw
    ageRating
    ageRatingGuide
    season
    status
    startDate
    endDate
    nextRelease
    episodeCount
    episodeLength
    totalLength
    userCount
    favoritesCount
    averageRating
  }
`;

export default animeFields;
