import styled from 'styled-components';

const SearchResultLayout = styled.div`
  .search-results {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 550px));
    justify-content: center;
    gap: 15px;
    padding-bottom: 50px;
  }
`;

export default SearchResultLayout;
