import React, { ReactElement, useReducer, useState } from 'react';
import { TitleState } from 'src/logic/reducer_state/titleState';
import { AgeRatingEnum, FindAnimeFieldsFragment, ReleaseStatusEnum } from 'src/types/graphql';
import { MediaChange } from 'src/types/mediaChange';
import TextInput from '../ui/input/TextInput';
import TitlesInput from '../ui/input/TitlesInput';
import Sidebar from '../ui/Navigation';
import SingleSelectInput from '../ui/input/SingleSelectInput';
import EditGroup from '../Media/EditGroup';

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
        [action.type]: action.payload,
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
        <EditGroup title='Mods Only'>
          <>
            {/* figure out how to make parentDispatch optional when readOnly is supplied  */}
            <TextInput
              readOnly
              fieldType='id'
              initialValue={original.id}
              parentDispatch={dispatch}
            />
            <TextInput fieldType='slug' initialValue={original.slug} parentDispatch={dispatch} />
          </>
        </EditGroup>

        <EditGroup title='Titles'>
          <>
            <TitlesInput key='titles' titles={original.titles} dispatch={dispatch} />
          </>
        </EditGroup>
        {/* description (en)*/}

        <EditGroup title='Age Rating'>
          <>
            <SingleSelectInput<AgeRatingEnum>
              fieldType='ageRating'
              initialValue={original.ageRating}
              options={Object.values(AgeRatingEnum)}
              parentDispatch={dispatch}
            />

            <TextInput
              fieldType='ageRatingGuide'
              initialValue={original.ageRatingGuide}
              parentDispatch={dispatch}
            />
          </>
        </EditGroup>

        {/* startDate (Some date picker) */}
        {/* endDate (some date picker) */}
        {/* nextRelease (datetime picker) */}

        <EditGroup title='Release'>
          <>
            <SingleSelectInput<ReleaseStatusEnum>
              fieldType='release'
              initialValue={original.status}
              options={Object.values(ReleaseStatusEnum)}
              parentDispatch={dispatch}
            />

            <TextInput fieldType='tba' initialValue={original.tba} parentDispatch={dispatch} />
          </>
        </EditGroup>

        <input type='submit' value='Submit' />
      </form>
    </>
  );
}
