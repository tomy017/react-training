import React, { ReactNode } from 'react';
import styles from './button.module.scss';

const DefaultProps = {
  onClick: undefined,
};

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isDisabled: boolean;
}

const Button = (props : ButtonProps) => (
  <button
    className={styles.customButton}
    type="submit"
    onClick={props.onClick}
    disabled={props.isDisabled}
  >
    {props.children}
  </button>
);

Button.defaultProps = DefaultProps;

export { Button };
