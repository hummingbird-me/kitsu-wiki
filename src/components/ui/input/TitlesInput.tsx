import React, { ReactElement } from 'react';
import { TitlesListInput } from 'src/types/graphql';
import TextInput from './TextInput';

// interface Props extends TitlesListInput {
//   dispatch: React.Dispatch<any>;
// }

interface Props {
  titles: TitlesListInput;
  dispatch: React.Dispatch<any>;
}

export default function TitlesInput({
  titles: { canonical, canonicalLocale },
  dispatch,
}: Props): ReactElement {
  return (
    <div className='titles'>
      {/* <TextInput fieldType='titles.canonical' initialValue={canonical} parentDispatch={dispatch} /> */}

      <TextInput
        fieldType='titles.canonicalLocale'
        initialValue={canonicalLocale}
        parentDispatch={dispatch}
      />
    </div>
  );
}
