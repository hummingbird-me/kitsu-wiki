import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { WikiSubmissionFieldsFragment } from 'src/types/graphql';

interface Props {
  data: WikiSubmissionFieldsFragment;
}

export default function UserSubmissionItem({ data }: Props): ReactElement {
  const id = data.id;

  return (
    <>
      <div key={id}>
        <div>
          <Link to={`/user_submissions/${id}`}>{data.title}</Link>
          <Link to={`/user_submissions/${id}/edit`}>Edit</Link>
          <Link
            to={`/${id}`}
            onClick={() => {
              ('');
            }}>
            Delete
          </Link>
        </div>
        <div>{data.status}</div>
      </div>
    </>
  );
}
