import React, { ReactElement, useReducer, useState } from 'react';
import { TitleState } from 'src/logic/reducer_state/titleState';
import { FindAnimeFieldsFragment, Maybe } from 'src/types/graphql';
import { MediaChange } from 'src/types/mediaChange';
import TextInput from '../ui/input/TextInput';
import TitlesInput from '../ui/input/TitlesInput';
import Sidebar from 'src/components/ui/Navigation/Styles/Sidebar';

interface ActionInterface {
  type: string;
  payload: any;
}

const reducer = (state: MediaChange, action: ActionInterface) => {
  const splitActions = action.type.split('.');

  switch (splitActions[0]) {
    case 'titles': {
      const fieldName = splitActions.slice(-1)[0];
      const titleState = new TitleState(state, fieldName, action.payload);

      return titleState.update();
    }
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
    console.log(update);
  };

  return (
    <>
      <Sidebar />
      <form onSubmit={handleSubmit}>
        {/* figure out how to make parentDispatch optional when readOnly is supplied  */}
        <TextInput readOnly fieldType='id' initialValue={original.id} parentDispatch={dispatch} />
        <TextInput fieldType='slug' initialValue={original.slug} parentDispatch={dispatch} />

        <TitlesInput key='titles' titles={original.titles} dispatch={dispatch} />

        {/* description (Map)*/}
        {/* ageRating (Enum) Do as select options */}

        <TextInput
          fieldType='age_rating_guide'
          initialValue={original.ageRatingGuide}
          parentDispatch={dispatch}
        />

        {/* sfw Boolean */}
        {/* startDate (Some date picker) */}
        {/* endDate (some date picker) */}
        {/* nextRelease (datetime picker) */}
        {/* status (enum) */}

        <TextInput fieldType='tba' initialValue={original.tba} parentDispatch={dispatch} />

        <input type='submit' value='Submit' />
      </form>
    </>
  );
}
