import { NavBar } from 'pages/home/components/nav-bar';
import React from 'react';
import styles from '../../assets/stylesheets/global-styles.module.scss';

enum LayoutType {
  // Add more layout types here
  Home = 'Home',
}

type LayoutProps = {
  children: React.ReactNode,
  layoutType: LayoutType,
};

const Layout = ({ layoutType, children } : LayoutProps) => {
  if (layoutType === LayoutType.Home) {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        <div className={styles.genericContainer}>
          <NavBar />
          {children}
        </div>
      </>
    );
  }
  return null;
};

export { Layout, LayoutType };
