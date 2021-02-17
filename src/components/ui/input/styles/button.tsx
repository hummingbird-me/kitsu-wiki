import styled from 'styled-components';
import { generalStyleInteractions, frontPageSizes } from './';

export const Button = styled.button`
  ${generalStyleInteractions}
`;

export const AddEntryButton = styled(Button)`
  ${frontPageSizes}
  background-color: var(--cta-accept-color);
  user-select: none;
`;

export default Button;
