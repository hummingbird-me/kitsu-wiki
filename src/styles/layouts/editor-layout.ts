import styled from 'styled-components';

const Editor = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
  }

  .edit-content {
    padding: 20px;
    padding-bottom: 100px;
    grid-column: 2;
    @media screen and (max-width: 1400px) {
      grid-column: 1;
    }
  }
`;

export default Editor;
