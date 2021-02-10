import styled from 'styled-components';
import { generalStyleInteractions } from './';

const TextArea = styled.textarea`
  ${generalStyleInteractions}
  background-color: var(--input-color);

  padding: 0.2rem 0.4rem 0.2rem 0.6rem;

  &:read-only {
    filter: brightness(50%);
  }
`;

export default TextArea;
