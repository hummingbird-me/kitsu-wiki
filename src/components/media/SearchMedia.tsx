import React, { ReactElement, useState } from 'react';
import { MediaTypeEnum } from 'src/types/graphql';
import useDropdown from '../ui/useDropdown';
import { loader } from 'graphql.macro';
import { useLazyQuery } from '@apollo/client';
import {
  SearchMediaByTitleQuery,
  SearchMediaByTitleQueryVariables,
} from './search_media.types';
import { Link } from 'react-router-dom';

const SEARCH_MEDIA_QUERY = loader('./search_media.graphql');
const SearchMedia = (): ReactElement => {
  const [searchTitle, setSearchTitle] = useState('');
  const [media, MediaDropdown] = useDropdown('Media', MediaTypeEnum.Anime, [
    MediaTypeEnum.Anime,
    MediaTypeEnum.Manga,
  ]);
  const [executeSearch, { data }] = useLazyQuery<SearchMediaByTitleQuery>(
    SEARCH_MEDIA_QUERY
  );
  const searchTitleVariables: SearchMediaByTitleQueryVariables = {
    first: 20,
    title: searchTitle,
    media_type: media as MediaTypeEnum,
  };

  return (
    <>
      <div>
        Search
        <input
          type="text"
          onChange={(e) => {
            setSearchTitle(e.target.value);

            executeSearch({
              variables: searchTitleVariables,
            });
          }}
        />
      </div>
      <MediaDropdown />

      <div>
        <Link key={1} to={'/media/anime/1'}>
          {'Something'}
        </Link>
        {data?.searchMediaByTitle?.nodes?.map((media) => (
          <Link key={media?.id} to={`/${media?.type}/${media?.id}`} />
        ))}
      </div>
    </>
  );
};

export default SearchMedia;
