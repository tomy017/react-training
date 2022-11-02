import React, { useState } from 'react';

import { Button } from 'common/buttons/button';
import { isValidPassword, isValidEmail, checkSignupInputs } from 'helpers/validators';
import { classnames } from 'helpers/utils';
import { User } from 'networking/types/user';
import { goToPage, RouteName } from 'routes';
import styles from './card.module.scss';

const DEFAULT_REMINDER = 'Password must be 8 characters long and include special characters';

const SignUpForm = () => {
  const [formInputs, setFormInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [reminder, setReminder] = useState(DEFAULT_REMINDER);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [confirmationIsValid, setConfirmationIsValid] = useState(true);
  const [error, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormInputs({
      ...formInputs,
      [e.target.name]: value,
    });
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
      firstName: formInputs.firstName,
      lastName: formInputs.lastName,
      email: formInputs.email,
      password: formInputs.password,
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

  const emailValidation = () => setEmailIsValid(isValidEmail(formInputs.email));
  const passwordValidation = () => setPasswordIsValid(isValidPassword(formInputs.password));
  function confirmationValidation() {
    setConfirmationIsValid(formInputs.password === formInputs.passwordConfirmation);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.cardContainer}>
        <div className={styles.cardElement}>
          <label htmlFor="firstName">
            <input
              className={styles.validInput}
              type="text"
              name="firstName"
              placeholder="first name"
              value={formInputs.firstName}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={styles.cardElement}>
          <label htmlFor="lastName">
            <input
              className={styles.validInput}
              type="text"
              name="lastName"
              placeholder="last name"
              value={formInputs.lastName}
              onChange={handleInputChange}
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
              value={formInputs.email}
              onChange={handleInputChange}
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
              value={formInputs.password}
              onChange={handleInputChange}
              onBlur={passwordValidation}
            />
            {!passwordIsValid && <span className={styles.errorLabel}>Check your password</span>}
          </label>
        </div>
        <div className={styles.cardElement}>
          <label htmlFor="passwordConfirmation">
            <input
              className={classnames(confirmationIsValid ? styles.validInput : styles.invalidInput)}
              type="password"
              name="passwordConfirmation"
              placeholder="password confirmation"
              value={formInputs.passwordConfirmation}
              onChange={handleInputChange}
              onBlur={confirmationValidation}
            />
            {!confirmationIsValid
            && <span className={styles.errorLabel}>Password does not match</span>}
          </label>
        </div>
        <div className={styles.cardElement}>
          <Button
            type="submit"
            onClick={() => null}
            isDisabled={!checkSignupInputs(
              formInputs.firstName,
              formInputs.lastName,
              formInputs.email,
              formInputs.password,
              formInputs.passwordConfirmation,
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
