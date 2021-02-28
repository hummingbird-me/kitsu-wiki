import styled from 'styled-components';
import { generalStyleInteractions, frontPageSizes } from '.';

export const Button = styled.button`
  ${generalStyleInteractions}
`;

export const AddEntryButton = styled(Button)`
  ${frontPageSizes}
  background-color: var(--cta-accept-color);
  user-select: none;
`;

export const RemoveButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: var(--cta-remove-color);
  height: 100%;
  padding: 0 10px;
  margin-left: -34px;
  border-radius: var(--rounded-input);
`;

export const EditButton = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding: 0 10px;
  border-radius: var(--rounded-input);
`;

export default Button;
