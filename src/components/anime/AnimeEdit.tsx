import { ReactElement, useEffect } from 'react';
import Sidebar from '../ui/navigation';
import { AnimeChangeEditInterface } from 'src/types/editTypes';
import AnimeItem from './AnimeItem';
import { useSubmitDraftMutationMutation, useUpdateDraftMutationMutation } from 'src/types/graphql';

export default function AnimeEdit({
  record,
  wikiSubmission,
  cache,
  dispatch,
}: AnimeChangeEditInterface): ReactElement {
  const inputVariables = {
    variables: {
      input: {
        id: wikiSubmission.id,
        data: cache,
      },
    },
  };

  const [updateDraftMutation, { data, loading, error }] = useUpdateDraftMutationMutation(
    inputVariables
  );
  const [
    submitDraftMutation,
    { loading: submitLoading, error: submitError },
  ] = useSubmitDraftMutationMutation(inputVariables);

  useEffect(() => {
    updateDraftMutation();
  }, [cache, updateDraftMutation]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    submitDraftMutation();
  };

  return (
    <>
      <Sidebar />
      <form onSubmit={handleSubmit}>
        <AnimeItem record={record} cache={cache} parentDispatch={dispatch} />

        <input type='submit' value='Submit' />
      </form>
    </>
  );
}
