import styled from 'styled-components';

const Input = styled.input`
  height: 3.5em;
  @media screen and (max-width: 600px) {
    font-size: var(--font-me);
    height: 3.2em;
  }
`;

export default Input;
