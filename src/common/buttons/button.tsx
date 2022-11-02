import React, { ReactNode } from 'react';
import styles from './button.module.scss';

const DefaultProps = {
  onClick: () => null,
  className: '',
};

interface ButtonProps {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
  className?: string;
  onClick?: () => void;
  isDisabled: boolean;
}

const Button = (props : ButtonProps) => (
  <button
    className={props.className || styles.customButton}
    // eslint-disable-next-line react/button-has-type
    type={props.type}
    onClick={props.onClick}
    disabled={props.isDisabled}
  >
    {props.children}
  </button>
);

Button.defaultProps = DefaultProps;

export { Button };
