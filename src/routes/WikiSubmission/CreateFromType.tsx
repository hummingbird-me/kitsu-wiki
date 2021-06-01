import React, { ReactElement, useEffect } from 'react';
import Loading from 'src/components/ui/loading/Loading';
import FindTypeFromDraft from './FindTypeFromDraft';

// GraphQL
import {
  FindAnimeFieldsFragment,
  useCreateDraftMutationMutation,
  WikiSubmissionCreateDraftInput,
} from 'src/types/graphql';

type RecordType = FindAnimeFieldsFragment;

interface RecordRequiredFields {
  id: string;
  __typename: string;
}

interface RecordInterface {
  title: string;
  record: RecordType & RecordRequiredFields;
}

export default function CreateFromType({ title, record }: RecordInterface): ReactElement {
  const draft = {
    id: record.id,
    type: record.__typename,
  };

  const createDraftInput: WikiSubmissionCreateDraftInput = {
    title: title,
    draft: draft,
  };

  const [createDraftMutationMutation, { data, loading, error }] = useCreateDraftMutationMutation({
    variables: { input: createDraftInput },
  });

  // HACK: adding a dependency will cause issues because we only want this to run once.
  // most likely need to figure out a better way to handle this.
  useEffect(() => {
    createDraftMutationMutation();
  }, []);

  if (loading) return <Loading />;
  if (!data || !data.wikiSubmission.createDraft?.wikiSubmission || error)
    return <div>Error: {error?.message}</div>;

  const wikiSubmissionId = data.wikiSubmission.createDraft.wikiSubmission.id.toString();
  const draftRoute = `/user_submissions/${wikiSubmissionId}/edit`;

  // eslint-disable-next-line no-restricted-globals
  history.replaceState(null, '', draftRoute);

  return <FindTypeFromDraft wikiSubmission={data.wikiSubmission.createDraft.wikiSubmission} />;
}
