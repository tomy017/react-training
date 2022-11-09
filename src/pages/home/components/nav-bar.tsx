import { User } from 'networking/types/user';
import React, { useContext } from 'react';
import { RouteName } from 'routes';
import { UserContext } from 'user-context';
import styles from './nav-bar.module.scss';

const NavBar = () => {
  const activeUser = JSON.parse(localStorage.getItem('activeUser') ?? '') as User;
  const contextValue = useContext(UserContext);
  const { defaultUsers } = contextValue;

  const handleChange = (e : any) => {
    const searchTerm = e.target.value.toString();
    // eslint-disable-next-line max-len
    const filter = contextValue.defaultUsers.filter((user) => user.firstName.toUpperCase().match(searchTerm.toUpperCase()));

    if (filter.length === 0) {
      contextValue.updateFilterUsers(defaultUsers);
    } else {
      contextValue.updateFilterUsers(filter);
    }
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
