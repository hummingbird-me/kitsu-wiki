import styled from 'styled-components';

const Loading = styled.div`
  --size-from: 10px;
  --size-to: 20px;
  --animation-speed: 500ms;
  --translate-y: calc(calc(var(--size-to) - var(--size-from)) / -2);

  will-change: transform, width, height, filter;

  position: absolute;
  background-color: var(--links-text);
  border-radius: 50%;
  left: 50%;
  transform: translate(-50%);

  animation: loading var(--animation-speed) linear infinite alternate-reverse;

  @keyframes loading {
    from {
      width: var(--size-from);
      height: var(--size-from);
    }
    to {
      width: var(--size-to);
      height: var(--size-to);
      transform: translate(-50%, var(--translate-y));
      filter: brightness(110%);
    }
  }
`;

export default Loading;
