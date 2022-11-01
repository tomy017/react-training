import React, { useEffect, useState } from 'react';

import globalStyles from 'assets/stylesheets/global-styles.module.scss';
import { UserController } from 'networking/controllers/user-controller';
import styles from './home.module.scss';

const Home = () => {
  const [users, setUsers] = useState<DummyUser[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [disable, setDisable] = useState(false);

  const RECORDS_PER_PAGE = 20;

  const handleNextPageClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPageClick = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setDisable(true);
    UserController.getUsers(currentPage).then((value) => {
      setUsers(value.users);
      setLastPage(Math.floor(value.total / RECORDS_PER_PAGE));
      setDisable(false);
    });
  }, [currentPage]);
  return (
    <div className={globalStyles.genericContainer}>
      <h1 className={styles.title}>
        Welcome back 👋
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
      {(currentPage > 0) && (
        <button
          disabled={disable}
          type="button"
          onClick={handlePreviousPageClick}
        >
          Previous page
        </button>
      )}
      {(currentPage < lastPage) && (
        <button
          type="button"
          disabled={disable}
          onClick={handleNextPageClick}
        >
          Next page
        </button>
      )}
    </div>
  );
};

export { Home };
