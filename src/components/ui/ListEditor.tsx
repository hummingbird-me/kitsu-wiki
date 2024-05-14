import React, { ReactElement, useState } from 'react';
import { Maybe } from 'src/types/graphql';
import { ModelItemInterface } from 'src/types/itemTypes';

interface Props<T extends ModelItemInterface> {
  Component: React.ComponentType<T>;
  initialItems?: Maybe<ReadonlyArray<Maybe<T['record']>>>;
  cache: Array<T['cache']>;
  parentDispatch: T['parentDispatch'];
}

export default function ListEditor<T extends ModelItemInterface>({
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
        let currentCache = {} as ModelItemInterface['cache'];

        if (Array.isArray(cache)) {
          currentCache = cache[index];
        }

        return (
          <div>
            <button onClick={removeItem(index)}>Remove</button>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <Component
              key={index}
              record={item}
              cache={currentCache}
              parentDispatch={parentDispatch}
            />
          </div>
        );
      })}
    </div>
  );
}
