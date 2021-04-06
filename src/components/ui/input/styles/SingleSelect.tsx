import react, { ReactElement } from 'react';
import styled from 'styled-components';
import { generalStyleInteractions } from '.';

interface Props {
  children: ReactElement;
}

export default function SingleSelect({ children }: Props): ReactElement {
  return <SelectStyle>{children}</SelectStyle>;
}

const SelectStyle = styled.div`
  .single-select-container {
    ${generalStyleInteractions}
  }
`;
