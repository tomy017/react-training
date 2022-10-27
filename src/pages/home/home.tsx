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
        Welcome! This is the homepage.
      </h1>
      {users.length === 0 && (
        <p>Loading...</p>
      )}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.firstName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Home };
