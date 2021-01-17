import styled from 'styled-components';

const SearchResults = styled.div`
  --line-height: calc(var(--font-me) + 0.2rem);
  --max-height: calc(calc(var(--line-height) + var(--font-me) + 0.03rem) * 7);

  a {
    padding: 10px;
    margin: 10px;
    max-width: 500px;
    border-radius: var(--rounded-input);
    background-color: var(--foreground-background-color);
    color: unset;

    display: grid;
    grid-template-columns: auto auto auto min-content min-content;
    column-gap: 1rem;

    &:hover {
      filter: brightness(110%);
    }

    // Positioning
    .poster-image {
      grid-area: 1 / 1 / span 3 / 1;
    }

    .media-title {
      grid-area: 1 / 2 / 1 / span 2;
    }

    .subtype-tag {
      grid-area: 1 / 4 / 1 / span 2;
    }

    .season-date {
      grid-area: 4 / 1;

      text-align: center;
      color: var(--secondary-text);
      margin-top: 0.2rem;
    }

    .search-description {
      grid-area: 2 / 2 / span 4 / span 3;

      // General styling
      color: var(--secondary-text);

      // Max Height
      font-size: var(--font-me);
      line-height: var(--line-height);
      max-height: var(--max-height);
      overflow: hidden;

      /* display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 11;
      -webkit-box-orient: vertical; */
    }
  }
`;

export default SearchResults;
