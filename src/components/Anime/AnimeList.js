import React from 'react';
import ResourceList from '../ResourceList';
import AnimeListItem from './AnimeListItem';

const AnimeList = ({
  anime,
  columns = [
    'posterImage',
    'canonical',
    'slug',
    'sfw',
    'status',
    'startDate',
    'endDate'
  ]
}) => (
  <ResourceList columns={columns}>
    {anime.map(({ node: anime }) => (
      <AnimeListItem key={anime.id} item={anime} columns={columns} />
    ))}
  </ResourceList>
);

export default AnimeList;
