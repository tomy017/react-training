import React, { useState } from 'react';

import { Button } from 'common/buttons/button';
import { checkLoginInputs } from 'helpers/validators';
import styles from './card.module.scss';
import userIcon from '../../../assets/images/user.png';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
  };

  const handleEmailChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.cardContainer}>
        <img src={userIcon} alt="User icon" width={100} height={100} />
        <div className={styles.cardElement}>
          <label htmlFor="email">
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
          isDisabled={!checkLoginInputs(email, password)}
        >
          LOGIN
        </Button>
      </div>
    </form>
  );
};

export { LoginForm };
