import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

// Logic
import { seasonYear } from '../../logic/dateFunctions';

// GraphQL
/* import { SearchMediaByTitleQuery } from '../../routes/Home/searchMedia.types'; */
import { SearchMediaByTitleQuery } from 'src/types/graphql';

// Components
import Title from '../../styles/components/media/Title';
import { SubtypeTag } from '../../styles/components/ui/Tag';
import Search from 'src/styles/layouts/Search';
import PosterImage from 'src/components/media/PosterImage';

interface Props {
	data: SearchMediaByTitleQuery;
}

export default function SearchResults({ data }: Props): ReactElement {
	return (
		<>
			{data?.searchMediaByTitle?.nodes?.map((media) => {
				return (
					<>
						<Search key={media?.id}>
							<Link className='media-link' to={`/${media?.type}/${media?.id}`}>
								<div className='media'>
									<div className='media-inside'>
										<PosterImage
											className='poster-image'
											imgSrc={media?.posterImage?.original?.url}
											blurhash={media?.posterImage?.blurhash}
										/>

										<Title className='media-title'>
											{media?.titles?.canonical}
										</Title>

										<SubtypeTag className='subtype-tag'>
											{media?.type}
										</SubtypeTag>
										<div className='season-date'>
											{seasonYear(media?.startDate)}
										</div>
										<div className='search-description'>
											<span>{media?.description?.en}</span>
										</div>
									</div>
									<div className='media-fade-out'></div>
								</div>
							</Link>
							<div className='on-kitsu'>
								<a
									href={`https://kitsu.io/${media?.type?.toLowerCase()}/${
										media?.slug
									}`}
									target='_blank'
									rel='noreferrer'>
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
