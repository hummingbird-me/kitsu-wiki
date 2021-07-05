import React, { ReactElement } from 'react';
import { AnimeTitlesFragment } from 'src/types/graphql';
import { TextInput, SetInput } from 'src/components/ui/input';
import { AltTitles } from './styles';
import { TitlesChange } from 'src/types/mediaChange';

interface Props {
  titles: AnimeTitlesFragment;
  cache?: TitlesChange;
  parentDispatch: React.Dispatch<any>;
}

export default function TitlesInput({
  titles: { canonical, canonicalLocale, alternatives = [], localized },
  cache,
  parentDispatch,
}: Props): ReactElement {
  const formattedAlternatives = alternatives?.map((alt) => alt) ?? [];

  return (
    <div className='titles'>
      {/* <TextInput fieldType='titles.canonical' initialValue={canonical} parentDispatch={dispatch} /> */}

      <AltTitles>
        <TextInput
          fieldType='titles.canonicalLocale'
          initialValue={canonicalLocale}
          parentDispatch={parentDispatch}
        />
        <TextInput
          fieldType='titles.canonicalLocale'
          initialValue={canonicalLocale}
          parentDispatch={parentDispatch}
        />
        <TextInput
          fieldType='titles.canonicalLocale'
          initialValue={canonicalLocale}
          parentDispatch={parentDispatch}
        />
        <TextInput
          fieldType='titles.canonicalLocale'
          initialValue={canonicalLocale}
          parentDispatch={parentDispatch}
        />
      </AltTitles>

      <SetInput
        fieldType='titles.alternatives'
        label='Synonyms and Abbreviations'
        cache={cache?.alternatives}
        initialValue={formattedAlternatives}
        parentDispatch={parentDispatch}
      />
    </div>
  );
}
