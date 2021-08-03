import { ReactElement } from 'react';
import { CharacterRoleEnum } from 'src/types/graphql';
import { MediaCharacterItemInterface } from 'src/types/itemTypes';
import { SingleSelectInput, TextInput } from '../ui/input';

export default function MediaCharacterItem({
  record,
  cache,
  parentDispatch,
}: MediaCharacterItemInterface): ReactElement {
  return (
    <>
      <TextInput readOnly fieldType='id' initialValue={record.id} parentDispatch={parentDispatch} />
      <SingleSelectInput<CharacterRoleEnum>
        fieldType='role'
        initialValue={record.role}
        options={Object.values(CharacterRoleEnum)}
        cache={cache.role}
        parentDispatch={parentDispatch}
      />
    </>
  );
}
