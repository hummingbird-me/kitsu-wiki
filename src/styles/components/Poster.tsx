import styled from 'styled-components';

const Poster = styled.div`
  --poster-width: 140px;
  --poster-height: calc(var(--poster-width) * 1.45);

  width: var(--poster-width);
  height: var(--poster-height);
  background-size: cover;
  background-position: center;
  border-radius: var(--rounded-input);
`;

export default Poster;
