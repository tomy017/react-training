import React from 'react';
import { PaginationButton } from 'common/buttons/pagination-button';
import styles from './pagination.module.scss';

interface PaginationProps {
  currentPage: number,
  lastPage: number,
  length: number,
  disable: boolean,
  onNextClick: () => void,
  onPreviousClick: () => void,
}

const Pagination = (props : PaginationProps) => (
  <div className={styles.pageNavigation}>
    {(props.currentPage > 0 && !!props.length) && (
      <PaginationButton
        isDisabled={props.disable}
        onClick={props.onPreviousClick}
      >
        👈 Previous page
      </PaginationButton>
    )}
    {(props.currentPage < props.lastPage) && (
      <PaginationButton
        isDisabled={props.disable}
        onClick={props.onNextClick}
      >
        Next page 👉
      </PaginationButton>
    )}
  </div>
);

export { Pagination };
