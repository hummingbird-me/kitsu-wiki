import styled from 'styled-components';
import generalStyleInteractions from './generalStylesInteractions';

export const Button = styled.button`
  ${generalStyleInteractions}
`;

export const AddEntryButton = styled(Button)`
  background-color: var(--cta-accept-color);
  user-select: none;
`;

export default Button;
