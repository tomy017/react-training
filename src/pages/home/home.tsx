import React, { useEffect, useState } from 'react';

import globalStyles from 'assets/stylesheets/global-styles.module.scss';
import { UserController } from 'networking/controllers/user-controller';
import { ParamsHelper } from 'helpers/params-helper';
import { Button } from 'common/buttons/button';
import styles from './home.module.scss';
import buttonStyles from '../../common/buttons/pagination-button.module.scss';

const getPage = () => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const page = params.get('page');
  if (!page || Number(page) < 0) {
    return 0;
  }
  return Number(page);
};

const Home = () => {
  const [users, setUsers] = useState<DummyUser[]>([]);
  const [currentPage, setCurrentPage] = useState(getPage());
  const [lastPage, setLastPage] = useState(0);
  const [disable, setDisable] = useState(false);

  const RECORDS_PER_PAGE = 20;

  const setParams = (defaultPage? : boolean) => {
    const queryPage = getPage();
    let params;
    if (defaultPage) {
      params = '?page=0';
    } else {
      params = ParamsHelper.createQueryParams({ page: !queryPage ? currentPage : queryPage });
    }
    const route = `/${params}`;
    window.history.pushState({}, '', route);
  };

  const redirectDefaultPage = () => {
    const params = '?page=0';
    const route = `/${params}`;
    window.history.pushState({}, '', route);
    setCurrentPage(0);
  };

  const updateParams = (step : number) => {
    const params = ParamsHelper.createQueryParams({ page: currentPage + step });
    const route = `/${params}`;
    window.history.pushState({}, '', route);
  };

  const handleNextPageClick = () => {
    updateParams(1);
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPageClick = () => {
    updateParams(-1);
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setDisable(true);
    const page = getPage();
    UserController.getUsers(page).then((value) => {
      if (value.users.length === 0) {
        redirectDefaultPage();
      } else {
        setUsers(value.users);
        setLastPage(Math.floor(value.total / RECORDS_PER_PAGE));
        setDisable(false);
        setParams();
      }
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
            <div key={user.id} className={styles.userCard} data-testid="userCard">
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
      <div className={styles.pageNavigation}>
        {(currentPage > 0 && users.length !== 0) && (
          <Button
            className={buttonStyles.customPaginationButton}
            type="button"
            isDisabled={disable}
            onClick={handlePreviousPageClick}
          >
            👈 Previous page
          </Button>
        )}
        {(currentPage < lastPage) && (
          <Button
            className={buttonStyles.customPaginationButton}
            type="button"
            isDisabled={disable}
            onClick={handleNextPageClick}
          >
            Next page 👉
          </Button>
        )}
      </div>
    </div>
  );
};

export { Home };
