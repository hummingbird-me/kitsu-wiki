import React, { ReactElement } from 'react';
import { WikiSubmissionStatusEnum } from 'src/types/graphql';

interface Props {
  status: WikiSubmissionStatusEnum | 'All';
  setStatuses: React.Dispatch<React.SetStateAction<WikiSubmissionStatusEnum[]>>;
}

export default function StatusButton({ status, setStatuses }: Props): ReactElement {
  let statuses: Array<WikiSubmissionStatusEnum>;

  if (status === 'All') {
    statuses = [
      WikiSubmissionStatusEnum.Draft,
      WikiSubmissionStatusEnum.Pending,
      WikiSubmissionStatusEnum.Approved,
      WikiSubmissionStatusEnum.Rejected,
    ];
  } else {
    statuses = [status];
  }

  return (
    <button
      onClick={() => {
        setStatuses(statuses);
      }}>
      {status}
    </button>
  );
}
