import React, { ReactNode } from 'react';
import styles from './underline-button.module.scss';

const DefaultProps = {
  onClick: undefined,
  isDisabled: undefined,
};

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
}

const UnderlineButton = (props : ButtonProps) => (
  <button
    className={styles.customUnderlineButton}
    type="button"
    onClick={props.onClick}
    disabled={props.isDisabled}
  >
    {props.children}
  </button>
);

UnderlineButton.defaultProps = DefaultProps;

export { UnderlineButton };
