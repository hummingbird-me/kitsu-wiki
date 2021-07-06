import React, { ReactElement, useState } from 'react';
import { Maybe } from 'src/types/graphql';
import { ModelEditUnion } from 'src/types/listEditorTypes';

interface Props<T extends ModelEditUnion> {
  Component: React.ComponentType<T>;
  initialItems?: Maybe<ReadonlyArray<Maybe<T['record']>>>;
  cache: Array<T['cache']>;
  parentDispatch: T['dispatch'];
}

export default function ListEditor<T extends ModelEditUnion>({
  Component,
  initialItems,
  cache,
  parentDispatch,
}: Props<T>): ReactElement {
  const mutableItems = (initialItems || []) as T['record'][];
  const [items, setItems] = useState(mutableItems);

  const addItem = () => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const newItem = {} as T['record'];
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
