import { useReducer } from 'react';
import animeReducer from 'src/components/anime/animeReducer';
import { WikiSubmissionFieldsFragment } from 'src/types/graphql';
import { MediaChange } from 'src/types/mediaChange';
import { ReducerAction } from 'src/types/reducer';

export interface CustomReducerResponse {
  updatedState: MediaChange;
  dispatch: React.Dispatch<ReducerAction>;
}

export function Find(wikiSubmission: WikiSubmissionFieldsFragment): CustomReducerResponse {
  let reducerFunction;

  switch (wikiSubmission.data['type']) {
    case 'Anime':
      reducerFunction = animeReducer;

      break;
    default:
      throw new Error();
      break;
  }

  const [updatedState, dispatch] = useReducer(reducerFunction, wikiSubmission.data);

  return {
    updatedState: updatedState,
    dispatch: dispatch,
  };
}
