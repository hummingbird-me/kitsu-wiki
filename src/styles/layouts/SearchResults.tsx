import styled from 'styled-components';

const SearchResults = styled.div`
  padding: 10px;
  margin: 10px;
  max-height: 300px;
  background-color: var(--foreground-background-color);

  display: grid;
  grid-template-columns: auto;
  gap: 10px;

  // Positioning
  .poster-image {
    grid-area: 1 / 1 / span 2 / 1;
  }

  .media-title {
    grid-area: 1 / 2;
  }

  .search-description {
    grid-area: 2 / 2 / span 2 / span 2;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 11;
    -webkit-box-orient: vertical;
  }
`;

export default SearchResults;
