import React, { ReactElement, useReducer, useState } from 'react';
import { FindAnimeFieldsFragment, Maybe } from 'src/types/graphql';
import { MediaChange } from 'src/types/mediaChange';
import TextInput from '../ui/input/TextInput';
import TitlesInput from '../ui/input/TitlesInput';

const reducer = (state: MediaChange, action: any) => {
  switch (action.type) {
    case 'titles[canonical]':
      return {
        ...state,
        titles: {
          ...state.titles,
          canonical: action.payload,
        },
      };
    case 'titles[canonicalLocale]':
      return {
        ...state,
        titles: {
          ...state.titles,
          canonicalLocale: action.payload,
        },
      };
    default:
      return {
        ...state,
        [action.type.toLowerCase()]: action.payload,
      };
  }
};
interface AnimeInterface {
  anime: FindAnimeFieldsFragment;
}

export default function AnimeEdit({ anime }: AnimeInterface): ReactElement {
  const changes: MediaChange = {};
  const [original, _setData] = useState(anime);
  const [update, dispatch] = useReducer(reducer, changes);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(original);
    // does shallow merges only :sob:
    console.log({ ...original, ...update });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* figure out how to make parentDispatch optional when readOnly is supplied  */}
      <TextInput readOnly fieldType='id' initialValue={original.id} parentDispatch={dispatch} />

      <TextInput fieldType='slug' initialValue={original.slug} parentDispatch={dispatch} />
      <TitlesInput key='titles' titles={original.titles} dispatch={dispatch} />

      <input type='submit' value='Submit' />
    </form>
  );
}
