import React, { ReactElement, useState } from 'react';
import { debounce } from 'lodash';

// Logical components
import useDelayUnmount from 'src/util/useDelayUnmount';

// GraphQl
import {
  MediaTypeEnum,
  useSearchMediaByTitleLazyQuery,
  SearchMediaByTitleQueryVariables,
} from 'src/types/graphql';

// Components
import useDropdown from '../ui/UseDropdown';
import SearchResults from './SearchResult';
// Styled-components
import SearchMediaLayout from './styles/search-media-layout';
import SearchResultLayout from './styles/search-result-layout';
import Loading from '../ui/loading/Loading';
import AddNewLink from 'src/components/search/styles/add-new-link';
import { SearchInput } from '../ui/input/styles/Input';

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

  const [executeSearch, { loading, error, data, fetchMore }] = useSearchMediaByTitleLazyQuery();

  // Debounce search so it won't fire immediately
  const debouncedSearch = debounce((nextValue: string, mediaType: MediaTypeEnum) => {
    const searchTitleVariables: SearchMediaByTitleQueryVariables = {
      first: 10,
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
  }, 700);

  // Handle the debouncing
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nextValue } = event.target;
    // HACK: we want to most likely modify the useDropDown to accept some type of way to modify
    // the onChange.
    const mediaType = media as MediaTypeEnum;
    // Lowercase search query for caching purposes
    debouncedSearch(nextValue.toLowerCase(), mediaType);
  };

  // Paginate
  if (
    data &&
    data.searchMediaByTitle.pageInfo.hasNextPage &&
    fetchMore &&
    data.searchMediaByTitle.pageInfo.endCursor
  ) {
    fetchMore({
      variables: {
        cursor: data?.searchMediaByTitle.pageInfo.endCursor,
      },
    });
  }

  return (
    <>
      <SearchMediaLayout>
        <div className='search-layout'>
          <div className='logo'>
            <KitsuDatabaseTools />
          </div>
          <AddNewLink to={`/${media.toLowerCase()}/new`} className='new-entry'>
            Add New {media.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}
          </AddNewLink>

          <div className='media-type-dropdown'>
            <MediaDropdown />
          </div>
          <div className='searchbox'>
            <label htmlFor='media-searchbar'>Search for {media.toLowerCase()}</label>
            <SearchInput
              id='media-searchbar'
              type='search'
              placeholder={'Search ' + media.toLowerCase()}
              autoComplete='off'
              onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </SearchMediaLayout>
      <SearchResultLayout>
        {loading ? (
          <Loading />
        ) : error ? (
          <span className='search-error'>error</span>
        ) : !searchIsRendered ? (
          <></>
        ) : data ? (
          <div className='search-results' style={showResults ? fadeIn : fadeOut}>
            {data?.searchMediaByTitle?.edges?.map((media) => {
              if (media?.node) {
                return <SearchResults data={media?.node} key={media?.node?.id} />;
              } else {
                return null;
              }
            })}
          </div>
        ) : (
          <div></div>
        )}
      </SearchResultLayout>
    </>
  );
}
