import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from 'react-apollo-hooks';
import { changePage } from '../../util/paginate';
import Pagination from '../../components/Pagination';
import AnimeList from '../../components/Anime/AnimeList';

const GET_ANIME = gql`
  query Anime($startCursor: String, $endCursor: String) {
    anime(first: 20, before: $startCursor, after: $endCursor) {
      edges {
        node {
          __typename
          ageRating
          ageRatingGuide
          averageRating
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

const List = ({ query }) => {
  const {
    data: { anime },
    error,
    loading,
    fetchMore
  } = useQuery(GET_ANIME, {
    variables: {
      startCursor: query.before,
      endCursor: query.after
    },
    suspend: false
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <AnimeList anime={anime.edges} />
      <Pagination
        onPrevPage={() => changePage(fetchMore, 'prev', anime, 'anime')}
        onNextPage={() => changePage(fetchMore, 'next', anime, 'anime')}
        pageInfo={anime.pageInfo}
      />
    </>
  );
};

export default List;
