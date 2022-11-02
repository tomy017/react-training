import React, { useState } from 'react';

import { Button } from 'common/buttons/button';
import { checkLoginInputs, isValidEmail } from 'helpers/validators';
import { User } from 'networking/types/user';
import { goToPage, RouteName } from 'routes';
import { classnames } from 'helpers/utils';
import styles from './card.module.scss';
import userIcon from '../../../assets/images/user.png';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [error, setError] = useState(false);
  const [reminder, setReminder] = useState('');

  const handlePasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e : React.SyntheticEvent) => {
    e.preventDefault();

    if (!emailIsValid) {
      setError(true);
      setReminder('Check your email');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') ?? '[]') as User[];
    const found = users.find((user) => user.email === email && user.password === password);

    if (!found) {
      setError(true);
      setReminder('User not registered');
    } else {
      localStorage.setItem('activeUser', JSON.stringify(found));
      goToPage(RouteName.Home, undefined, undefined);
    }
  };

  const emailValidation = () => setEmailIsValid(isValidEmail(email));

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.cardContainer}>
        <img src={userIcon} alt="User icon" width={100} height={100} />
        <div className={styles.cardElement}>
          <label htmlFor="email">
            <input
              className={classnames(emailIsValid ? styles.validInput : styles.invalidInput)}
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onBlur={emailValidation}
              onChange={handleEmailChange}
            />
            {!emailIsValid && <span className={styles.errorLabel}>Check your email</span>}
          </label>
        </div>
        <div className={styles.cardElement}>
          <label htmlFor="password">
            <input
              className={styles.validInput}
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <Button
          type="submit"
          onClick={() => null}
          isDisabled={!checkLoginInputs(email, password)}
        >
          LOGIN
        </Button>
        <div className={styles.cardElement}>
          {reminder
          && <span className={classnames(error ? styles.error : styles.info)}>{reminder}</span>}
        </div>
      </div>
    </form>
  );
};

export { LoginForm };
