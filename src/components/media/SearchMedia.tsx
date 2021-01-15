import React, { ReactElement, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { debounce } from 'ts-debounce';

// GraphQl
import { Maybe, MediaTypeEnum } from 'src/types/graphql';
import { loader } from 'graphql.macro';
import { useLazyQuery } from '@apollo/client';
import {
  SearchMediaByTitleQuery,
  SearchMediaByTitleQueryVariables,
} from './search_media.types';

// Components
import useDropdown from '../ui/useDropdown';
// Styled-components
import SearchMediaLayout from '../../styles/layouts/SearchMediaLayout';
import SearchResultLayout from '../../styles/layouts/SearchResultLayout';
import Loading from '../../styles/components/ui/Loading';
import { AddEntryButton } from '../../styles/components/ui/button';
import Input from '../../styles/components/ui/input';

// Media
import { ReactComponent as KitsuDatabaseTools } from '../../assets/kitsuDatabaseTools.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchResults from 'src/styles/layouts/SearchResults';
import Poster from 'src/styles/components/Poster';

/* end imports */

const SEARCH_MEDIA_QUERY = loader('./search_media.graphql');

const SearchMedia = (): ReactElement => {
  const [searchTitle, setSearchTitle] = useState('');
  const [media, MediaDropdown] = useDropdown('Media', MediaTypeEnum.Anime, [
    MediaTypeEnum.Anime,
    MediaTypeEnum.Manga,
  ]);

  const [executeSearch, { data, loading, error }] = useLazyQuery<
    SearchMediaByTitleQuery,
    SearchMediaByTitleQueryVariables
  >(SEARCH_MEDIA_QUERY);

  /* const searchTitleVariables: SearchMediaByTitleQueryVariables = {
    first: 5,
    title: searchTitle,
  }; */

  if (data) {
    console.log(data);
  }

  // Debounce search so it won't fire immediately
  const debouncedSearch = useCallback(
    debounce((nextValue) => {
      // Only fire if there's a search query
      if (nextValue) {
        executeSearch({
          variables: {
            first: 5,
            title: nextValue,
          },
        });
      }
    }, 700),
    []
  );

  // Handle the debouncing
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nextValue } = event.target;
    // Lowercase search query for caching purposes
    setSearchTitle(nextValue.toLowerCase());
    debouncedSearch(nextValue.toLowerCase());
  };

  return (
    <>
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
              /* onChange={(e) => {
                setSearchTitle(e.target.value);
              }} */
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </SearchMediaLayout>
      <SearchResultLayout>
        <div className="search-results">
          {!data && loading ? (
            <Loading>loading</Loading>
          ) : error ? (
            <span className="search-error">error</span>
          ) : data ? (
            data?.searchMediaByTitle?.nodes?.map((media) => {
              return (
                <SearchResults key={media?.id}>
                  <Poster
                    className="poster-image"
                    style={{
                      backgroundImage:
                        'url(' + media?.posterImage.original.url + ')',
                    }}
                  />
                  <Link
                    className="media-title"
                    to={`/${media?.type}/${media?.id}`}>
                    {media?.titles.canonical}
                  </Link>
                  <div className="search-description">
                    <span>{media?.description.en}</span>
                  </div>
                </SearchResults>
              );
            })
          ) : (
            <span>no search performed yet</span>
          )}
        </div>
      </SearchResultLayout>
    </>
  );
};

export default SearchMedia;
