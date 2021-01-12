import styled from 'styled-components';

export const Button = styled.button`
  height: 3.5em;
  @media screen and (max-width: 600px) {
    font-size: var(--font-me);
    height: 3.2em;
  }
`;

export const AddEntryButton = styled(Button)`
  background-color: var(--cta-accept-color);
  user-select: none;
  &:hover:not(:active) {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(90%);
  }
`;

export default Button;
