import { ReactElement, useState } from 'react';
import { AgeRatingEnum, ReleaseStatusEnum } from 'src/types/graphql';
import { AnimeItemInterface, MediaCharacterItemInterface } from 'src/types/itemTypes';
import EditGroup from '../media/EditGroup';
import MediaCharacterItem from '../mediaCharacter/MediaCharacterEdit';
import {
  DateInput,
  DateTimeInput,
  SingleSelectInput,
  TextAreaInput,
  TextInput,
  TitlesInput,
} from '../ui/input';
import ListEditor from '../ui/ListEditor';

export default function AnimeItem({
  record,
  cache,
  parentDispatch,
}: AnimeItemInterface): ReactElement {
  const [original] = useState(record);

  return (
    <>
      <EditGroup title='Mods Only'>
        <>
          {/* figure out how to make parentDispatch optional when readOnly is supplied  */}
          <TextInput
            readOnly
            fieldType='id'
            initialValue={original.id}
            parentDispatch={parentDispatch}
          />
          <TextInput
            fieldType='slug'
            cache={cache.slug}
            initialValue={original.slug}
            parentDispatch={parentDispatch}
          />
        </>
      </EditGroup>

      <EditGroup title='Titles'>
        <>
          <TitlesInput
            key='titles'
            cache={cache.titles}
            titles={original.titles}
            parentDispatch={parentDispatch}
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
            parentDispatch={parentDispatch}
          />

          {/* NOTE: there is some bug with lists here when changing will cause error. */}
          <SingleSelectInput<AgeRatingEnum>
            fieldType='ageRating'
            initialValue={original.ageRating}
            options={Object.values(AgeRatingEnum)}
            parentDispatch={parentDispatch}
          />

          <TextInput
            fieldType='ageRatingGuide'
            cache={cache.ageRatingGuide}
            initialValue={original.ageRatingGuide}
            parentDispatch={parentDispatch}
          />
        </>
      </EditGroup>

      <DateInput
        fieldType='startDate'
        cache={cache.startDate}
        initialValue={original.startDate}
        parentDispatch={parentDispatch}
      />

      <DateInput
        fieldType='endDate'
        cache={cache.endDate}
        initialValue={original.endDate}
        parentDispatch={parentDispatch}
      />

      <DateTimeInput
        fieldType='nextRelease'
        cache={cache.nextRelease}
        initialValue={original.nextRelease}
        parentDispatch={parentDispatch}
      />

      <EditGroup title='Release'>
        <>
          <SingleSelectInput<ReleaseStatusEnum>
            fieldType='release'
            cache={cache.status}
            initialValue={original.status}
            options={Object.values(ReleaseStatusEnum)}
            parentDispatch={parentDispatch}
          />

          <TextInput
            fieldType='tba'
            cache={cache.tba}
            initialValue={original.tba}
            parentDispatch={parentDispatch}
          />
        </>
      </EditGroup>

      <ListEditor<MediaCharacterItemInterface>
        Component={MediaCharacterItem}
        initialItems={original.characters.nodes}
        cache={cache.mediaCharacters}
        parentDispatch={parentDispatch}
      />
    </>
  );
}
