import React, { ReactElement, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'ts-debounce';

// Logical components
import { seasonYear } from '../../logic/dateFunctions';

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
import SearchMediaLayout from '../../styles/layouts/SearchMediaLayout';
import SearchResultLayout from '../../styles/layouts/SearchResultLayout';
import Loading from '../../styles/components/ui/Loading';
import { AddEntryButton } from '../../styles/components/ui/button';
import Input from '../../styles/components/ui/input';
import Title from '../../styles/components/Title';
import { SubtypeTag } from '../../styles/components/Tag';

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
  const [showResults, setShowResults] = useState(false);

  const [executeSearch, { data, loading, error }] = useLazyQuery<
    SearchMediaByTitleQuery,
    SearchMediaByTitleQueryVariables
  >(SEARCH_MEDIA_QUERY);

  // Debounce search so it won't fire immediately
  const debouncedSearch = useCallback(
    debounce((nextValue) => {
      // Only fire if there's a search query
      const searchTitleVariables: SearchMediaByTitleQueryVariables = {
        first: 15,
        title: nextValue,
        media_type: media as MediaTypeEnum,
      };

      if (nextValue) {
        setShowResults(true);
        executeSearch({
          variables: searchTitleVariables,
        });
      } else {
        setShowResults(false);
      }
    }, 700),
    []
  );

  // Handle the debouncing
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
              onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </SearchMediaLayout>
      <SearchResultLayout>
        <div className="search-results">
          {!data && loading ? (
            <Loading></Loading>
          ) : error ? (
            <span className="search-error">error</span>
          ) : !showResults ? (
            <span></span>
          ) : data ? (
            data?.searchMediaByTitle?.nodes?.map((media) => {
              return (
                <SearchResults key={media?.id}>
                  <Link
                    className="media-link"
                    to={`/${media?.type}/${media?.id}`}>
                    <Poster
                      className="poster-image"
                      style={{
                        backgroundImage:
                          'url(' + media?.posterImage.original.url + ')',
                      }}
                    />
                    <Title className="media-title">
                      {media?.titles.canonical}
                    </Title>
                    {/* TODO: Change media.type to media.subtype */}
                    <SubtypeTag className="subtype-tag">
                      {media?.type}
                    </SubtypeTag>
                    <div className="season-date">
                      {seasonYear(media?.startDate)}
                    </div>
                    <div className="search-description">
                      <span>{media?.description.en}</span>
                    </div>
                  </Link>
                </SearchResults>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </SearchResultLayout>
    </>
  );
};

export default SearchMedia;
