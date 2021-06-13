import React, { ReactElement, useState } from 'react';
import { FindMediaCharacterFieldsFragment, Maybe } from 'src/types/graphql';
import { MediaChange, ModelEditInterface, ModelFragmentTypes } from 'src/types/mediaChange';

interface Props {
  Component: React.ComponentType<ModelEditInterface>;
  initialItems?: Maybe<ReadonlyArray<Maybe<ModelFragmentTypes>>>;
  cache: MediaChange;
  parentDispatch: React.Dispatch<any>;
}

export default function ListEditor({
  Component,
  initialItems,
  cache,
  parentDispatch,
}: Props): ReactElement {
  const mutableItems = (initialItems || []) as ModelFragmentTypes[];
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
