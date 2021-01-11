import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

// GraphQl
import { MediaTypeEnum } from 'src/types/graphql';
import { loader } from 'graphql.macro';
import { useLazyQuery } from '@apollo/client';
import {
  SearchMediaByTitleQuery,
  SearchMediaByTitleQueryVariables,
} from './search_media.types';

// Components
import useDropdown from '../ui/useDropdown';
// Styled-components
import SearchMediaLayout from '../../styles/searchMedia/SearchMediaLayout';
import { AddEntryButton } from '../../styles/components/button';
import Input from '../../styles/components/input';

// Media
import { ReactComponent as KitsuDatabaseTools } from '../../assets/kitsuDatabaseTools.svg';
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg';

/* end imports */

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
    <SearchMediaLayout>
      <div className="search-layout">
        <div className="logo">
          <KitsuDatabaseTools />
        </div>
        <AddEntryButton className="new-entry">Add New Entry</AddEntryButton>

        <div className="media-type-dropdown">
          <MediaDropdown />
        </div>
        <div className="searchbox">
          <label htmlFor="media-searchbar">
            Search for selected media type
          </label>
          <Input
            id="media-searchbar"
            type="search"
            placeholder="Search"
            onChange={(e) => {
              setSearchTitle(e.target.value);

              executeSearch({
                variables: searchTitleVariables,
              });
            }}
          />
          <SearchIcon />
        </div>

        {/* <div>
          <Link key={1} to={'/media/anime/1'}>
            {'Something'}
          </Link>
          {data?.searchMediaByTitle?.nodes?.map((media) => (
            <Link key={media?.id} to={`/${media?.type}/${media?.id}`} />
          ))}
        </div> */}
      </div>
    </SearchMediaLayout>
  );
};

export default SearchMedia;
