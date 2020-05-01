import React from 'react';
import logo from './bje.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles._}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt='logo' />
      </header>
    </div>
  );
}

export default App;
