import React, { useState } from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from 'react-apollo-hooks';
import { changePage } from '../../util/paginate';
import Pagination from '../../components/Pagination';
import ListControls from '../../components/ListControls';
import AnimeList from '../../components/Anime/AnimeList';

const GET_ANIME = gql`
  query Anime(
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) {
    anime(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      edges {
        node {
          __typename
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
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

const pageAmount = 20;

const List = ({ query }) => {
  const [columns, setColumns] = useState({
    posterImage: true,
    bannerImage: false,
    slug: true,
    canonical: true,
    titles: false,
    synopsis: false,
    sfw: true,
    ageRating: false,
    ageRatingGuide: false,
    season: false,
    status: true,
    startDate: true,
    endDate: true,
    nextRelease: false,
    episodeCount: false,
    episodeLength: false,
    totalLength: false,
    userCount: false,
    favoritesCount: false,
    averageRating: false
  });

  const variables = {};

  if (query.before) {
    variables.startCursor = query.before;
    variables.last = pageAmount;
  } else {
    if (query.after) {
      variables.endCursor = query.after;
    }
    variables.first = pageAmount;
  }

  const {
    data: { anime },
    error,
    loading,
    fetchMore
  } = useQuery(GET_ANIME, {
    variables,
    suspend: false
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <ListControls columns={columns} setColumns={setColumns} />
      <AnimeList
        anime={anime.edges}
        columns={Object.keys(columns).filter(key => columns[key])}
      />
      <Pagination
        onPrevPage={() =>
          changePage(fetchMore, pageAmount, 'anime', anime, 'prev')
        }
        onNextPage={() =>
          changePage(fetchMore, pageAmount, 'anime', anime, 'next')
        }
        pageInfo={anime.pageInfo}
      />
    </>
  );
};

export default List;
