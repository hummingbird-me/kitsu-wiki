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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/* end imports */

const SEARCH_MEDIA_QUERY = loader('./search_media.graphql');

const SearchMedia = (): ReactElement => {
  const [searchTitle, setSearchTitle] = useState('');
  const [media, MediaDropdown] = useDropdown('Media', MediaTypeEnum.Anime, [
    MediaTypeEnum.Anime,
    MediaTypeEnum.Manga,
  ]);

  const [executeSearch, { data }] = useLazyQuery<
    SearchMediaByTitleQuery,
    SearchMediaByTitleQueryVariables
  >(SEARCH_MEDIA_QUERY);

  const searchTitleVariables: SearchMediaByTitleQueryVariables = {
    first: 5,
    title: searchTitle,
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
            autoComplete="off"
            onChange={(e) => {
              setSearchTitle(e.target.value);

              executeSearch({
                variables: searchTitleVariables,
              });
            }}
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>

        <div>
          {data?.searchMediaByTitle?.nodes?.map((media) => {
            return <Link key={media?.id} to={`/${media?.type}/${media?.id}`} />;
          })}
        </div>
      </div>
    </SearchMediaLayout>
  );
};

export default SearchMedia;
