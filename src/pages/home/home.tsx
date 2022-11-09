import React, { useContext, useEffect, useState } from 'react';

import globalStyles from 'assets/stylesheets/global-styles.module.scss';
import { UserController } from 'networking/controllers/user-controller';
import { ParamsHelper } from 'helpers/params-helper';
import { goToPage, RouteName } from 'routes';
import { User } from 'networking/types/user';
import { Pagination } from 'common/pagination/pagination';
import { UserContext } from 'user-context';
import { UserCard } from './components/user-card';
import styles from './home.module.scss';

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
  const contextValue = useContext(UserContext);
  // const [users, setUsers] = useState<DummyUser[]>([]);
  const [currentPage, setCurrentPage] = useState(getPage());
  const [lastPage, setLastPage] = useState(0);
  const [disable, setDisable] = useState(false);

  const RECORDS_PER_PAGE = 20;

  const activeUser = JSON.parse(localStorage.getItem('activeUser') ?? '{}') as User;
  if (!activeUser.email) {
    goToPage(RouteName.Login);
  }

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
        contextValue.updateDefaultUsers(value.users);
        contextValue.updateFilterUsers(value.users);
        setLastPage(Math.floor(value.total / RECORDS_PER_PAGE));
        setDisable(false);
      }
    });
  }, [currentPage]);

  return (
    <>
      <h1 className={styles.title}>
        Welcome back 👋
      </h1>
      {contextValue.filterUsers.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className={globalStyles.genericItemContainer}>
          {contextValue.filterUsers.map((user) => (
            <UserCard
              id={user.id}
              title={user.title}
              firstName={user.firstName}
              lastName={user.lastName}
              picture={user.picture}
            />
          ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        length={contextValue.filterUsers.length}
        disable={disable}
        onPreviousClick={handlePreviousPageClick}
        onNextClick={handleNextPageClick}
      />
    </>
  );
};

export { Home };
