import React from 'react';
import ResourceList from '../ResourceList';
import AnimeListItem from './AnimeListItem';

const AnimeList = ({ anime, columns = ['posterImage', 'slug'] }) => (
  <ResourceList columns={columns}>
    {anime.map(anime => (
      <AnimeListItem key={anime.id} item={anime} columns={columns} />
    ))}
  </ResourceList>
);

export default AnimeList;
