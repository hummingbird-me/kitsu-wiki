import styled from 'styled-components';
import { Input } from '.';

const InputGroup = styled.div`
  margin-bottom: 10px;
  flex: 1 1 40%;

  display: flex;
  flex-direction: column;

  label {
    padding-left: 0.2rem;
    display: block;
    margin-bottom: 7px;
  }

  & ${Input} {
  }
`;

export default InputGroup;
