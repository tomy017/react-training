import React, { useEffect, useState } from 'react';

import globalStyles from 'assets/stylesheets/global-styles.module.scss';
import { UserController } from 'networking/controllers/user-controller';
import styles from './home.module.scss';

const Home = () => {
  const [users, setUsers] = useState<DummyUser[]>([]);
  useEffect(() => {
    UserController.getUsers().then((value) => {
      setUsers(value);
    });
  });
  return (
    <div className={globalStyles.genericContainer}>
      <h1 className={styles.title}>
        Welcome back!
      </h1>
      {users.length === 0 && (
        <p>Loading...</p>
      )}
      {users.length > 0 && (
        <div className={globalStyles.genericItemContainer}>
          {users.map((user) => (
            <div className={styles.userCard} data-testid="userCard">
              <img
                src={user.picture}
                alt="User profile"
              />
              <span>{user.firstName}</span>
              <span>{user.lastName}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Home };
