import React, { ReactNode } from 'react';
import styles from './pagination-button.module.scss';
import { Button } from './button';

interface PaginationButtonProps {
  children: ReactNode;
  onClick: () => void;
  isDisabled: boolean;
}

const PaginationButton = (props: PaginationButtonProps) => (
  <Button
    className={styles.customPaginationButton}
    type="button"
    onClick={props.onClick}
    isDisabled={props.isDisabled}
  >
    {props.children}
  </Button>
);

export { PaginationButton };
