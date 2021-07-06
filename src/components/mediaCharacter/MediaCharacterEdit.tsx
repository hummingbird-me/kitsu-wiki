import React, { ReactElement } from 'react';
import { CharacterRoleEnum, FindMediaCharacterFieldsFragment } from 'src/types/graphql';
import { MediaCharacterChangeEditInterface } from 'src/types/listEditorTypes';
import { MediaCharacterChange } from 'src/types/mediaChange';
import { ReducerAction } from 'src/types/reducer';
import { SingleSelectInput, TextInput } from '../ui/input';

export default function MediaCharacterEdit({
  record,
  cache,
  dispatch,
}: MediaCharacterChangeEditInterface): ReactElement {
  return (
    <>
      <TextInput readOnly fieldType='id' initialValue={record.id} parentDispatch={dispatch} />
      <SingleSelectInput<CharacterRoleEnum>
        fieldType='role'
        initialValue={record.role}
        options={Object.values(CharacterRoleEnum)}
        cache={cache.role}
        parentDispatch={dispatch}
      />
    </>
  );
}
