import React, { ReactElement, useEffect, useReducer, useState } from 'react';
import {
  AgeRatingEnum,
  FindAnimeFieldsFragment,
  ReleaseStatusEnum,
  useUpdateDraftMutationMutation,
  useSubmitDraftMutationMutation,
  WikiSubmissionFieldsFragment,
} from 'src/types/graphql';
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

interface AnimeInterface {
  record: FindAnimeFieldsFragment;
  wikiSubmission: WikiSubmissionFieldsFragment;
}

export default function AnimeEdit({ record, wikiSubmission }: AnimeInterface): ReactElement {
  const [original] = useState(record);
  const [update, dispatch] = useReducer(animeReducer, wikiSubmission.data);
  const inputVariables = {
    variables: {
      input: {
        id: wikiSubmission.id,
        data: update,
      },
    },
  };
  const [updateDraftMutation, { data, loading, error }] = useUpdateDraftMutationMutation(
    inputVariables
  );
  const [
    submitDraftMutation,
    { loading: submitLoading, error: submitError },
  ] = useSubmitDraftMutationMutation(inputVariables);

  useEffect(() => {
    updateDraftMutation();
  }, [update, updateDraftMutation]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    submitDraftMutation();
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
