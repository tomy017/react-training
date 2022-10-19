import { Button } from 'common/buttons/button';
import React from 'react';

import styles from './card.module.scss';

const Card = () => (
  <div className={styles.card}>
    <form>
      <div className={styles.cardContainer}>
        <div className={styles.cardElement}>
          <label htmlFor="email">
            <input type="text" name="email" placeholder="email" />
          </label>
        </div>
        <div className={styles.cardElement}>
          <label htmlFor="password">
            <input type="password" name="password" placeholder="password" />
          </label>
        </div>
        <Button> LOGIN </Button>
      </div>
    </form>
  </div>
);

export { Card };
