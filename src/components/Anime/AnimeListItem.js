import React from 'react';
import ListItem from '../ListItem';

const AnimeColumn = ({ item, column }) => {
  if (column === 'posterImage') {
    return (
      <img
        src={item.posterImage.views.find(({ name }) => name === 'tiny').url}
        alt="poster"
        height={40}
      />
    );
  }

  if (column === 'sfw') {
    return (
      <>{!item.sfw && <span className="badge badge-warning">NSFW</span>}</>
    );
  }

  if (column === 'canonical') {
    return <>{item.titles.canonical}</>;
  }

  return <>{item[column]}</>;
};

const AnimeListItem = ({ item, columns }) => (
  <ListItem
    item={item}
    columns={columns.map(column => (
      <AnimeColumn item={item} column={column} />
    ))}
  />
);

export default AnimeListItem;
