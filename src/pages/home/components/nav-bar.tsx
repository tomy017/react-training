import { User } from 'networking/types/user';
import React from 'react';
import styles from './nav-bar.module.scss';

const NavBar = () => {
  const activeUser = JSON.parse(localStorage.getItem('activeUser') ?? '') as User;
  return (
    <div className={styles.navBar}>
      <span className={styles.webName}>Dummygram</span>
      <form>
        <label htmlFor="first name or last name">
          <div className={styles.wrapper}>
            <input
              placeholder="Search"
            />
            <i className="material-symbols-outlined">
              search
            </i>
          </div>
        </label>
      </form>
      <span>{activeUser.firstName}</span>
    </div>
  );
};
export { NavBar };
