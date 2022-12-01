import React, { useContext, useEffect, useState } from 'react';
import { useDebounce } from 'hooks/useDebounce';
import { AppLink, goToPage, RouteName } from 'routes';
import { UserContext } from '../../../common/user-context';
import { DropDown } from './dropdown';
import { Button } from '../../../common/buttons/button';
import styles from './nav-bar.module.scss';

const NavBar = () => {
  const contextValue = useContext(UserContext);

  const handleClick = () => {
    document.cookie = `userToken=;expires=${new Date()}`;
    goToPage(RouteName.Login);
  };

  const [searchTerm, setSearchTerm] = useState<string>('');
  const { unfilteredUsers, updateFilteredUsers } = useContext(UserContext);
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // eslint-disable-next-line max-len
      const filter = unfilteredUsers.filter((user) => user.firstName.toUpperCase().match(debouncedSearchTerm.toUpperCase()));

      const toFilter = filter.length ? filter : unfilteredUsers;
      updateFilteredUsers(toFilter);
    } else {
      updateFilteredUsers(unfilteredUsers);
    }
  }, [debouncedSearchTerm]);

  const handleChange = (e : any) => {
    setSearchTerm(e.target.value);
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
              onChange={handleChange}
              value={searchTerm}
            />
            <i className="material-symbols-outlined">
              search
            </i>
          </div>
        </label>
      </form>
      {(contextValue.currentUser) && (
        <DropDown username={contextValue.currentUser.firstname}>
          <Button
            isDisabled={false}
            className={styles.linkNav}
            type="button"
            onClick={handleClick}
          >
            Logout 🔒
          </Button>
        </DropDown>
      )}
    </div>
  );
};
export { NavBar };
