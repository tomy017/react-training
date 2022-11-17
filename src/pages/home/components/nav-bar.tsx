import { User } from 'networking/types/user';
import React from 'react';
import { AppLink, RouteName } from 'routes';
import styles from './nav-bar.module.scss';

const NavBar = () => {
  const activeUser = JSON.parse(localStorage.getItem('activeUser') ?? '') as User;
  return (
    <div className={styles.navBar}>
      <AppLink
        className={styles.webName}
        routeName={RouteName.Home}
      >
        Dummygram
      </AppLink>
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
      <span className={styles.activeUser}>{activeUser.firstname}</span>
    </div>
  );
};
export { NavBar };
