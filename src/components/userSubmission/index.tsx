import { ReactElement, useState } from 'react';
import { WikiSubmissionStatusEnum } from 'src/types/graphql';
import StatusList from './StatusList';
import UserSubmissionByStatus from './UserSubmissionByStatus';

export default function UserSubmission(): ReactElement {
  const [statuses, setStatuses] = useState([WikiSubmissionStatusEnum.Draft]);

  return (
    <div>
      <StatusList setStatuses={setStatuses} />
      <UserSubmissionByStatus statuses={statuses} />
    </div>
  );
}
