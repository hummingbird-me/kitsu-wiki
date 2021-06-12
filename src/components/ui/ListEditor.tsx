import React, { ReactElement, useState } from 'react';
import { FindMediaCharacterFieldsFragment, Maybe } from 'src/types/graphql';
import { MediaChange } from 'src/types/mediaChange';
import MediaCharacterEdit from '../mediaCharacter/MediaCharacterEdit';

interface Props<T> {
  // Component: React.ComponentType<T>;
  // componentProps: T;
  initialItems?: Maybe<ReadonlyArray<Maybe<FindMediaCharacterFieldsFragment>>>;
  cache: MediaChange;
  parentDispatch: React.Dispatch<any>;
}
// interface Props<T> {
//   Component: React.ComponentType<T>;
//   componentProps: T;
//   initialItems?: Array<T>;
//   cache: MediaChange;
//   parentDispatch: React.Dispatch<any>;
// }

export default function ListEditor<T>({
  initialItems,
  cache,
  parentDispatch,
}: Props<T>): ReactElement {
  const mutableItems = (initialItems || []) as FindMediaCharacterFieldsFragment[];
  const [items, setItems] = useState(mutableItems);

  const addItem = () => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setItems([...items, items[0]]);
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
            <MediaCharacterEdit key={index} record={item} cache={cache} dispatch={parentDispatch} />
          </div>
        );
      })}
    </div>
  );
}
