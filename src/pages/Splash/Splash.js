import React from 'react';
import logo from '../../images/bje.svg';
import styles from './Splash.module.scss';

const Splash = () => {
  return (
    <main className={styles._}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt='logo' />
      </header>
    </main>
  );
};

export default Splash;
