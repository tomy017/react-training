import { User } from 'networking/types/user';
import React from 'react';
import { AppLink, goToPage, RouteName } from 'routes';
import { DropDown } from './dropdown';
import styles from './nav-bar.module.scss';

const NavBar = () => {
  const activeUser = JSON.parse(localStorage.getItem('activeUser') ?? '') as User;

  const handleClick = () => {
    document.cookie = `userToken=;expires=${new Date()}`;
    goToPage(RouteName.Login);
  };

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
      <DropDown username={activeUser.firstname}>
        <button
          className={styles.link}
          type="button"
          onClick={handleClick}
        >
          Logout 🔒
        </button>
      </DropDown>
    </div>
  );
};
export { NavBar };
