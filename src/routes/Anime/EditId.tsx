import React, { ReactElement } from 'react';
import AnimeEdit from 'src/components/anime/AnimeEdit';
import { RouteSpinner } from '../../components/ui/Spinner';

// GraphQL
import { useFindAnimeByIdQuery, FindAnimeByIdQueryVariables } from 'src/types/graphql';

const EditId = ({ id }: { id: string }): ReactElement => {
  const findAnimeByIdVariables: FindAnimeByIdQueryVariables = { id: id };
  const { data, error, loading } = useFindAnimeByIdQuery({
    variables: findAnimeByIdVariables,
  });

  if (loading) return <RouteSpinner />;
  if (!data || !data.findAnimeById || error) return <div>Error: {error}</div>;

  return <AnimeEdit anime={data.findAnimeById} />;
};

export default EditId;
