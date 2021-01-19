import styled from 'styled-components';

const Poster = styled.div`
  --poster-width: 140px;
  @media screen and (max-width: 576px) {
    --poster-width: 120px;
  }

  transition: width, height 0.5s;

  --poster-height: calc(var(--poster-width) * 1.45);

  width: var(--poster-width);
  height: var(--poster-height);
  border-radius: var(--rounded-input);

  img,
  div {
    position: absolute !important;
    width: var(--poster-width) !important;
    height: var(--poster-height) !important;
    object-fit: cover;
    border-radius: inherit;
    canvas {
      border-radius: inherit;
    }
  }
  img {
    z-index: 10;
  }
`;

export const PosterImg = styled.img`
  transition: opacity, 0.5s;
`;

export default Poster;
