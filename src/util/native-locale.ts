import { AnimeTitlesFragment } from 'src/types/graphql';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const nativeLocale = (inputLocale: string, title: AnimeTitlesFragment['localized']) => {
  const localeMap = new Map([
    ['japan', title.ja_jp],
    ['china', title.zh_cn],
    ['south korea', title.ko_kr],
    ['korea', title.ko_kr],
  ]);

  return localeMap.get(inputLocale);
};
