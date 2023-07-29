import { Heading } from '@ariakit/react';
import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
  return (
    <header className={styles['_']}>
      <Heading>bjeco</Heading>
    </header>
  );
};
