import React, { ReactElement } from 'react';
import { changePage } from '../../util/paginate';

const PageButton = ({
  enabled,
  onClick,
  children,
}: {
  enabled: string;
  onClick: any;
  children: any;
}): ReactElement => (
  <li className={`page-item${enabled ? '' : ' disabled'}`}>
    <button className="page-link" onClick={onClick}>
      {children}
    </button>
  </li>
);

interface PaginationInterface {
  fetchMore: any;
  queryKey: string;
  pageAmount: number;
  pageInfo: any; // check graphql
  forwardQuery: any;
  backwardQuery: any;
  setParams: any;
}

const Pagination = ({
  fetchMore,
  queryKey,
  pageAmount,
  pageInfo,
  forwardQuery,
  backwardQuery,
  setParams,
}: PaginationInterface): ReactElement => (
  <nav>
    <ul className="pagination">
      <PageButton
        enabled={pageInfo.hasPreviousPage}
        onClick={() =>
          changePage({
            fetchMore,
            queryKey,
            pageAmount,
            pageInfo,
            query: backwardQuery,
            direction: 'backward',
            setParams,
          })
        }>
        Previous
      </PageButton>
      <PageButton
        enabled={pageInfo.hasNextPage}
        onClick={() =>
          changePage({
            fetchMore,
            queryKey,
            pageAmount,
            pageInfo,
            query: forwardQuery,
            direction: 'forward',
            setParams,
          })
        }>
        Next
      </PageButton>
    </ul>
  </nav>
);

export default Pagination;
