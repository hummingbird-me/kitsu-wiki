import React from 'react';
import { changePage } from '../util/paginate';

const PageButton = ({ enabled, onClick, children }) => (
  <li className={`page-item${enabled ? '' : ' disabled'}`}>
    <button className="page-link" onClick={onClick}>
      {children}
    </button>
  </li>
);

const Pagination = ({
  fetchMore,
  queryKey,
  pageAmount,
  pageInfo,
  forwardQuery,
  backwardQuery,
  setParams
}) => (
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
            setParams
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
            setParams
          })
        }>
        Next
      </PageButton>
    </ul>
  </nav>
);

export default Pagination;
