import { classnames } from 'helpers/utils';
import React, {
  ReactNode, useEffect, useRef, useState,
} from 'react';
import styles from './dropdown.module.scss';

interface DropDownProps {
  username: string,
  children: ReactNode,
}

const DropDown = (props: DropDownProps) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target) && show) {
        setShow(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [show]);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={styles.dropdown} ref={ref}>
      <button
        className={styles.activeUser}
        onClick={handleClick}
        type="button"
      >
        {props.username}
      </button>
      <div className={classnames(show ? styles.showMenu : styles.hideMenu)}>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export { DropDown };
