import styled from 'styled-components';

const Editor = styled.div`
  background-color: var(--background-color);
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
  }

  .edit-content {
    padding: 20px;
    grid-column: 2;
    @media screen and (max-width: 1400px) {
      grid-column: 1;
    }
  }
`;

export default Editor;
