import React, { useState } from 'react';

import { Button } from 'common/buttons/button';
import { isValidPassword, isValidEmail, checkSignupInputs } from 'helpers/validators';
import { classnames } from 'helpers/utils';
import { User } from 'networking/types/user';
import { goToPage, RouteName } from 'routes';
import styles from './card.module.scss';

const DEFAULT_REMINDER = 'Password must be 8 characters long and include special characters';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [reminder, setReminder] = useState(DEFAULT_REMINDER);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [confirmationIsValid, setConfirmationIsValid] = useState(true);
  const [error, setError] = useState(false);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReminder(DEFAULT_REMINDER);
    setError(false);
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!(emailIsValid && passwordIsValid && confirmationIsValid)) {
      setError(true);
      setReminder('Check your information');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') ?? '[]') as User[];
    const newUser : User = {
      firstName,
      lastName,
      email,
      password,
    };

    const found = users.find((user) => user.email === newUser.email);
    if (!found) {
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      goToPage(RouteName.Login);
    } else {
      setError(true);
      setReminder('User already registered');
    }
  };

  const emailValidation = () => setEmailIsValid(isValidEmail(email));
  const passwordValidation = () => setPasswordIsValid(isValidPassword(password));
  const confirmationValidation = () => setConfirmationIsValid(password === passwordConfirmation);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.cardContainer}>
        <div className={styles.cardElement}>
          <label htmlFor="firstname">
            <input
              className={styles.validInput}
              type="text"
              name="firstname"
              placeholder="first name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </label>
        </div>
        <div className={styles.cardElement}>
          <label htmlFor="lastname">
            <input
              className={styles.validInput}
              type="text"
              name="lastname"
              placeholder="last name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </label>
        </div>
        <div className={styles.cardElement}>
          <label htmlFor="email">
            <input
              className={classnames(emailIsValid ? styles.validInput : styles.invalidInput)}
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={emailValidation}
            />
            {!emailIsValid && <span className={styles.errorLabel}>Check your email</span>}
          </label>
        </div>
        <div className={styles.cardElement}>
          <label htmlFor="password">
            <input
              className={classnames(passwordIsValid ? styles.validInput : styles.invalidInput)}
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={passwordValidation}
            />
            {!passwordIsValid && <span className={styles.errorLabel}>Check your password</span>}
          </label>
        </div>
        <div className={styles.cardElement}>
          <label htmlFor="password confirmation">
            <input
              className={classnames(confirmationIsValid ? styles.validInput : styles.invalidInput)}
              type="password"
              name="password confirmation"
              placeholder="password confirmation"
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
              onBlur={confirmationValidation}
            />
            {!confirmationIsValid
            && <span className={styles.errorLabel}>Password does not match</span>}
          </label>
        </div>
        <div className={styles.cardElement}>
          <Button
            onClick={() => null}
            isDisabled={!checkSignupInputs(
              firstName,
              lastName,
              email,
              password,
              passwordConfirmation,
            )}
          >
            SIGNUP
          </Button>
        </div>
        <div className={styles.cardElement}>
          <span className={classnames(error ? styles.error : styles.info)}>{reminder}</span>
        </div>
      </div>
    </form>
  );
};

export { SignUpForm };
