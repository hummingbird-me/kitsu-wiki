import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

// Logic
import { seasonYear } from '../../util/dateFunction';

// GraphQL
/* import { SearchMediaByTitleQuery } from '../../routes/Home/searchMedia.types'; */
import { MediaSearchFieldsFragment } from 'src/types/graphql';

// Components
import Title from './styles/title';
import { SubtypeTag } from '../../styles/components/ui/Tag';
import Search from 'src/components/search/styles/search';
import PosterImage from 'src/components/search/PosterImage';

interface Props {
  data: MediaSearchFieldsFragment;
}

export default function SearchResults({ data }: Props): ReactElement {
  return (
    <>
      <Search key={data?.id}>
        <Link className='media-link' to={`/${data?.type}/${data?.id}`}>
          <div className='media'>
            <div className='media-inside'>
              <PosterImage
                className='poster-image'
                imgSrc={data?.posterImage?.original?.url}
                blurhash={data?.posterImage?.blurhash}
              />

              <Title className='media-title'>{data?.titles?.canonical}</Title>

              <SubtypeTag className='subtype-tag'>{data?.type}</SubtypeTag>
              <div className='season-date'>{seasonYear(data?.startDate)}</div>
              <div className='search-description'>
                <span>{data?.description?.en}</span>
              </div>
            </div>
            <div className='media-fade-out'></div>
          </div>
        </Link>
        <div className='on-kitsu'>
          <a
            href={`https://kitsu.io/${data?.type?.toLowerCase()}/${data?.slug}`}
            target='_blank'
            rel='noreferrer'>
            Preview
          </a>
        </div>
      </Search>
    </>
  );
}
