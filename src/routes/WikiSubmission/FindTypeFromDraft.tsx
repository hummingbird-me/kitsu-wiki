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
import * as CustomReducer from 'src/util/customReducer';

enum WikiSubmissionDraftTypes {
  Anime = 'Anime',
  Manga = 'Manga',
}

interface Props {
  wikiSubmission: WikiSubmissionFieldsFragment;
}

export default function FindTypeFromDraft({ wikiSubmission }: Props): ReactElement {
  let queryType;
  const id = wikiSubmission.data['id'];
  const dataType = wikiSubmission.data['type'];
  const variables = {
    id: id,
  };
  let formattedData;
  const reducer = CustomReducer.Find(wikiSubmission);
  // This will most likely be a problem w/o types
  // This will be moved to some HOC function and most likely encapsulate which reducer to use.
  switch (dataType) {
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

  switch (dataType) {
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

  switch (dataType) {
    case WikiSubmissionDraftTypes.Anime:
      return (
        <AnimeEdit
          record={formattedData as FindAnimeFieldsFragment}
          wikiSubmission={wikiSubmission}
          cache={reducer.updatedState}
          dispatch={reducer.dispatch}
        />
      );
    case WikiSubmissionDraftTypes.Manga:
      return <div>MangaEdit Component</div>;
    default:
      return <div>Hello</div>;
  }
}
