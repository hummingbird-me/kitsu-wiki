import styled from 'styled-components';
import { Link } from 'react-router-dom';
import generalStyleInteractions from 'src/styles/general-styles-interactions';

const AddNewLink = styled(Link)`
  ${generalStyleInteractions}
  background-color: var(--cta-accept-color);
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AddNewLink;
