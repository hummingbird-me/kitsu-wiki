import React, { ReactElement } from 'react';
import { AnimeTitlesFragment } from 'src/types/graphql';
import TextInput from './TextInput';

interface Props {
  titles: AnimeTitlesFragment;
  dispatch: React.Dispatch<any>;
}

export default function TitlesInput({
  titles: { canonical, canonicalLocale, alternatives, localized },
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
