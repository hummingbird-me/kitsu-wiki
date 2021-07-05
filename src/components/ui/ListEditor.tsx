import React, { ReactElement, useState } from 'react';
import { Maybe } from 'src/types/graphql';
import { ModelEditUnion } from 'src/types/listEditorTypes';

interface Props {
  Component: React.ComponentType<ModelEditUnion>;
  initialItems?: Maybe<ReadonlyArray<Maybe<ModelEditUnion['record']>>>;
  cache: Array<ModelEditUnion['cache']>;
  parentDispatch: ModelEditUnion['dispatch'];
}

export default function ListEditor({
  Component,
  initialItems,
  cache,
  parentDispatch,
}: Props): ReactElement {
  const mutableItems = (initialItems || []) as ModelEditUnion['record'][];
  const [items, setItems] = useState(mutableItems);

  const addItem = () => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const newItem = {} as ModelEditUnion['record'];
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
        let currentCache = {} as ModelEditUnion['cache'];

        if (Array.isArray(cache)) {
          currentCache = cache[index];
        }

        return (
          <div>
            <button onClick={removeItem(index)}>Remove</button>
            <Component key={index} record={item} cache={currentCache} dispatch={parentDispatch} />
          </div>
        );
      })}
    </div>
  );
}
