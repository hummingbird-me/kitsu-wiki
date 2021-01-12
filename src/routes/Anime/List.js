import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from '@apollo/react-hooks';
import useParams from '../../util/params';
import useLocalStorage from '../../util/localStorage';
import Pagination from '../../components/ui/Pagination';
import { RouteSpinner } from '../../components/ui/Spinner';
import ListControls from '../../components/ui/list/ListControls';
import ResourceList from '../../components/ui/list/ResourceList';
import AnimeListItem from '../../components/Anime/AnimeListItem';
import animeFields from '../../fragments/animeFields';
import pageFields from '../../fragments/pageFields';

const GET_ANIME_FORWARD = gql`
  query Anime($pageAmount: Int, $endCursor: String) {
    anime(first: $pageAmount, after: $endCursor) @connection(key: "anime") {
      nodes {
        ...animeFields
      }
      pageInfo {
        ...pageFields
      }
    }
  }
  ${animeFields}
  ${pageFields}
`;

const GET_ANIME_BACKWARD = gql`
  query Anime($pageAmount: Int, $startCursor: String) {
    anime(last: $pageAmount, before: $startCursor) @connection(key: "anime") {
      nodes {
        ...animeFields
      }
      pageInfo {
        ...pageFields
      }
    }
  }
  ${animeFields}
  ${pageFields}
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
  const columnsArray = Object.keys(columns).filter(key => columns[key]);

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
      <ResourceList columns={columnsArray}>
        {anime.map(anime => (
          <AnimeListItem key={anime.id} item={anime} columns={columnsArray} />
        ))}
      </ResourceList>
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