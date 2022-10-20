import React, { useState } from 'react';

import { Button } from 'common/buttons/button';
import { isValidEmail } from 'helpers/validators';
import styles from './card.module.scss';

const Card = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const checkInputs = () => email.length > 0 && password.length > 0;

  const handlePasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    if (!isValidEmail(e.target[0].value)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <div className={styles.cardContainer}>
          <div className={styles.cardElement}>
            <label htmlFor="email">
              {emailError && <span className={styles.error}>{emailError}</span> }
              <input
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
          </div>
          <div className={styles.cardElement}>
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
          <Button
            onClick={() => alert('You clicked me')}
            isDisabled={!checkInputs()}
          >
            LOGIN
          </Button>
        </div>
      </form>
      <span className={styles.cardFooter}>
        <a href="/login">Forgot password?</a>
      </span>
    </div>
  );
};

export { Card };
