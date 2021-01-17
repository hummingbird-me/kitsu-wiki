import React, { ReactElement } from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import AnimeEdit from 'src/components/anime/AnimeEdit';
import { RouteSpinner } from '../../components/ui/Spinner';
import {
  FindAnimeBySlugQuery,
  FindAnimeBySlugQueryVariables,
} from './findAnimeBySlug.types';

const FIND_ANIME_BY_SLUG = loader('./findAnimeBySlug.graphql');

const EditSlug = ({ slug }: { slug: string }): ReactElement => {
  const findAnimeBySlug: FindAnimeBySlugQueryVariables = { slug: slug };
  const { data, error, loading } = useQuery<FindAnimeBySlugQuery>(
    FIND_ANIME_BY_SLUG,
    { variables: findAnimeBySlug }
  );

  if (loading) return <RouteSpinner />;
  if (error) return <div>Error: {error}</div>;

  return <AnimeEdit anime={data?.findAnimeBySlug} onSave={console.log} />;
};

export default EditSlug;
