import React, { useState } from 'react';

import { Button } from 'common/buttons/button';
import { isValidEmail } from 'helpers/validators';
import styles from './card.module.scss';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [reminder, setReminder] = useState('Password must be 8 characters long and include special characters');

  const strongRegex = /^(?=.*[!@.#$%^&?*])(?=.*[a-z]).{8,}$/;
  const isValidPassword = (testPassword : string) => strongRegex.test(testPassword);

  function checkInputs() {
    console.log(password === passwordConfirmation);
    return firstName.length > 0
    && lastName.length > 0
    && email.length > 0
    && isValidPassword(password)
    && password === passwordConfirmation;
  }

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
    setPassword(e.target.value);
    if (!isValidPassword(e.target.value)) {
      setReminder('Password must be 8 characters long and include special characters');
    } else {
      setReminder('');
    }
  };

  const handlePasswordConfirmationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!isValidEmail(e.target[0].value)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
    if (!isValidPassword(e.target[3].value)) {
      setPasswordError('Password must be at least 8 characters long and have special characters');
    } else {
      setPasswordError('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.cardContainer}>
        <div className={styles.cardElement}>
          <label htmlFor="firstname">
            <input
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
            {passwordError && <span className={styles.error}>{emailError}</span>}
            <input
              required
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <div className={styles.cardElement}>
          {reminder && <span className={styles.info}>{reminder}</span>}
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <div className={styles.cardElement}>
          <label htmlFor="password confirmation">
            <input
              type="password"
              name="password confirmation"
              placeholder="password confirmation"
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
            />
          </label>
        </div>
        <Button
          onClick={() => alert('You clicked me')}
          isDisabled={!checkInputs()}
        >
          SIGNUP
        </Button>
      </div>
    </form>
  );
};

export { SignUpForm };
