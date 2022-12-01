import React, { useEffect, useState } from 'react';

import { UnderlineButton } from 'common/buttons/underline-button';
import { goToPage, RouteName } from 'routes';
// import { User } from 'networking/types/user';
import styles from './card.module.scss';
import { LoginForm } from './login-form';
import { SignUpForm } from './signup-form';

const Card = () => {
  const value = document.cookie;
  if (value) {
    goToPage(RouteName.Home);
  }

  const [uri, setUri] = useState(window.location.pathname);

  useEffect(() => {
    setUri(window.location.pathname);
  }, [window.location.pathname]);

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
