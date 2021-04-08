import React, { ReactElement, useReducer, useState } from 'react';
import { AgeRatingEnum, FindAnimeFieldsFragment, ReleaseStatusEnum } from 'src/types/graphql';
import { MediaChange } from 'src/types/mediaChange';
import Sidebar from '../ui/navigation';
import SingleSelectInput from '../ui/input/SingleSelectInput';
import EditGroup from '../media/EditGroup';
import {
  TextInput,
  TitlesInput,
  DateInput,
  DateTimeInput,
  TextAreaInput,
} from 'src/components/ui/input';
import animeReducer from './animeReducer';
import { findLocalStorageRecord } from 'src/util/localStorage';

interface AnimeInterface {
  anime: FindAnimeFieldsFragment;
}

export default function AnimeEdit({ anime }: AnimeInterface): ReactElement {
  const changes: MediaChange = { id: anime.id, type: anime.__typename };
  const [original] = useState(anime);
  const [update, dispatch] = useReducer(animeReducer, changes, (initial) =>
    findLocalStorageRecord<MediaChange>(`${anime.__typename}-${anime.id}`, initial)
  );

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

        <EditGroup title='Synopsis and Age Rating'>
          <>
            <TextAreaInput
              fieldType='description.en'
              label='Description'
              initialValue={original.description['en']}
              parentDispatch={dispatch}
            />

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

        <DateInput
          fieldType='startDate'
          initialValue={original.startDate}
          parentDispatch={dispatch}
        />

        <DateInput fieldType='endDate' initialValue={original.endDate} parentDispatch={dispatch} />
        <DateTimeInput
          fieldType='nextRelease'
          initialValue={original.nextRelease}
          parentDispatch={dispatch}
        />

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
