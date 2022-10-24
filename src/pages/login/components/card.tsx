import React, { useState } from 'react';

import { UnderlineButton } from 'common/buttons/underline-button';
import styles from './card.module.scss';
import { LoginForm } from './login-form';
import { SignUpForm } from './signup-form';

const Card = () => {
  const getPath = () => window.location.pathname;
  const [uri, setUri] = useState(getPath());

  const handleClick = (path : string) => {
    setUri(path);
    window.history.pushState('', '', path);
  };

  const isLoginActive = () => uri === '/login';
  const isSignupActive = () => uri === '/signup';

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <UnderlineButton
          onClick={() => handleClick('/login')}
          isActive={isLoginActive()}
        >
          LOGIN
        </UnderlineButton>
        <UnderlineButton
          onClick={() => handleClick('/signup')}
          isActive={isSignupActive()}
        >
          SIGNUP
        </UnderlineButton>
      </div>
      {uri === '/login' && <LoginForm />}
      {uri === '/signup' && <SignUpForm />}
      <span className={styles.cardFooter}>
        <a href="/login">Forgot password?</a>
      </span>
    </div>
  );
};

export { Card };
