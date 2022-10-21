import React, { useState } from 'react';

import { UnderlineButton } from 'common/buttons/underline-button';
import styles from './card.module.scss';
import { LoginForm } from './login-form';

const Card = () => {
  const getPath = () => window.location.pathname;
  const [uri, setUri] = useState(getPath());
  const handleClick = (path : string) => {
    setUri(path);
    window.history.pushState('', '', path);
  };
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <UnderlineButton
          onClick={() => handleClick('/login')}
        >
          LOGIN
        </UnderlineButton>
        <UnderlineButton
          onClick={() => handleClick('/signup')}
        >
          SIGNUP
        </UnderlineButton>
      </div>
      {uri === '/login' && <LoginForm />}
      <span className={styles.cardFooter}>
        <a href="/login">Forgot password?</a>
      </span>
    </div>
  );
};

export { Card };
