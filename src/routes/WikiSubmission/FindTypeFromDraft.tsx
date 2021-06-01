import React, { ReactElement } from 'react';
import AnimeEdit from 'src/components/anime/AnimeEdit';
import Loading from 'src/components/ui/loading/Loading';
import {
  FindAnimeByIdQuery,
  FindAnimeFieldsFragment,
  FindMangaByIdQuery,
  useFindAnimeByIdQuery,
  useFindMangaByIdQuery,
  WikiSubmissionFieldsFragment,
} from 'src/types/graphql';

enum WikiSubmissionDraftTypes {
  Anime = 'Anime',
  Manga = 'Manga',
}

interface Props {
  wikiSubmission: WikiSubmissionFieldsFragment;
}

export default function FindTypeFromDraft({ wikiSubmission }: Props): ReactElement {
  let queryType;
  const id = wikiSubmission.draft['id'];
  const draftType = wikiSubmission.draft['type'];
  const variables = {
    id: id,
  };
  let formattedData;
  // This will most likely be a problem w/o types
  switch (draftType) {
    case WikiSubmissionDraftTypes.Anime:
      queryType = useFindAnimeByIdQuery;
      break;
    case WikiSubmissionDraftTypes.Manga:
      queryType = useFindMangaByIdQuery;
      break;
  }

  if (queryType === undefined) {
    return <div>Error</div>;
  }

  const { data, error, loading } = queryType({
    variables: variables,
  });

  if (loading) return <Loading />;
  if (!data || error) return <div>Error: {error?.message}</div>;

  switch (draftType) {
    case WikiSubmissionDraftTypes.Anime:
      formattedData = (data as FindAnimeByIdQuery).findAnimeById;
      break;
    case WikiSubmissionDraftTypes.Manga:
      formattedData = (data as FindMangaByIdQuery).findMangaById;
      break;
  }

  if (formattedData === undefined || formattedData === null) {
    return <div>Error</div>;
  }

  switch (draftType) {
    case WikiSubmissionDraftTypes.Anime:
      return (
        <AnimeEdit
          record={formattedData as FindAnimeFieldsFragment}
          wikiSubmission={wikiSubmission}
        />
      );
    case WikiSubmissionDraftTypes.Manga:
      return <div>MangaEdit Component</div>;
    default:
      return <div>Hello</div>;
  }
}
