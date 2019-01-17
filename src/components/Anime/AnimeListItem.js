import React from 'react';
import ListItem from '../ui/list/ListItem';
import {
  Enum,
  Duration,
  DateString,
  DateTimeString,
  TruncatedString,
  LocalizedString,
  TitlesList,
  Image
} from '../ui/list/ListField';

const AnimeColumn = ({ item, column }) => {
  if (column === 'posterImage' && item.posterImage) {
    return <Image image={item.posterImage} view={'tiny'} />;
  }

  if (column === 'bannerImage' && item.bannerImage) {
    return <Image image={item.bannerImage} view={'tiny'} />;
  }

  if (column === 'slug' && item.slug) {
    return <TruncatedString value={item.slug} length={30} />;
  }

  if (column === 'titles' && item.titles) {
    return <TitlesList titles={item.titles} length={30} />;
  }

  if (column === 'synopsis' && item.synopsis) {
    return <LocalizedString values={item.synopsis} length={50} />;
  }

  if (column === 'sfw' && item.sfw) {
    return (
      <>{!item.sfw && <span className="badge badge-warning">NSFW</span>}</>
    );
  }

  if (column === 'ageRating' && item.ageRating) {
    return <Enum value={item.ageRating} />;
  }

  if (column === 'season' && item.season) {
    return <Enum value={item.season} />;
  }

  if (column === 'status' && item.status) {
    return <Enum value={item.status} />;
  }

  if (column === 'startDate' && item.startDate) {
    return <DateString value={item.startDate} />;
  }

  if (column === 'endDate' && item.endDate) {
    return <DateString value={item.endDate} />;
  }

  if (column === 'nextRelease' && item.nextRelease) {
    return <DateTimeString value={item.nextRelease} />;
  }

  if (column === 'episodeLength' && item.episodeLength) {
    return <Duration seconds={item.episodeLength} />;
  }

  if (column === 'totalLength' && item.totalLength) {
    return <Duration seconds={item.totalLength} />;
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
