import { User } from 'networking/types/user';
import React, { useContext, useEffect, useState } from 'react';
import { RouteName } from 'routes';
import { useDebounce } from 'hooks/useDebounce';
import { UserContext } from '../../../common/user-context';
import styles from './nav-bar.module.scss';

const NavBar = () => {
  const activeUser = JSON.parse(localStorage.getItem('activeUser') ?? '') as User;
  const contextValue = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { defaultUsers } = contextValue;
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // eslint-disable-next-line max-len
      const filter = contextValue.defaultUsers.filter((user) => user.firstName.toUpperCase().match(debouncedSearchTerm.toUpperCase()));

      if (filter.length === 0) {
        contextValue.updateFilterUsers(defaultUsers);
      } else {
        contextValue.updateFilterUsers(filter);
      }
    } else {
      contextValue.updateFilterUsers(defaultUsers);
    }
  }, [debouncedSearchTerm]);

  const handleChange = (e : any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.navBar}>
      <a className={styles.webName} href={RouteName.Home}>Dummygram</a>
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
      <span className={styles.activeUser}>{activeUser.firstName}</span>
    </div>
  );
};
export { NavBar };
