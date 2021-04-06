import styled from 'styled-components';
import { generalStyleInteractions, frontPageSizes } from '.';

export const Input = styled.input`
  ${generalStyleInteractions}
  background-color: var(--input-color);

  padding: 0.2rem 0.4rem 0.2rem 0.6rem;

  flex-grow: 1;
  flex-shrink: 1;

  &:read-only {
    filter: brightness(50%);
  }
`;

export const AltTitles = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 10px;
`;

export const SearchInput = styled.input`
  ${frontPageSizes}
  ${generalStyleInteractions}
`;

export default Input;
