import styled from 'styled-components';

const Select = styled.select`
  height: 3.5em;
  @media screen and (max-width: 600px) {
    font-size: var(--font-me);
    height: 3.2em;
  }
`;

export const MediaSelector = styled(Select)``;

export default Select;
