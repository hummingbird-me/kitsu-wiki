import React, { ReactElement } from 'react';
import { WikiSubmissionStatusEnum } from 'src/types/graphql';
import StatusButton from './StatusButton';

interface Props {
  setStatuses: React.Dispatch<React.SetStateAction<WikiSubmissionStatusEnum[]>>;
}

export default function StatusList({ setStatuses }: Props): ReactElement {
  return (
    <div>
      <StatusButton status='All' setStatuses={setStatuses} />
      <StatusButton status={WikiSubmissionStatusEnum.Draft} setStatuses={setStatuses} />
      <StatusButton status={WikiSubmissionStatusEnum.Pending} setStatuses={setStatuses} />
      <StatusButton status={WikiSubmissionStatusEnum.Approved} setStatuses={setStatuses} />
      <StatusButton status={WikiSubmissionStatusEnum.Rejected} setStatuses={setStatuses} />
    </div>
  );
}
