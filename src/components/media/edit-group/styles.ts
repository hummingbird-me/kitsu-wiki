import styled from 'styled-components';

export const Container = styled.fieldset`
  all: unset;

  display: grid;
  grid-template-rows: auto 1fr;
  gap: 10px;

  margin: 0;
  margin-bottom: 20px;
  legend {
    grid-row-start: 1;
    font-size: var(--font-xxl);
  }
  .field-group {
    grid-row-start: 2;

    background-color: var(--form-group-background-color);
    border-radius: var(--rounded-input-group);
    padding: 10px;
  }
`;
