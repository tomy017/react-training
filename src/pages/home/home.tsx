import React from 'react';

import globalStyles from 'assets/stylesheets/global-styles.module.scss';
import { goToPage, RouteName } from 'routes';
import { User } from 'networking/types/user';
import styles from './home.module.scss';

const Home = () => {
  const activeUser = JSON.parse(localStorage.getItem('activeUser') ?? '{}') as User;
  if (!activeUser.email) {
    goToPage(RouteName.Login);
  }
  return (
    <div className={globalStyles.genericContainer}>
      <h1 className={styles.title}>
        Welcome! This is the homepage.
      </h1>
    </div>
  );
};

export { Home };
