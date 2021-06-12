import { ReactElement } from 'react';
import { FindMediaCharacterFieldsFragment } from 'src/types/graphql';
import { MediaChange } from 'src/types/mediaChange';

interface CharacterInterface {
  record: FindMediaCharacterFieldsFragment;
  cache: MediaChange;
  dispatch: React.Dispatch<any>;
}

export default function MediaCharacterEdit({
  record,
  cache,
  dispatch,
}: CharacterInterface): ReactElement {
  return <div>{record.id}</div>;
}
