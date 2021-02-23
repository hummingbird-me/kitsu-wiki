import react, { ReactElement } from 'react';
import styled from 'styled-components';
import { KitsuLoading } from 'src/assets';

interface Props {
  fullScreen?: boolean;
}

const Loading = ({ fullScreen = false }: Props): ReactElement => {
  if (fullScreen) {
    return (
      <LoadingFullscreen>
        <KitsuLoad></KitsuLoad>
      </LoadingFullscreen>
    );
  }

  return (
    <LoadingTie>
      <KitsuLoad></KitsuLoad>
    </LoadingTie>
  );
};

const LoadingTie = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  margin-top: -30px;
`;

const KitsuLoad = styled(KitsuLoading)`
  /* --size-from: 10px;
  --size-to: 20px; */
  --animation-speed: 500ms;
  /* --translate-y: calc(calc(var(--size-to) - var(--size-from)) / -2); */

  height: 50px;
  will-change: transform;

  animation: loading var(--animation-speed) ease infinite;

  @keyframes loading {
    0% {
      transform: rotate(15deg);
    }
    20% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-15deg);
    }
    70% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(15deg);
    }
  }
`;

export const LoadingFullscreen = styled(LoadingTie)`
  top: 50%;
`;

export default Loading;
