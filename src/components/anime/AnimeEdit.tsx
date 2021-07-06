import React, { ReactElement, useEffect, useState } from 'react';
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
import ListEditor from '../ui/ListEditor';
import MediaCharacterEdit from '../mediaCharacter/MediaCharacterEdit';
import { ReducerAction } from 'src/types/reducer';
import { MediaChange } from 'src/types/mediaChange';
import {
  AnimeChangeEditInterface,
  MediaCharacterChangeEditInterface,
} from 'src/types/listEditorTypes';

// interface AnimeInterface {
//   record: FindAnimeFieldsFragment;
//   // wikiSubmission: WikiSubmissionFieldsFragment;
//   cache: MediaChange;
//   dispatch: React.Dispatch<ReducerAction>;
// }

export default function AnimeEdit({
  record,
  // wikiSubmission,
  cache,
  dispatch,
}: AnimeChangeEditInterface): ReactElement {
  const [original] = useState(record);
  // const inputVariables = {
  //   variables: {
  //     input: {
  //       id: wikiSubmission.id,
  //       data: cache,
  //     },
  //   },
  // };

  // const [updateDraftMutation, { data, loading, error }] = useUpdateDraftMutationMutation(
  //   inputVariables
  // );
  // const [
  //   submitDraftMutation,
  //   { loading: submitLoading, error: submitError },
  // ] = useSubmitDraftMutationMutation(inputVariables);

  // useEffect(() => {
  //   updateDraftMutation();
  //   console.log('Draft Updated');
  //   console.log(cache);
  // }, [cache, updateDraftMutation]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // submitDraftMutation();
    console.log(cache);
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
              cache={cache.slug}
              initialValue={original.slug}
              parentDispatch={dispatch}
            />
          </>
        </EditGroup>

        <EditGroup title='Titles'>
          <>
            <TitlesInput
              key='titles'
              cache={cache.titles}
              titles={original.titles}
              parentDispatch={dispatch}
            />
          </>
        </EditGroup>

        <EditGroup title='Synopsis and Age Rating'>
          <>
            <TextAreaInput
              fieldType='description.en'
              label='Description'
              cache={cache.description}
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
              cache={cache.ageRatingGuide}
              initialValue={original.ageRatingGuide}
              parentDispatch={dispatch}
            />
          </>
        </EditGroup>

        <DateInput
          fieldType='startDate'
          cache={cache.startDate}
          initialValue={original.startDate}
          parentDispatch={dispatch}
        />

        <DateInput
          fieldType='endDate'
          cache={cache.endDate}
          initialValue={original.endDate}
          parentDispatch={dispatch}
        />

        <DateTimeInput
          fieldType='nextRelease'
          cache={cache.nextRelease}
          initialValue={original.nextRelease}
          parentDispatch={dispatch}
        />

        <EditGroup title='Release'>
          <>
            <SingleSelectInput<ReleaseStatusEnum>
              fieldType='release'
              cache={cache.status}
              initialValue={original.status}
              options={Object.values(ReleaseStatusEnum)}
              parentDispatch={dispatch}
            />

            <TextInput
              fieldType='tba'
              cache={cache.tba}
              initialValue={original.tba}
              parentDispatch={dispatch}
            />
          </>
        </EditGroup>

        <ListEditor<MediaCharacterChangeEditInterface>
          Component={MediaCharacterEdit}
          initialItems={original.characters.nodes}
          cache={cache.mediaCharacters}
          parentDispatch={dispatch}
        />

        <input type='submit' value='Submit' />
      </form>
    </>
  );
}
