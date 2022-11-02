import { classnames } from 'helpers/utils';
import React, { ReactNode } from 'react';
import { Button } from './button';
import styles from './underline-button.module.scss';

const DefaultProps = {
  onClick: undefined,
  isDisabled: false,
  isActive: undefined,
};

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  isActive?: boolean;
}

const UnderlineButton = (props : ButtonProps) => (
  <Button
    className={classnames(
      !props.isActive ? styles.customUnderlineButtonInactive : styles.customUnderlineButton,
    )}
    type="button"
    onClick={props.onClick}
    isDisabled={props.isDisabled || false}
  >
    {props.children}
  </Button>
);

UnderlineButton.defaultProps = DefaultProps;

export { UnderlineButton };
