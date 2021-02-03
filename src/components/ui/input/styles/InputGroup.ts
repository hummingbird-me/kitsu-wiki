import styled from 'styled-components';
import { Input } from './';

const InputGroup = styled.div`
  margin-bottom: 10px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  ${Input} {
  }
`;

export default InputGroup;
