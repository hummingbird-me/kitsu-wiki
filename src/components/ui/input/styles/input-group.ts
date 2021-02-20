import styled from 'styled-components';
import { Input } from '.';

const InputGroup = styled.div`
  margin-bottom: 10px;
  flex: 1 0 40%;

  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-bottom: 5px;
  }

  & ${Input} {
  }
`;

export default InputGroup;
