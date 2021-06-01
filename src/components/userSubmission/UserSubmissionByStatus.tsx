import React, { ReactElement } from 'react';
import {
  UserWikiSubmissionsQueryVariables,
  useUserWikiSubmissionsQuery,
  WikiSubmissionStatusEnum,
} from 'src/types/graphql';
import Loading from '../ui/loading/Loading';
import UserSubmissionItem from './UserSubmissionItem';

interface Props {
  statuses: Array<WikiSubmissionStatusEnum>;
}

export default function UserSubmissionByStatuses({ statuses }: Props): ReactElement {
  const userWikiSubmissionsVariables: UserWikiSubmissionsQueryVariables = {
    first: 100,
    statuses: statuses,
  };
  const { data, error, loading } = useUserWikiSubmissionsQuery({
    variables: userWikiSubmissionsVariables,
  });

  if (loading) return <Loading />;
  if (!data || !data.currentAccount?.profile.wikiSubmissions.nodes || error)
    return <div>Error: {error}</div>;

  return (
    <div className='list'>
      {data.currentAccount.profile.wikiSubmissions.nodes?.map((wikiSubmission) => {
        if (wikiSubmission == null) return null;

        return <UserSubmissionItem data={wikiSubmission} key={wikiSubmission?.id} />;
      })}
    </div>
  );
}
