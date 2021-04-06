import { css } from 'styled-components';

const frontPageSizes = css`
  height: 3.5em;
  @media screen and (max-width: 600px) {
    font-size: var(--font-me);
    height: 3.2em;
  }
`;

export default frontPageSizes;
