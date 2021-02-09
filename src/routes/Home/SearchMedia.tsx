import React, { ReactElement, useState, useCallback } from 'react';
import { debounce } from 'ts-debounce';

// Logical components
import useDelayUnmount from 'src/logic/useDelayUnmount';

// GraphQl
import {
  MediaTypeEnum,
  useSearchMediaByTitleLazyQuery,
  SearchMediaByTitleQueryVariables,
} from 'src/types/graphql';

// Components
import useDropdown from '../../components/ui/useDropdown';
import SearchResults from '../../components/media/SearchResults';
// Styled-components
import SearchMediaLayout from '../../styles/layouts/SearchMediaLayout';
import SearchResultLayout from '../../styles/layouts/SearchResultLayout';
import Loading from '../../styles/components/ui/Loading';
import { AddEntryButton } from '../../styles/components/jsx/button';
import Input from '../../styles/components/jsx/input';

// Media
import { ReactComponent as KitsuDatabaseTools } from '../../assets/kitsuDatabaseTools.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/* end imports */

export default function SearchMedia(): ReactElement {
  const [media, MediaDropdown] = useDropdown('Media', MediaTypeEnum.Anime, [
    MediaTypeEnum.Anime,
    MediaTypeEnum.Manga,
  ]);

  // Show/hide search results
  const [showResults, setShowResults] = useState(false);
  // Handle fading in/out animation for search results
  const searchIsRendered = useDelayUnmount(showResults, 50);
  const fadeIn = { animation: 'fadeIn 50ms ease-in' };
  const fadeOut = { animation: 'fadeOut 60ms ease-in' };

  const [
    executeSearch,
    { loading, error, data },
  ] = useSearchMediaByTitleLazyQuery();

  // Debounce search so it won't fire immediately
  const debouncedSearch = useCallback(
    debounce((nextValue: string, mediaType: MediaTypeEnum) => {
      const searchTitleVariables: SearchMediaByTitleQueryVariables = {
        first: 15,
        title: nextValue,
        media_type: mediaType,
      };

      // Only search if there's text in the searchbox
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
    // HACK: we want to most likely modify the useDropDown to accept some type of way to modify
    // the onChange.
    const mediaType = media as MediaTypeEnum;
    // Lowercase search query for caching purposes
    debouncedSearch(nextValue.toLowerCase(), mediaType);
  };

  return (
    <>
      <SearchMediaLayout>
        <div className='search-layout'>
          <div className='logo'>
            <KitsuDatabaseTools />
          </div>
          <AddEntryButton className='new-entry'>Add New Entry</AddEntryButton>

          <div className='media-type-dropdown'>
            <MediaDropdown />
          </div>
          <div className='searchbox'>
            <label htmlFor='media-searchbar'>
              Search for selected media type
            </label>
            <Input
              id='media-searchbar'
              type='search'
              placeholder='Search'
              autoComplete='off'
              onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </SearchMediaLayout>
      <SearchResultLayout>
        {loading ? (
          <Loading></Loading>
        ) : error ? (
          <span className='search-error'>error</span>
        ) : !searchIsRendered ? (
          <></>
        ) : !loading && data && searchIsRendered ? (
          <div
            className='search-results'
            style={showResults ? fadeIn : fadeOut}>
            {data?.searchMediaByTitle?.nodes?.map((media) => {
              return <SearchResults data={media} />;
            })}
          </div>
        ) : (
          <div></div>
        )}
      </SearchResultLayout>
    </>
  );
}