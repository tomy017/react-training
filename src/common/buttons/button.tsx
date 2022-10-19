import React, { ReactNode } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  children: ReactNode
};

const Button = (props : ButtonProps) => (
  <button className={styles.customButton} type="button">{props.children}</button>
);

export { Button };
