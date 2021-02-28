import React, { ReactElement } from 'react';
import { AnimeTitlesFragment } from 'src/types/graphql';
import { TextInput, SetInput } from 'src/components/ui/input';

interface Props {
  titles: AnimeTitlesFragment;
  locale?: string;
  dispatch: React.Dispatch<any>;
}

export default function TitlesInput({
  titles: { canonical, canonicalLocale, alternatives = [], localized },
  dispatch,
}: Props): ReactElement {
  const formattedAlternatives = alternatives?.map((alt) => alt) ?? [];

  const nativeTitle = (title: any) => {
    if (title.ja_jp || title.ko_kr || title.zh_cn || title.zh_hk || title.zh_tw) {
      return title.ja_jp ?? title.ko_kr ?? title.zh_cn ?? title.zh_hk ?? title.zh_tw;
    } else {
      return title.ja_jp;
    }
  };

  return (
    <div className='titles'>
      {/* <TextInput fieldType='titles.canonical' initialValue={canonical} parentDispatch={dispatch} /> */}

      <TextInput fieldType='titles.English' initialValue={localized.en} parentDispatch={dispatch} />
      <TextInput
        fieldTitle='Native'
        fieldType={nativeTitle(localized).toString()}
        initialValue={nativeTitle(localized)}
        parentDispatch={dispatch}
      />
      <TextInput
        fieldTitle='Romanized'
        fieldType='titles.romanised'
        initialValue={localized.en_jp}
        parentDispatch={dispatch}
      />
      <TextInput
        fieldType='titles.canonicalLocale'
        initialValue={canonicalLocale}
        parentDispatch={dispatch}
      />

      <SetInput
        fieldType='titles.alternatives'
        label='Synonyms and Abbreviations'
        initialValue={formattedAlternatives}
        parentDispatch={dispatch}
      />
    </div>
  );
}
