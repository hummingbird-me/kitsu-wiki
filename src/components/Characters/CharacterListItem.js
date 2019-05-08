import React from 'react';
import ListItem from '../ui/list/ListItem';
import { TruncatedString, TitlesList, Image } from '../ui/list/ListField';

const CharacterColumn = ({ item, column }) => {
  if (column === 'slug' && item.slug) {
    return <TruncatedString value={item.slug} length={20} />;
  }

  if (column === 'names' && item.names) {
    return <TitlesList titles={item.names} length={20} />;
  }

  if (column === 'image' && item.image) {
    return <Image image={item.image} view="original" />;
  }

  return <>{item[column]}</>;
};

const CharacterListItem = ({
  item,
  columns,
  inlineEdit,
  added,
  removed,
  edited,
  onEdit,
  onRemove
}) => (
  <ListItem
    item={item}
    columns={columns.map(column => (
      <CharacterColumn item={item} column={column} />
    ))}
    inlineEdit={inlineEdit}
    added={added}
    removed={removed}
    edited={edited}
    onEdit={onEdit}
    onRemove={onRemove}
  />
);

export default CharacterListItem;
