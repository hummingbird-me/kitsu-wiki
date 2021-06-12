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
import ListEditor from '../ui/ListEditor';
import MediaCharacterEdit from '../mediaCharacter/MediaCharacterEdit';

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
            <TextInput
              fieldType='slug'
              cache={update.slug}
              initialValue={original.slug}
              parentDispatch={dispatch}
            />
          </>
        </EditGroup>

        <EditGroup title='Titles'>
          <>
            <TitlesInput
              key='titles'
              cache={update.titles}
              titles={original.titles}
              dispatch={dispatch}
            />
          </>
        </EditGroup>

        <EditGroup title='Synopsis and Age Rating'>
          <>
            <TextAreaInput
              fieldType='description.en'
              label='Description'
              cache={update.description}
              initialValue={original.description.en}
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
              cache={update.ageRatingGuide}
              initialValue={original.ageRatingGuide}
              parentDispatch={dispatch}
            />
          </>
        </EditGroup>

        <DateInput
          fieldType='startDate'
          cache={update.startDate}
          initialValue={original.startDate}
          parentDispatch={dispatch}
        />

        <DateInput
          fieldType='endDate'
          cache={update.endDate}
          initialValue={original.endDate}
          parentDispatch={dispatch}
        />

        <DateTimeInput
          fieldType='nextRelease'
          cache={update.nextRelease}
          initialValue={original.nextRelease}
          parentDispatch={dispatch}
        />

        <EditGroup title='Release'>
          <>
            <SingleSelectInput<ReleaseStatusEnum>
              fieldType='release'
              cache={update.status}
              initialValue={original.status}
              options={Object.values(ReleaseStatusEnum)}
              parentDispatch={dispatch}
            />

            <TextInput
              fieldType='tba'
              cache={update.tba}
              initialValue={original.tba}
              parentDispatch={dispatch}
            />
          </>
        </EditGroup>

        <ListEditor
          initialItems={original.characters.nodes}
          cache={update}
          parentDispatch={dispatch}
        />

        <input type='submit' value='Submit' />
      </form>
    </>
  );
}
