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

const EditId = ({ id }: { id: string }): ReactElement => {
  const findAnimeByIdVariables: FindAnimeByIdQueryVariables = { id: id };
  const { data, error, loading } = useQuery<FindAnimeByIdQuery>(
    FIND_ANIME_BY_ID,
    { variables: findAnimeByIdVariables }
  );

  if (loading) return <RouteSpinner />;
  if (error) return <div>Error: {error}</div>;

  return <AnimeEdit anime={data?.findAnimeById} onSave={console.log} />;
};

export default EditId;
