import React, { ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = (props : ButtonProps) => (
  <button
    className={styles.customButton}
    type="button"
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export { Button };
