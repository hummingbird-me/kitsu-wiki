import React, { ReactElement, useState } from 'react';
import Poster, { PosterImg } from '../../styles/components/media/Poster';
import { Blurhash } from 'react-blurhash';
import LazyLoad from 'react-lazyload';

interface Props {
  className?: string;
  imgSrc: string | undefined;
  blurhash?: string | null;
}

const PosterImage = ({ className, imgSrc, blurhash }: Props): ReactElement => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <Poster className={className}>
      {blurhash ? (
        <Blurhash hash={blurhash} resolutionX={32} resolutionY={32} punch={1} />
      ) : (
        <></>
      )}
      <LazyLoad once={true}>
        <PosterImg
          src={imgSrc}
          alt="poster"
          onLoad={onLoad}
          style={{ opacity: loaded ? '1' : '0' }}
        />
      </LazyLoad>
    </Poster>
  );
};

export default PosterImage;
