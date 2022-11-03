import React from 'react';
import styles from './nav-bar.module.scss';

type NavBarProps = {
  name: string
};

const NavBar = (props : NavBarProps) => (
  <div className={styles.navBar}>
    <span>Dummygram</span>
    <form>
      <label htmlFor="first name or last name">
        <input
          placeholder="Search"
        />
      </label>
    </form>
    <span>{props.name}</span>
  </div>
);

export { NavBar };
