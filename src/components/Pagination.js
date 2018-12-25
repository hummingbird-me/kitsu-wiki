import React from 'react';

const PageButton = ({ enabled, onClick, children }) => (
  <li className={`page-item${enabled ? '' : ' disabled'}`}>
    <button className="page-link" onClick={onClick}>
      {children}
    </button>
  </li>
);

const Pagination = ({ pageInfo, onPrevPage, onNextPage }) => (
  <nav>
    <ul className="pagination">
      {/* <PageButton enabled={pageInfo.hasPreviousPage} onClick={onPrevPage}> */}
      <PageButton enabled={true} onClick={onPrevPage}>
        Previous
      </PageButton>
      {/* <PageButton enabled={pageInfo.hasNextPage} onClick={onNextPage}> */}
      <PageButton enabled={true} onClick={onNextPage}>
        Next
      </PageButton>
    </ul>
  </nav>
);

export default Pagination;
