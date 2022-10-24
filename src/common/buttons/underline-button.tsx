import { classnames } from 'helpers/utils';
import React, { ReactNode } from 'react';
import styles from './underline-button.module.scss';

const DefaultProps = {
  onClick: undefined,
  isDisabled: undefined,
  isActive: undefined,
};

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  isActive?: boolean;
}

const UnderlineButton = (props : ButtonProps) => (
  <button
    className={classnames(
      !props.isActive ? styles.customUnderlineButtonInactive : styles.customUnderlineButton,
    )}
    type="button"
    onClick={props.onClick}
    disabled={props.isDisabled}
  >
    {props.children}
  </button>
);

UnderlineButton.defaultProps = DefaultProps;

export { UnderlineButton };
