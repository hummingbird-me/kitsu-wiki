import { css } from 'styled-components';

export const highlights = css`
  border: 4px solid var(--unfocused-highlights);

  &:focus {
    border: 4px solid var(--focus-highlight);
    outline: none;
  }
  /* &:hover:not(:active) {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(90%);
  } */
`;

export const highlightsWithin = css`
  &:focus-within {
    border: 4px solid var(--focus-highlight);
    outline: none;
  }
  /* &:hover:not(:active) {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(90%);
  } */
`;

export default highlights;
