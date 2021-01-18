import React, { ReactElement } from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// Logic
import { seasonYear } from '../../logic/dateFunctions';

// GraphQL
import { SearchMediaByTitleQuery } from './search_media.types';

// Components
import Title from '../../styles/components/Title';
import { SubtypeTag } from '../../styles/components/Tag';
import Search from 'src/styles/layouts/Search';
import Poster from 'src/styles/components/Poster';

interface Props {
  data: SearchMediaByTitleQuery;
}

export default function SearchResults({ data }: Props): ReactElement {
  return (
    <>
      {data?.searchMediaByTitle?.nodes?.map((media) => {
        return (
          <>
            <Search>
              <Link
                key={media?.id}
                className="media-link"
                to={`/${media?.type}/${media?.id}`}>
                <div className="media">
                  <div className="media-inside">
                    <Poster
                      className="poster-image"
                      style={{
                        backgroundImage:
                          'url(' + media?.posterImage.original.url + ')',
                      }}
                    />
                    <Title className="media-title">
                      {media?.titles.canonical}
                    </Title>

                    <SubtypeTag className="subtype-tag">
                      {media?.type}
                    </SubtypeTag>
                    <div className="season-date">
                      {seasonYear(media?.startDate)}
                    </div>
                    <div className="search-description">
                      <span>{media?.description.en}</span>
                    </div>
                  </div>
                  <div className="media-fade-out"></div>
                </div>
              </Link>
              <div className="on-kitsu">
                <a
                  href={`https://kitsu.io/${media?.type.toLowerCase()}/${
                    media?.slug
                  }`}
                  target="_blank"
                  rel="noreferrer">
                  Preview
                </a>
              </div>
            </Search>
          </>
        );
      })}
    </>
  );
}
