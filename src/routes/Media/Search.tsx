import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { default as Search } from 'src/components/search/SearchMedia';

export default function SearchMedia(): ReactElement {
  return (
    <Wrapper>
      <Search />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: var(--secondary-background-color);
`;
