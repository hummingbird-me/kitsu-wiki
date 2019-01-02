import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from 'react-apollo-hooks';
import useParams from '../../util/params';
import useLocalStorage from '../../util/localStorage';
import { changePage } from '../../util/paginate';
import Pagination from '../../components/Pagination';
import ListControls from '../../components/ListControls';
import AnimeList from '../../components/Anime/AnimeList';

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

const GET_ANIME = gql`
  query Anime(
    $pageAmount: Int
    $startCursor: String
    $endCursor: String
    $forward: Boolean!
  ) {
    anime(first: $pageAmount, after: $endCursor) @include(if: $forward) {
      ...animeFields
    }
    anime(last: $pageAmount, before: $startCursor) @skip(if: $forward) {
      ...animeFields
    }
  }
  ${animeFields}
`;

const enabledColumns = {
  posterImage: true,
  bannerImage: false,
  slug: true,
  titles: false,
  synopsis: false,
  sfw: true,
  ageRating: false,
  ageRatingGuide: false,
  season: true,
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
};

const List = ({ query }) => {
  const [columns, setColumns] = useLocalStorage('animeColumns', enabledColumns);

  const { before, after } = query;
  const variables = { pageAmount: 20 };

  if (before) {
    variables.startCursor = before;
    variables.forward = false;
  } else {
    if (after) {
      variables.endCursor = after;
    }
    variables.forward = true;
  }

  const [, setParams] = useParams({ before, after });

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
    <div className="container-fluid">
      <ListControls type="anime" columns={columns} setColumns={setColumns} />
      <AnimeList
        anime={anime.nodes}
        columns={Object.keys(columns).filter(key => columns[key])}
      />
      <Pagination
        onPrevPage={() =>
          changePage(fetchMore, 'anime', anime, 'prev', setParams)
        }
        onNextPage={() =>
          changePage(fetchMore, 'anime', anime, 'next', setParams)
        }
        pageInfo={anime.pageInfo}
      />
    </div>
  );
};

export default List;
