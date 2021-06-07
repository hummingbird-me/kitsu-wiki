import { ReactElement } from 'react';
import Loading from 'src/components/ui/loading/Loading';

// GraphQL
import {
  FindWikiSubmissionByIdQueryVariables,
  useFindWikiSubmissionByIdQuery,
} from 'src/types/graphql';
import FindTypeFromDraft from './FindTypeFromDraft';

interface Props {
  id: string;
}
export default function EditId({ id }: Props): ReactElement {
  const findWikiSubmissionByIdVariables: FindWikiSubmissionByIdQueryVariables = { id: id };

  const { data, error, loading } = useFindWikiSubmissionByIdQuery({
    variables: findWikiSubmissionByIdVariables,
  });

  if (loading) return <Loading />;
  if (!data || !data.findWikiSubmissionById || error) return <div>Error: {error}</div>;

  return <FindTypeFromDraft wikiSubmission={data.findWikiSubmissionById} />;
}
