import { css } from 'styled-components';

import highlights from './highlights';

export const generalStyleInteractions = css`
  appearance: none !important;
  margin: 0;
  padding: 0;
  border-radius: var(--rounded-input);
  background-color: var(--foreground-background-color);
  color: var(--main-text);

  &::placeholder {
    text-transform: capitalize;
    color: var(--placeholder-text);
    opacity: 1;
  }

  ${highlights}
`;

export default generalStyleInteractions;
