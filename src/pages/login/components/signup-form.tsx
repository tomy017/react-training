import React, { useState } from 'react';

import { Button } from 'common/buttons/button';
import { isValidPassword, isValidEmail, checkSignupInputs } from 'helpers/validators';
import { classnames } from 'helpers/utils';
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
    setError(false);
    setReminder(DEFAULT_REMINDER);
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setReminder(DEFAULT_REMINDER);
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setReminder(DEFAULT_REMINDER);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setReminder(DEFAULT_REMINDER);
    setPassword(e.target.value);
    if (!isValidPassword(e.target.value)) {
      setReminder('Password must be 8 characters long and include special characters');
    } else {
      setReminder('');
    }
  };

  const handlePasswordConfirmationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setReminder(DEFAULT_REMINDER);
    setPasswordConfirmation(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!(emailIsValid && passwordIsValid && confirmationIsValid)) {
      setError(true);
      setReminder('Check your information');
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
              required
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
              required
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
              required
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
            onClick={() => alert('You clicked me')}
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
          {reminder
          && <span className={classnames(error ? styles.error : styles.info)}>{reminder}</span>}
        </div>
      </div>
    </form>
  );
};

export { SignUpForm };
