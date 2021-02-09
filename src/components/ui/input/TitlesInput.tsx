import React, { ReactElement } from 'react';
import { AnimeTitlesFragment } from 'src/types/graphql';
import { TextInput, SetInput } from 'src/components/ui/input';

interface Props {
  titles: AnimeTitlesFragment;
  dispatch: React.Dispatch<any>;
}

export default function TitlesInput({
  titles: { canonical, canonicalLocale, alternatives = [], localized },
  dispatch,
}: Props): ReactElement {
  const formattedAlternatives = alternatives?.map((alt) => alt) ?? [];

  return (
    <div className='titles'>
      {/* <TextInput fieldType='titles.canonical' initialValue={canonical} parentDispatch={dispatch} /> */}

      <TextInput
        fieldType='titles.canonicalLocale'
        initialValue={canonicalLocale}
        parentDispatch={dispatch}
      />

      <SetInput
        fieldType='alternatives'
        label='Synonyms and Abbreviations'
        initialValue={formattedAlternatives}
        parentDispatch={dispatch}
      />
    </div>
  );
}
