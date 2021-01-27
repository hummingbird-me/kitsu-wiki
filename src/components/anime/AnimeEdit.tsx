import React, { ReactElement, useReducer, useState } from 'react';
import { FindAnimeFieldsFragment } from '../../routes/Anime/findAnimeById.types';
import { Maybe } from 'src/types/graphql';
import { MediaChange } from 'src/types/mediaChange';
import TextInput from '../ui/input/TextInput';

const reducer = (state: MediaChange, action: any) => {
  switch (action.type) {
    default:
      return {
        ...state,
        [action.type.toLowerCase()]: action.payload,
      };
  }
};

export default function AnimeEdit({
  anime,
}: {
  anime: Maybe<FindAnimeFieldsFragment | undefined>;
}): ReactElement {
  const changes: MediaChange = {};
  const [original, _setData] = useState(anime);
  const [update, dispatch] = useReducer(reducer, changes);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(original);
    console.log({ ...original, ...update });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* figure out how to make parentDispatch optional when readOnly is supplied  */}
      <TextInput readOnly fieldType='id' initialValue={original?.id} parentDispatch={dispatch} />

      <TextInput fieldType='slug' initialValue={original?.slug} parentDispatch={dispatch} />

      <input type='submit' value='Submit' />
    </form>
  );
}
