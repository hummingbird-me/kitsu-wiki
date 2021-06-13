import React, { Component, ReactElement, useState } from 'react';
import { FindMediaCharacterFieldsFragment, Maybe } from 'src/types/graphql';
import { MediaChange } from 'src/types/mediaChange';
import MediaCharacterEdit from '../mediaCharacter/MediaCharacterEdit';

let components: typeof MediaCharacterEdit;
let fragments: FindMediaCharacterFieldsFragment;

interface Props {
  Component: React.ComponentType<any>;
  initialItems?: Maybe<ReadonlyArray<Maybe<FindMediaCharacterFieldsFragment>>>;
  cache: MediaChange;
  parentDispatch: React.Dispatch<any>;
}

export default function ListEditor({
  Component,
  initialItems,
  cache,
  parentDispatch,
}: Props): ReactElement {
  const mutableItems = (initialItems || []) as FindMediaCharacterFieldsFragment[];
  const [items, setItems] = useState(mutableItems);

  const addItem = () => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const newItem = {} as FindMediaCharacterFieldsFragment;
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const newItemList = items.filter((_, item_index) => item_index !== index);
    setItems(newItemList);
  };

  return (
    <div className='list'>
      <button onClick={addItem()}>Add</button>
      {items.map((item, index) => {
        return (
          <div>
            <button onClick={removeItem(index)}>Remove</button>
            <Component key={index} record={item} cache={cache} dispatch={parentDispatch} />
          </div>
        );
      })}
    </div>
  );
}
