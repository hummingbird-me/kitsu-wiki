import React, { ReactElement } from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import AnimeEdit from 'src/components/anime/AnimeEdit';
import { RouteSpinner } from '../../components/ui/Spinner';
import {
  FindAnimeByIdQuery,
  FindAnimeByIdQueryVariables,
} from './findAnimeById.types';

const FIND_ANIME_BY_ID = loader('./findAnimeById.graphql');

const Edit = ({ id }: { id: string }): ReactElement => {
  const findAnimeByIdVariables: FindAnimeByIdQueryVariables = { id: id };
  const { data, error, loading } = useQuery<FindAnimeByIdQuery>(
    FIND_ANIME_BY_ID,
    { variables: findAnimeByIdVariables }
  );

  if (loading) return <RouteSpinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mb-3">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <AnimeEdit anime={data?.findAnimeById} onSave={console.log} />
        </div>
      </div>
    </div>
  );
};

export default Edit;
