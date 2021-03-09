import React, { ReactElement } from 'react';
import { AnimeTitlesFragment, Media } from 'src/types/graphql';
import { TextInput, SetInput } from 'src/components/ui/input';
import { nativeLocale } from 'src/util/native-locale';

interface Props {
  titles: AnimeTitlesFragment;
  locale?: Media['originalLocale'];
  dispatch: React.Dispatch<any>;
}

export default function TitlesInput({
  titles: { canonical, canonicalLocale, alternatives = [], localized },
  dispatch,
  locale,
}: Props): ReactElement {
  const formattedAlternatives = alternatives?.map((alt) => alt) ?? [];

  const nativeTitle = (
    title: AnimeTitlesFragment['localized'],
    locale: Media['originalLocale']
  ) => {
    if (locale) {
      return nativeLocale(locale.toLocaleLowerCase(), title);
    } else if (title.ja_jp || title.ko_kr || title.zh_cn || title.zh_hk || title.zh_tw) {
      return title.ja_jp ?? title.ko_kr ?? title.zh_cn ?? title.zh_hk ?? title.zh_tw;
    } else {
      return title.ja_jp;
    }
  };
  console.log(locale);

  return (
    <div className='titles'>
      {/* <TextInput fieldType='titles.canonical' initialValue={canonical} parentDispatch={dispatch} /> */}
      <TextInput fieldType='titles.locale' initialValue={locale} parentDispatch={dispatch} />

      <TextInput fieldType='titles.English' initialValue={localized.en} parentDispatch={dispatch} />
      <TextInput
        fieldTitle='Native'
        fieldType={nativeTitle(localized, locale).toString()}
        initialValue={nativeTitle(localized, locale)}
        parentDispatch={dispatch}
      />
      <TextInput
        fieldTitle='Romanized'
        fieldType='titles.romanised'
        initialValue={localized.en_jp}
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
