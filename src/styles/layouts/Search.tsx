import styled from 'styled-components';
import { highlightsWithin } from '../components/ui/multi-use/highlights';

export const Search = styled.li`
  --line-height: calc(var(--font-me) + 0.4rem);
  --border-radius: var(--rounded-input);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 550px));
  justify-content: center;
  gap: 15px;

  .media-link {
    color: unset;
    height: 280px;
    max-width: 550px;

    &:focus {
      outline: none;
      .media {
        border: 4px solid var(--focus-highlight);
        outline: none;
      }
    }

    .media {
      border: 4px solid var(--unfocused-highlights);
      max-width: inherit;
      border-radius: var(--border-radius);
      background-color: var(--foreground-background-color);
      height: inherit;
      position: relative;
      z-index: 5;

      &:hover:not(:active) {
        filter: brightness(110%);
      }

      .media-inside {
        padding: 10px;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        display: grid;
        grid-template-columns: auto auto auto min-content min-content;
        grid-template-rows: repeat(3, min-content) auto min-content;
        column-gap: 0.8rem;
        row-gap: 0.4rem;
        overflow: hidden;

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

          position: relative;
          z-index: 20;
          text-align: center;
          color: var(--secondary-text);
          margin-top: 0.2rem;
        }

        .search-description {
          grid-area: 2 / 2 / span 4 / span 3;

          // General styling
          max-height: 50px;
          color: var(--secondary-text);
          font-size: var(--font-me);
          line-height: var(--line-height);
        }
      }

      .media-fade-out {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        z-index: 10;

        pointer-events: none;

        background-image: linear-gradient(
          var(--gradient-foreground-background-color) 80%,
          var(--foreground-background-color)
        );
        border-radius: var(--border-radius);

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          bottom: 0;
          left: 0;
          z-index: 10;

          background-image: linear-gradient(
            var(--gradient-foreground-background-color) 80%,
            var(--foreground-background-color)
          );
          border-radius: var(--border-radius);
        }
      }
    }
  }

  .on-kitsu {
    position: relative;
    display: table;
    margin: 0 auto;
    margin-top: -15px;
    margin-bottom: 20px;

    z-index: 10;

    padding: 2px 8px;
    background-color: var(--secondary-foreground-background-color);
    border-radius: var(--border-radius);

    ${highlightsWithin}

    a {
      font-weight: var(--light);
      color: var(--main-text);
      &:focus {
        outline: none;
      }
    }
  }
`;

export default Search;
