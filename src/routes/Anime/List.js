import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from 'react-apollo-hooks';
import useParams from '../../util/params';
import useLocalStorage from '../../util/localStorage';
import Pagination from '../../components/Pagination';
import ListControls from '../../components/ListControls';
import AnimeList from '../../components/Anime/AnimeList';
import { RouteSpinner } from '../../components/Spinner';
import animeFields from '../../fragments/animeFields';

const GET_ANIME_FORWARD = gql`
  query Anime($pageAmount: Int, $endCursor: String) {
    anime(first: $pageAmount, after: $endCursor) @connection(key: "anime") {
      ...animeFields
    }
  }
  ${animeFields}
`;

const GET_ANIME_BACKWARD = gql`
  query Anime($pageAmount: Int, $startCursor: String) {
    anime(last: $pageAmount, before: $startCursor) @connection(key: "anime") {
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
  const [, setParams] = useParams(query);

  const pageAmount = 20;
  const variables = { pageAmount };

  if (before) {
    variables.startCursor = before;
  } else {
    if (after) {
      variables.endCursor = after;
    }
  }

  const { data, error, loading, fetchMore } = useQuery(GET_ANIME_FORWARD, {
    variables,
    suspend: false
  });

  if (loading) return <RouteSpinner />;
  if (error) return <div>Error: {error}</div>;

  const {
    anime: { nodes: anime, pageInfo }
  } = data;

  return (
    <div className="container-fluid">
      <ListControls type="anime" columns={columns} setColumns={setColumns} />
      <AnimeList
        anime={anime}
        columns={Object.keys(columns).filter(key => columns[key])}
      />
      <Pagination
        fetchMore={fetchMore}
        queryKey="anime"
        pageAmount={pageAmount}
        pageInfo={pageInfo}
        forwardQuery={GET_ANIME_FORWARD}
        backwardQuery={GET_ANIME_BACKWARD}
        setParams={setParams}
      />
    </div>
  );
};

export default List;
