import React, { ReactElement } from 'react';
import styled from 'styled-components';
import SearchMedia from 'src/components/search/SearchMedia';

export default function Media(): ReactElement {
  return (
    <Wrapper>
      <SearchMedia />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: var(--secondary-background-color);
`;
