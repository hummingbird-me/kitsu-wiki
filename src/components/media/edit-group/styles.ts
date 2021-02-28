import styled from 'styled-components';

export const Container = styled.fieldset`
  all: unset;

  display: grid;
  grid-template-rows: auto 1fr;
  gap: 10px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  max-width: 1200px;
  filter: drop-shadow(0 0 10px #0e080e);

  legend {
    grid-row-start: 1;
    padding-left: 0.1em;

    font-weight: bold;
    font-size: var(--font-xl);
  }
  .field-group {
    grid-row-start: 2;

    background-color: var(--form-group-background-color);
    border-radius: var(--rounded-input-group);
    padding: 15px;
  }
`;
