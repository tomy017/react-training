import React from 'react';
import styles from './user-card.module.scss';

const UserCard = (user : DummyUser) => (
  <div key={user.id} className={styles.userCard} data-testid="userCard">
    <img
      src={user.picture}
      alt="User profile"
    />
    <span>{user.firstName}</span>
    <span>{user.lastName}</span>
  </div>
);

export { UserCard };
